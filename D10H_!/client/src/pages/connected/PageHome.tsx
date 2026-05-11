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
    Center,
    Image,
    Button,
} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


/* Import conponents */
import Carousel from "../../components/ScoreCarousel"
import UserInstrumentManagement from "../../components/UserInstrumentManagement";

/* Import hook */
import { useAuth } from "../../hooks/useAuth";

/* Import type */
import { type IScore } from "../../types/Score";
import type { IInstrument, IInstrumentLvl } from "../../types/instrument";
import { useModals } from "../../hooks/useModals";

export interface IPageAcceuilProps {}

const PageAcceuil: React.FC<IPageAcceuilProps> = () => {

    /* Varibles to stock Scores for carousel */
    const [popularScores, setPopularScores] = useState<IScore[] | []>([])
    const [newsScores, setNewsScores] = useState<IScore[] | []>([])
    const [suggestionsScores, setSuggestionsScores] = useState<IScore[] | []>([])
    const [historyScores, setHistoryScores] = useState<IScore[] | []>([])

    /* Varibles to edit user profil */
    const [userInstruments, setUserInstruments] = useState<IInstrumentLvl[] | undefined>([])
    const [instruments, setInstruments] = useState<IInstrument[] | []>([])

    const { onOpen } = useModals()
    
    /* Variables from context by hook */
    const { isFirstLogin, user, setIsFirstLogin } = useAuth()

    /* Naviagation */
    const navigate = useNavigate()

    const host = import.meta.env.VITE_HOST
    const port = import.meta.env.VITE_SERVER_PORT
    
    const fetchScores = async (URL: string, set: React.Dispatch<React.SetStateAction<IScore[] | []>>) => {
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
            setInstruments(data)
            
            
        } catch (error) {
            console.error('Imposible de récuperer les Instruments dans la base de donnée : ', error)
        }
    }

    /* Send to backend User's instruments */
    const handleSubmitUserInstruments = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const urlFetchCreatUserInstruments = import.meta.env.VITE_URL_FETCH_CREATUSERINSTRUMENTS
        try {
            if (userInstruments && userInstruments.length > 0) {
                const res = await fetch(`http://${host}:${port}${urlFetchCreatUserInstruments}${user?.id}`, {
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

    /* close Modal */
    const { onClose} = useDisclosure()

    useEffect(() => {
        const urlFetchPopular = import.meta.env.VITE_URL_FETCH_POPULAR
        const urlFetchNews = import.meta.env.VITE_URL_FETCH_NEWS
        const urlFetchSuggestions = import.meta.env.VITE_URL_FETCH_SUGGESTIONS
        const urlfetchHistory = import.meta.env.VITE_URL_FETCH_HISTORY

        fetchScores(urlFetchPopular, setPopularScores)
        fetchScores(urlFetchNews, setNewsScores)
        fetchScores(`${urlFetchSuggestions}${user?.id}`, setSuggestionsScores)
        fetchScores(`${urlfetchHistory}${user?.id}`,setHistoryScores)
        fetchInstruments()

        if (isFirstLogin) {
            onOpen('FIRST_EDIT_PROFIL', {
                title: 'Configuration de ton Profil'
            })
        }
    },[])

    return(
        <Box id="homeUser"
        overflowY={"auto"} height={"100%"} mb={"70px"} position={"relative"}>
            {historyScores.length > 0 && 
            <Carousel id="recents-carousel"
            data={historyScores.slice(0, 12)} title="Partitions joués récement"/>}

            {suggestionsScores.length > 0 && 
            <Carousel id="suggestions-carousel"
            data={suggestionsScores} title="Suggestions"/>}

            {newsScores.length > 0 &&
            <Carousel id="news-carousel"
            data={newsScores} title="Nouveautés"/>}

            {popularScores.length > 0 &&
            <Carousel id="popular-carousel"
            data={popularScores} title="Partitions populaires"/>}

            {/* <Modal isOpen={isFirstLogin} onClose={onClose}>
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
                                                    <UserInstrumentManagement data={userInstruments} setData={setUserInstruments} instruments={instruments}/>
                                                    <Button bg={"#4d4c50"} color={"#ffffff"}
                                                    onClick={handleSubmitUserInstruments}
                                                    isDisabled={userInstruments?.length === 0}
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
            </Modal> */}
        </Box>
    )
}

export default PageAcceuil