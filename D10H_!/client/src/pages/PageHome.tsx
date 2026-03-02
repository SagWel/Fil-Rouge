import { Box, Modal, ModalBody, ModalHeader, ModalContent, ModalOverlay, useDisclosure, Heading, chakra, Stack, FormControl, FormLabel, Center, Avatar, AvatarBadge, IconButton, Input } from "@chakra-ui/react"
import { useEffect, useState, useRef } from "react";

import Carousel from "../components/Carousel"
import { type IPartitions } from "../types/partitions";
import PartitionCard from "../components/PartitionCard";
import { useAuth } from "../hooks/useAuth";
import { CameraIcon } from "../components/svg";

export interface IHomeProps {}

export interface IPageAcceuilProps {}

const PageAcceuil: React.FC<IPageAcceuilProps> = () => {
    const [popularPartitions, setPopularPartitions] = useState<IPartitions[] | []>([])
    const [newsPartitions, setNewsPartitions] = useState<IPartitions[] | []>([])
    const [suggestionsPartitions, setSuggestionsPartitions] = useState<IPartitions[] | []>([])
    const [historyPartitions, setHistoryPartitions] = useState<IPartitions[] | []>([])

    const fileInputRef = useRef<HTMLInputElement | null>(null)

    const { isFirstLogin, user } = useAuth()

    const userAvatarSuggestion = user?.username[0].toUpperCase() as string

    const [avatar, setAvatar] =useState<string>(userAvatarSuggestion)

    const fetchPartitions = async (URL: string, set: React.Dispatch<React.SetStateAction<IPartitions[] | []>>) => {
        const host = import.meta.env.VITE_HOST
        const port = import.meta.env.VITE_SERVER_PORT

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

    const isDisplayed = () => {
        if (isFirstLogin) {
            return "block"
        } return "none"
    }

    const handleInputFileClick = () => {
        if (fileInputRef.current) fileInputRef.current.click()
    }

    const { isOpen, onOpen, onClose} = useDisclosure()

    useEffect(() => {
        const urlFetchPopular = import.meta.env.VITE_URL_FETCH_POPULAR
        const urlFetchNews = import.meta.env.VITE_URL_FETCH_NEWS
        const urlFetchSuggestions = import.meta.env.VITE_URL_FETCH_SUGGESTIONS

        fetchPartitions(urlFetchPopular, setPopularPartitions)
        fetchPartitions(urlFetchNews, setNewsPartitions)
        fetchPartitions(urlFetchSuggestions, setSuggestionsPartitions)
    })

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
            data={newsPartitions} title="nouveautés"
            renderItem={(item:IPartitions) => (
                <PartitionCard key={item.id} partition={item} currentInstrument={item.instruments.currentInstrument.name} />
            )}/>

            <Carousel id="popular-carousel"
            data={popularPartitions} title="Partitions populaires"
            renderItem={(item:IPartitions) => (
                <PartitionCard key={item.id} partition={item} currentInstrument={item.instruments.currentInstrument.name} />
            )}/>
            <Modal isOpen={isOpen} onClose={onClose}>
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
                            Configuration de votre Profil
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
                                        <Box pos={"relative"}>
                                            <Avatar 
                                            size={"2xl"} src={avatar} name="avatarUrl"
                                            cursor={"pointer"} transition={"all 0.2s"}
                                            onClick={handleInputFileClick}
                                            _hover={{
                                                opacity: 0.8
                                            }}>
                                                <AvatarBadge as={IconButton}
                                                size={"sm"} rounded={"full"}
                                                aria-label="Modifier l'image" icon={<CameraIcon/>}
                                                onClick={handleInputFileClick}/>
                                            </Avatar>
                                            <Input type="file"
                                            ref={fileInputRef} display={"none"}/>
                                        </Box>
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

export default PageAcceuil;