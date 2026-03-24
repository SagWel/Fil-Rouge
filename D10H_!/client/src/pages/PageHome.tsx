import { Box, 
    Modal, 
    ModalBody, 
    ModalHeader, 
    ModalContent, 
    ModalOverlay, 
    useDisclosure, 
    Heading, 
    chakra, 
    Stack, 
    FormControl, 
    FormLabel, 
    Center,
    Image,
    Flex,
    Text,
    Button,
    Select} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* Import SVG */
import { AddCircleIcon, DisableIcon } from "../components/Svg";

/* Import conponents */
import Carousel from "../components/PartitionCarousel"
import PartitionCard, {difficultyLvl} from "../components/PartitionCard";

/* Import hook */
import { useAuth } from "../hooks/useAuth";

/* Import type */
import { type IPartitions } from "../types/partitions";
import type { IInstrument, IInstrumentLvl } from "../types/instrument";

export interface IPageAcceuilProps {}

const PageAcceuil: React.FC<IPageAcceuilProps> = () => {

    /* Varibles to stock Partitions for carousel */
    const [popularPartitions, setPopularPartitions] = useState<IPartitions[] | []>([])
    const [newsPartitions, setNewsPartitions] = useState<IPartitions[] | []>([])
    const [suggestionsPartitions, setSuggestionsPartitions] = useState<IPartitions[] | []>([])
    const [historyPartitions, setHistoryPartitions] = useState<IPartitions[] | []>([])

    /* Varibles to edit user profil */
    const [userInstruments, setUserInstruments] = useState<IInstrumentLvl[] | []>([])
    const [instruments, setInstruments] = useState<IInstrument[] | []>([])
    const [currentInstrument, setCurrentInstrument] = useState<IInstrument | undefined>(undefined)
    const [currentLvl, setCurrentLvl] = useState<1 | 2 | 3| 4 | 5 | undefined>(undefined)

    /* Varable to display modal in Modal */
    const [displayDiv, setDisplayDiv] = useState<"block" | "none">("none")
    
    /* Variables from context by hook */
    const { isFirstLogin, user, setIsFirstLogin } = useAuth()

    /* Naviagation */
    const navigate = useNavigate()

    const host = import.meta.env.VITE_HOST
    const port = import.meta.env.VITE_SERVER_PORT
    
    const fetchPartitions = async (URL: string, set: React.Dispatch<React.SetStateAction<IPartitions[] | []>>) => {
        try {
            const res = await fetch(`http://${host}:${port}${URL}`, {credentials: 'include'})

            if (!res.ok) {
                throw new Error(`Erreur HTTP: ${res.status}`);                
            }

            const data = await res.json()
            set(data)
        } catch (error) {
            console.error('Impossible de récupérer les données des partitions:', error);
        }
    }

    const fetchInstruments = async () => {
        const urlFetchInstruments = import.meta.env.VITE_URL_FETCH_ALLINSTRUMENTS
        try {
            const res: Response = await fetch(`http://${host}:${port}${urlFetchInstruments}`, {credentials: 'include'})

            if (!res.ok) {
                throw new Error(`Erreur HTTP: ${res.status}`);                
            }

            const data = await res.json()
            if (data) {                
                setInstruments(data)             
            }
            
            
        } catch (error) {
            console.error('Imposible de récuperer les Instruments dans la base de donnée : ', error)
        }
    }

    /* Display modal */
    const handleOnClickOpenAddInstrument = (e: Event) => {
        e.preventDefault()
        setDisplayDiv("block")
    }

    /* hiding modal */
    const handleOnClickCloseAddInstrument = (e: Event) => {
        e.preventDefault()
        setCurrentInstrument(undefined)
        setCurrentLvl(1)
        setDisplayDiv("none")
    }

    /* Add instrument in list */
    const handleOnClickAddInstrument = (e: Event) => {
        e.preventDefault()
        if (currentInstrument && currentLvl) {
            const currentUserInstrument: IInstrumentLvl = {
                instrument: currentInstrument,
                lvl: currentLvl
            }
            setCurrentInstrument(undefined)            
            setCurrentLvl(undefined)
            
            setUserInstruments(prevInstrumentLvl => [...prevInstrumentLvl, currentUserInstrument])
            setDisplayDiv("none")
        }
    }

    /* Delete instrument in list */
    const deleteInstrument = (id: number) => {
        setUserInstruments(prevItems => prevItems.filter((_, i) => i !== id))
    }

    /* Send to backend User's instruments */
    const handleSubmitUserInstruments = async (e: Event) => {
        e.preventDefault()
        const urlFetchCreatUserInstruments = import.meta.env.VITE_URL_FETCH_CREATUSERINSTRUMENTS
        try {
            if (userInstruments.length > 0) {
                const res = await fetch(`http://${host}:${port}${urlFetchCreatUserInstruments}`, {
                    method : 'POST',
                    headers : {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        userId: user?.id,
                        userInstruments: userInstruments
                    }),
                    credentials: 'include'
                })
    
                if (!res.ok) {
                    throw new Error(`Erreur HTTP: ${res.status}`);
                }
    
                setIsFirstLogin(false)
                navigate(0)
            }
        } catch (error) {
            console.error("Impossible d'associer les instruments et leur niveau au profil de l'utilisateur : ", error)
        }
    }

    /* close Modam */
    const { onClose} = useDisclosure()

    useEffect(() => {
        const urlFetchPopular = import.meta.env.VITE_URL_FETCH_POPULAR
        const urlFetchNews = import.meta.env.VITE_URL_FETCH_NEWS
        const urlFetchSuggestions = import.meta.env.VITE_URL_FETCH_SUGGESTIONS

        fetchPartitions(urlFetchPopular, setPopularPartitions)
        fetchPartitions(urlFetchNews, setNewsPartitions)
        fetchPartitions(`${urlFetchSuggestions}${user?.id}`, setSuggestionsPartitions)
        fetchInstruments()
    },[])

    return(
        <Box id="homeUser"
        overflowY={"auto"} height={"100%"} mb={"70px"} position={"relative"}>
            <Carousel id="recents-carousel" 
            data={historyPartitions} title="Partitions joués récement"
            renderItem={(item:IPartitions) => (
                <PartitionCard key={item.id} partition={item} currentInstrument={item.instruments.currentInstrument.name} />
            )} />

            <Carousel id="suggestions-carousel"
            data={suggestionsPartitions} title="Suggestions"
            renderItem={(item:IPartitions) => (
                <PartitionCard key={item.id} partition={item} currentInstrument={item.instruments.currentInstrument.name} />
            )}/>

            <Carousel id="news-carousel"
            data={newsPartitions} title="Nouveautés"
            renderItem={(item:IPartitions) => (
                <PartitionCard key={item.id} partition={item} currentInstrument={item.instruments.currentInstrument.name} />
            )}/>

            <Carousel id="popular-carousel"
            data={popularPartitions} title="Partitions populaires"
            renderItem={(item:IPartitions) => (
                <PartitionCard key={item.id} partition={item} currentInstrument={item.instruments.currentInstrument.name} />
            )}/>
            <Modal isOpen={isFirstLogin} onClose={onClose}>
                <ModalOverlay background={"rgba(0, 0, 0, 0.48)"}
                style={{
                    opacity: "1"
                }}
                />
                <ModalContent 
                maxW={"48rem"}
                paddingBottom={"1rem"} paddingTop={"0.25rem"}
                bg={"#000000"} borderRadius={"0.5rem"}
                boxShadow={"rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,rgba(0, 0, 0, 0.2) 0px 5px 10px,rgba(0, 0, 0, 0.4) 0px 15px 40px"}
                style={{
                    opacity: 1,
                    transform: "none"
                }}>
                    <ModalHeader display={"flex"}
                    justifyContent={"center"}
                    paddingInlineStart={"1rem"} paddingInlineEnd={"0.75rem"} padding={"1.5rem"}
                    fontSize={"18px"} fontWeight={"700"} lineHeight={"24px"} fontFamily={"Inter,Arial,sans-serif"}
                    borderBottom={"1px solid #38373b"}>
                        <Heading as={"h2"} 
                        fontFamily={"Inter,Arial,sans-serif"} fontWeight={"700"} fontSize={"20px"} lineHeight={"24px"} textDecoration={"none"} color={"#ffffff"}
                        margin={0}>
                            Configuration de ton Profil
                        </Heading>
                    </ModalHeader>
                    <ModalBody width={"100%"}
                    paddingInline={"1.5rem"}
                    fontSize={"14px"} fontWeight={"400"} fontFamily={"Inter,Arial,sans-serif"} lineHeight={"20px"} textDecoration={"none"} textAlign={"left"}>
                        <chakra.form w={"100%"}>
                            <Stack alignItems={"center"} gap={"1rem"}
                            marginInline={"auto"}
                            maxW={"512px"} w={"100%"}>
                                <FormControl w={"100%"} pos={"relative"}>
                                    <Center flexDir={"column"} py={4}>
                                        <Stack pos={"relative"} gap={"1.5rem"} alignItems={"center"} w={"100%"}>
                                            <Box 
                                            flex={"0 0 auto"}
                                            borderRadius={"full"}
                                            overflow={"hidden"}>
                                                <chakra.figure 
                                                display={"inline-block"}
                                                pos={"relative"}
                                                m={0}
                                                maxH={"100%"} maxW={"100%"}
                                                verticalAlign={"top"}
                                                borderRadius={"0.25rem"}
                                                boxShadow={"0 1px 6px #19192229"}
                                                transform={"translateZ(0)"}
                                                overflow={"hidden"}
                                                _hover={{
                                                    boxShadow: "0 1px 6px #1919223d"
                                                }}>
                                                    <Box bg={"#0000"} display={"block"} pos={"relative"}>
                                                        <Image alt={user?.username} src="https://cdn-images.dzcdn.net/images/user//125x125-000000-80-0-0.jpg"
                                                        display={"inline-block"}
                                                        verticalAlign={"top"}
                                                        objectFit={"cover"}
                                                        h={"125px"} w={"125px"}
                                                        borderStyle={"none"} border={0}/>
                                                    </Box>
                                                </chakra.figure>
                                            </Box>
                                            <Heading color={"#ffffff"}>
                                                <span>{user?.username}</span>
                                            </Heading>
                                            <Stack gap={"1rem"} marginInline={"auto"} w={"100%"} maxW={"512px"}>
                                                <Stack alignItems={"center"} gap={"1rem"}
                                                marginInline={"auto"}
                                                w={"100%"} maxW={"512px"}>
                                                    <FormControl w={"100%"}>
                                                        <FormLabel display={"block"}
                                                        marginInlineEnd={"0.75rem"}
                                                        mb={"0.5rem"}
                                                        fontWeight={"500"} fontSize={"0.875rem"}
                                                        color={"#a19fa4"}
                                                        textAlign={"start"}
                                                        opacity={1}
                                                        transitionDuration={"200ms"} transitionProperty={"background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform"}>
                                                            Instruments joués
                                                        </FormLabel>
                                                        <Stack alignItems={"center"} gap={"1rem"}
                                                        position={"relative"}
                                                        paddingInlineStart={"1rem"} paddingInlineEnd={"0.75rem"} py={"0.75rem"}
                                                        w={"100%"} h={"fit-content"} minW={"0"} minH={"3rem"}
                                                        fontSize={"16px"} fontWeight={"400"} fontFamily={"Inter,Arial,sans-serif"}
                                                        color={"#ffffff"} lineHeight={"24px"} textDecor={"none"}
                                                        bg={"#242326"}
                                                        borderRadius={"0.5rem"} borderColor={"transparent"} borderWidth={"0.125rem"} borderStyle={"solid"}
                                                        outline={"transparent solid 2px"} outlineOffset={"2px"}
                                                        transitionDuration={"200ms"} transitionProperty={"background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform"}
                                                        appearance={"none"}>
                                                            {userInstruments.map((ui: IInstrumentLvl, index ) => (
                                                                    <Flex key={index} w={"100%"} bg={"#4d4c50"} justifyContent={"space-between"} alignItems={"center"} ps={"1rem"} borderRadius={"0.375rem"}>
                                                                        <Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                                                                            <Flex w={"50%"} justifyContent={"space-between"}>
                                                                            <Text fontSize={"20px"}>{ui.instrument.name.toUpperCase()}</Text>
                                                                            <Text fontSize={"24px"}>{"==>"}</Text>
                                                                            </Flex>
                                                                            <Flex flexDir={"row"} justifyContent={"center"} w={"50%"} alignItems={"center"}>
                                                                            {difficultyLvl(ui.lvl)}
                                                                            </Flex>

                                                                        </Flex>
                                                                        <Button 
                                                                        bg={"transparent"} p={0}
                                                                        onClick={() => deleteInstrument(index)}
                                                                        _hover={{
                                                                            bg: "#434344"
                                                                        }}
                                                                        _active={{
                                                                            borderColor: "#ad47ff",
                                                                            bg: "#434344"
                                                                        }}
                                                                        _focus={{
                                                                            borderColor: "#ad47ff"
                                                                        }}
                                                                        _focusVisible={{
                                                                            boxShadow: "0 0 0 3px #ad47ff"
                                                                        }}>
                                                                            <DisableIcon />
                                                                        </Button>
                                                                    </Flex>
                                                                ))}
                                                            <Flex as={Button} w={"100%"} bg={"#4d4c50"} justifyContent={"center"} alignItems={"center"}
                                                            onClick={handleOnClickOpenAddInstrument}
                                                            _hover={{
                                                                bg: "#434344"
                                                            }}
                                                            _active={{
                                                                borderColor: "#ad47ff",
                                                                bg: "#434344"
                                                            }}
                                                            _focus={{
                                                                borderColor: "#ad47ff"
                                                            }}
                                                            _focusVisible={{
                                                                boxShadow: "0 0 0 3px #ad47ff"
                                                            }}>
                                                                <AddCircleIcon />
                                                            </Flex>
                                                        </Stack>
                                                        <Box display={displayDiv} 
                                                        w={"140%"} h={"fit-content"}
                                                        p={".75rem"}
                                                        pos={"absolute"} top={"50%"} left={"50%"} transform={"translate(-50%, -50%)"}
                                                        bg={"#242326"} zIndex={"200"}>
                                                            <Stack pos={"relative"} w={"100%"} h={"100%"} textAlign={'center'} gap={5}>
                                                                <Heading paddingInlineStart={"1rem"} paddingInlineEnd={"0.75rem"} padding={"1.5rem"}
                                                                fontWeight={"700"} lineHeight={"24px"} fontFamily={"Inter,Arial,sans-serif"}
                                                                borderBottom={"1px solid #38373b"} size={"lg"} textDecoration={"none"} color={"#ffffff"}
                                                                margin={0}>
                                                                    Ajouter un instrument
                                                                </Heading>
                                                                <Flex justifyContent={"center"} alignItems={"center"}
                                                                pos={"absolute"} top={0} right={0} 
                                                                w={"24px"} h={"24px"}>
                                                                    <Button 
                                                                    bg={"transparent"} p={0}
                                                                    onClick={handleOnClickCloseAddInstrument}
                                                                    _hover={{
                                                                            bg: "#434344"
                                                                        }}
                                                                        _active={{
                                                                            borderColor: "#ad47ff",
                                                                            bg: "#434344"
                                                                        }}
                                                                        _focus={{
                                                                            borderColor: "#ad47ff"
                                                                        }}
                                                                        _focusVisible={{
                                                                            boxShadow: "0 0 0 3px #ad47ff"
                                                                        }}>
                                                                        <DisableIcon/>
                                                                    </Button>
                                                                </Flex>
                                                                <Stack flexDir={"row"}>
                                                                    <Select name="instrument" id="identity" value={currentInstrument?.id ?? ""} placeholder="Selectionner un instrument" required
                                                                    pos={"relative"} textTransform={"capitalize"}
                                                                    pb={"1px"}
                                                                    w={"50%"} h={"3rem"} minW={0} minH={"3rem"}
                                                                    fontSize={"16px"} fontWeight={"400"} fontFamily={"Inter,Arial,sans-serif"}
                                                                    lineHeight={"24px"} color={"#ffffff"} textDecor={"none"}
                                                                    bg={"#4d4c50"}
                                                                    borderRadius={"0.5rem"} border={"transparent solid 0.125rem"}
                                                                    outline={"transparent solid 2px"} outlineOffset={"none"}
                                                                    transitionDuration={"200ms"} transitionProperty={"background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform"}
                                                                    appearance={"none"}
                                                                    onChange={(e) => setCurrentInstrument(instruments.find((i) => i.id == Number(e.target.value)))}
                                                                    sx={{
                                                                        paddingInlineStart: "1rem",
                                                                        paddingInlineEnd: "2rem",
                                                                        "> option": { bg: "#4e4c51"}
                                                                    }}
                                                                    _placeholder={{color: "#5D6E73"}}
                                                                    _active={{
                                                                        borderColor: "#ad47ff"
                                                                    }}
                                                                    _focus={{
                                                                        borderColor: "#ad47ff"
                                                                    }}
                                                                    _hover={{
                                                                        bg: "#5e5d5f",
                                                                        color : "#f5f2f8"
                                                                    }}>
                                                                        { Array.isArray(instruments) &&
                                                                        instruments.filter(i => !userInstruments.some(ui => ui.instrument.id === i.id)).map((i, index) => (
                                                                                <chakra.option textTransform={"capitalize"} value={i.id} key={index}>{i.name}</chakra.option>
                                                                            )
                                                                        )}
                                                                    </Select>
                                                                    <Select name="lvl" id="lvl" value={currentLvl ?? ""} placeholder="Niveau exercé" required
                                                                    pos={"relative"}
                                                                    pb={"1px"}
                                                                    w={"50%"} h={"3rem"} minW={0} minH={"3rem"}
                                                                    fontSize={"16px"} fontWeight={"400"} fontFamily={"Inter,Arial,sans-serif"}
                                                                    lineHeight={"24px"} color={"#ffffff"} textDecor={"none"}
                                                                    bg={"#4d4c50"}
                                                                    borderRadius={"0.5rem"} border={"transparent solid 0.125rem"}
                                                                    outline={"transparent solid 2px"} outlineOffset={"none"}
                                                                    transitionDuration={"200ms"} transitionProperty={"background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform"}
                                                                    appearance={"none"}
                                                                    onChange={(e) => setCurrentLvl((Number(e.target.value) as 1 | 2 | 3 | 4 | 5))}
                                                                    sx={{
                                                                        paddingInlineStart: "1rem",
                                                                        paddingInlineEnd: "2rem",
                                                                        "> option": { bg: "#4e4c51"}
                                                                    }}
                                                                    _placeholder={{color: "#5D6E73"}}
                                                                    _active={{
                                                                        borderColor: "#ad47ff"
                                                                    }}
                                                                    _focus={{
                                                                        borderColor: "#ad47ff"
                                                                    }}
                                                                    _hover={{
                                                                        bg: "#5e5d5f",
                                                                        color : "#f5f2f8"
                                                                    }}>
                                                                        <option value={1}>Niveau 1 (Débutant)</option>
                                                                        <option value={2}>Niveau 2</option>
                                                                        <option value={3}>Niveau 3 (Intermédiaire)</option>
                                                                        <option value={4}>Niveau 4</option>
                                                                        <option value={5}>Niveau 5 (Expert)</option>
                                                                    </Select>
                                                                </Stack>
                                                                <Flex justifyContent={"center"} alignItems={"center"}>
                                                                    <Button px={"4rem"} bg={"#4d4c50"} color={"#ffffff"}
                                                                    onClick={handleOnClickAddInstrument}
                                                                    isDisabled={!currentInstrument || !currentLvl}
                                                                    _focusVisible={{
                                                                        boxShadow: "0 0 0 3px #ad47ff"
                                                                    }}
                                                                    _active={{
                                                                        borderColor: "#ad47ff"
                                                                    }}
                                                                    _focus={{
                                                                        borderColor: "#ad47ff"
                                                                    }}
                                                                    _hover={{
                                                                        bg: "#5e5d5f",
                                                                        color : "#f5f2f8"
                                                                    }}>
                                                                        Ajouter
                                                                    </Button>
                                                                </Flex>
                                                            </Stack>
                                                        </Box>
                                                    </FormControl>
                                                    <Button bg={"#4d4c50"} color={"#ffffff"}
                                                    onClick={handleSubmitUserInstruments}
                                                    isDisabled={userInstruments.length === 0}
                                                    _hover={{
                                                        bg: "#434344",
                                                        color : "#f5f2f8"
                                                    }}
                                                    _active={{
                                                        borderColor: "#ad47ff",
                                                        bg: "#434344"
                                                    }}
                                                    _focus={{
                                                        borderColor: "#ad47ff"
                                                    }}
                                                    _focusVisible={{
                                                        boxShadow: "0 0 0 3px #ad47ff"
                                                    }}>
                                                        Ajouter à mon profil
                                                    </Button>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </Center>
                                </FormControl>
                            </Stack>                            
                        </chakra.form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default PageAcceuil