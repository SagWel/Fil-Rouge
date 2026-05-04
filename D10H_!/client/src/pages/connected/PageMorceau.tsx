import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

/* Import component */
import ScoreRender from "../../components/ScoreRender";

/* Import Hook */
import { useScore } from "../../hooks/useScore";

/* Import background */
import Fond from '../../../public/imgs/FondPart.jpg'
import { useAuth } from "../../hooks/useAuth";

export interface IPageMorceauProps {onPlay: boolean}

const PageMorceau: React.FC<IPageMorceauProps> = ({onPlay}) => {

    /* Score from context by hook */
    const { score, setScore} = useScore()

    const { morceauId } = useParams()
    const { user } = useAuth()
    const navigate = useNavigate()

    const host = import.meta.env.VITE_HOST
    const port = import.meta.env.VITE_SERVER_PORT
    const BASE_URL = `http://${host}:${port}/D10h_server/public/`

    if ((user?.filterExplicit || user?.isChildAccount) && score?.song.isExplicit) {
        alert('Ce morceau contient des propos explicites et ne peux donc pas être consulté par vous en raison de votre age ou de vos réglages')
        navigate(-1)
    }

    const fetchScore = async (URL: string) => {

        try {
            const res = await fetch(`http://${host}:${port}${URL}`, {credentials: 'include'})

            if (!res.ok) {
                throw new Error(`Erreur HTTP: ${res.status}`);                
            }

            const data = await res.json()
            setScore(data)
        } catch (error) {
            console.error('Impossible de récupérer les donnée de la partition:', error);
        }
    }

    useEffect(() => {
            if (morceauId) {
                const urlFetch = import.meta.env.VITE_URL_FETCH_SCORE
                fetchScore(`${urlFetch}${morceauId}`)
            } else {
                console.error('ID manquant ...')
            }
    },[morceauId])    

    useEffect(() => {         
        const urlAddUserHistory = import.meta.env.VITE_URL_FETCH_ADDUSERHISTORY
        
        const fetchAddUserHistory = async () => {
            if (onPlay) {
                try {
                    const res: Response = await fetch(`http://${host}:${port}${urlAddUserHistory}${user?.id}/${morceauId}`, {credentials: 'include'})
    
                    if (!res.ok) {
                        throw new Error(`Erreur HTTP: ${res.status}`);                
                    }
                    
                } catch (error) {
                    console.error("Impossible d'ajouter le morceau à l'historique de l'utilisateur", error)
                }
            }
        }
        fetchAddUserHistory()
    },[onPlay, user, morceauId])

    return (
       <Flex direction={"column"} overflowY={"auto"} justifyContent={"start"} width={"100%"} height={"100%"} background={"transparent"}>
            <Box width={"100%"} textAlign={"center"} position={"relative"}>
                <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} color={"#c0c0c0"}>
                    <Heading fontWeight={"700"}>{(score) ? score.song.title : "Pas de Titre à afficher"}</Heading>
                    <Text as={"span"} fontWeight={"400"}>{(score) ? score.song.artist.name : "Pas d'Artiste à afficher"}</Text>
                </Flex>
                {score?.instruments.currentInstrument.role && 
                <Text pos={"absolute"} top={"35%"} right={"6rem"} color={"#c0c0c0"} fontSize={"20px"}>{score?.instruments.currentInstrument.role}</Text>
                }
                <Image position={"absolute"} borderRadius={"full"} src={`${BASE_URL}${score?.instruments.currentInstrument.imgSrc}`} alt="..." h={"4rem"} w={"4rem"} right={"0.625rem"} top={"7px"}/>
            </Box>
            <Box backgroundImage={Fond} backgroundRepeat={"no-repeat"} backgroundPosition={"center"} backgroundSize={"cover"}
            height={"100%"} width={"97%"}
            marginY={"10px"} marginInlineStart={"20px"}
            overflowY={"auto"}>
                <ScoreRender onPlay={onPlay}/>
            </Box>
        </Flex>
    );
}

export default PageMorceau;