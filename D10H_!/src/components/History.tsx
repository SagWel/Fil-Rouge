import { Box, Flex, Heading, Button, List, ListItem, chakra, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { type IPartitions } from "../types/partitions";

// SVGs import from a unique file
import { ShuffleIcon } from "./svg";

// Card for each scores in the database
import PartitionCard from './PartitionCard'

// Pictures import as modules
import PartitionImg from '../img/Partition.jpeg'

export interface IHistoryProps {}

const History: React.FC<IHistoryProps> = () => {

    /*Mock database*/
    const mockPartitons: IPartitions[] = [
        {
            title : "Zombie",
            artist : "The Cranberries",
            difficulty : 1,
            instrument : "guitare",
            preview : PartitionImg,
            audioPreviewUrl : "https://fake_url.com",
            id : "1",
        },
        {
            title : "Smells Like Teen Spirit",
            artist : "Nirvanna",
            difficulty : 2,
            instrument : "batterie",
            preview : PartitionImg,
            audioPreviewUrl : "https://fake_url.com",
            id : "2",
        },
        {
            title : "Comme Des Connards",
            artist : "Mickael Youn",
            difficulty : 2,
            instrument : "piano",
            preview : PartitionImg,
            audioPreviewUrl : "https://fake_url.com",
            id : "3",
        },
        {
            title : "Still Waiting",
            artist : "Sum 41",
            difficulty : 4,
            instrument : "basse",
            preview : PartitionImg,
            audioPreviewUrl : "https://fake_url.com",
            id : "4",
        },
        {
            title : "Pretty Fly (For A White Guy)",
            artist : "The Offspring",
            difficulty : 3,
            instrument : "chant",
            preview : PartitionImg,
            audioPreviewUrl : "https://fake_url.com",
            id : "5",
        },
        {
            title : "Over The Rainbow",
            artist : "Israel Kamakawiwo'ole",
            difficulty : 2,
            instrument : "ukulele",
            preview : PartitionImg,
            audioPreviewUrl : "https://fake_url.com",
            id : "6",
        },
        {
            title : "Baker Street",
            artist : "Gerry Rafferty",
            difficulty : 2,
            instrument : "saxo",
            preview : PartitionImg,
            audioPreviewUrl : "https://fake_url.com",
            id : "7",
        },
    ]

    return (
        <Box id="main"
        overflowY={"auto"} height={"100%"}>

            {/*Favoris page content header*/}
            <Box id="header-container" marginBottom={"12px"} boxShadow={"0 2px 2px"}>
                <Box id="container" padding={"24px 24px 0"} marginX={"49px"}>
                    <Box display={"flex"} gap={"2rem"}>
                        <Box alignSelf={"center"}>
                            <Heading as={"h2"} fontSize={"64px"} fontFamily={"Tahoma,Arial,sans-serif"} fontWeight={"700"}
                            marginBottom={"1.5rem"} color={"#ffffff"}>
                                Favoris
                            </Heading>
                        </Box>
                    </Box>
                    <Box marginTop={"1.5rem"} marginBottom={"2rem"}>
                        <List display={"inline-flex"} gap={"0.25rem"} listStyleType={"none"} margin={0} padding={0}>
                            <ListItem listStyleType={"none"} margin={0} padding={0}>
                                <Button type="button" aria-label="Une de Mes Partition Aléatoire"
                                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"} gap={"0.25rem"}
                                minHeight={"3rem"} minWidth={"3rem"} height={"auto"} width={"auto"}
                                paddingInlineStart={"1rem"} paddingInlineEnd={"1.5rem"} paddingY={"0.75rem"}
                                position={"relative"} 
                                appearance={"none"} userSelect={"none"}
                                outline={"transparent solid 2px"} outlineOffset={0}
                                borderRadius={"0.75rem"}
                                fontWeight={"700"} fontSize={"16px"} fontFamily={"Inter,Arial,sans-serif"} textDecoration={"none"}
                                color={"#ffffff"} background={"#ad47ff"}
                                _active={{
                                    color : "#e2dfe6",
                                    background : "#ca97ff"
                                }}
                                _focus={{
                                    zIndex : "1"
                                }}
                                _focusVisible={{
                                    boxShadow : "none",
                                    outlineColor : "#ca97ff"
                                }}
                                _hover={{
                                    color: "#f5f2f8",
                                    background: "#bb73ff"
                                }}> 
                                    <chakra.span display={"inline-flex"} alignSelf={"center"} flexShrink={0} marginInlineEnd={0}>
                                        <ShuffleIcon/>
                                    </chakra.span>
                                    <Box fontFamily={"Inter,Arial,sans-serif"}>
                                        <Flex alignItems={"center"} justifyContent={"center"}>
                                            <Link to={"/partitions/:instrumentId/:morceauId"}>Une de Mes Partition Aléatoire</Link>
                                        </Flex>
                                    </Box>
                                </Button>
                            </ListItem>
                        </List>
                    </Box>
                    <chakra.nav boxShadow={"none"} marginBottom={"0"} width={"100%"}>
                        <Box padding={0} width={"100%"}>
                            <List listStyleType={"none"} margin={0} padding={0}>
                                <ListItem 
                                listStyleType={"none"} margin={0} padding={0}
                                color={"#a19fa4"} display={"inline-block"} position={"relative"} >
                                    <Box as={Link} to={"/favoris"} borderBottom={"transparent 2px solid"} paddingBottom={"16px"} backgroundColor={"transparent"}
                                    display={"block"}
                                    fontSize={"16px"} fontFamily={"Inter,Arial,sans-serif"} fontWeight={"400"}
                                    lineHeight={"24px"} textDecoration={"none"}>
                                        Vue d'ensemble
                                    </Box>
                                </ListItem>
                                <ListItem 
                                listStyleType={"none"} margin={0} padding={0}
                                color={"#a19fa4"} display={"inline-block"} position={"relative"} paddingLeft={"44px"}>
                                    <Box as={Link} to={"/favoris/scorbraries"} borderBottom={"transparent 2px solid"} paddingBottom={"16px"} backgroundColor={"transparent"}
                                    display={"block"}
                                    fontSize={"16px"} fontFamily={"Inter,Arial,sans-serif"} fontWeight={"400"}
                                    lineHeight={"24px"} textDecoration={"none"}>
                                        Scorbraries
                                    </Box>
                                </ListItem>
                                <ListItem 
                                listStyleType={"none"} margin={0} padding={0}
                                color={"#a19fa4"} display={"inline-block"} position={"relative"} paddingLeft={"44px"}>
                                    <Box as={Link} to={"/favoris/history"} borderBottom={"#ad47ff solid 2px"} color={"#ffffff"}
                                    paddingBottom={"16px"}
                                    display={"block"}
                                    fontSize={"16px"} fontFamily={"Inter,Arial,sans-serif"} fontWeight={"600"}
                                    lineHeight={"24px"} textDecoration={"none"}>
                                        Historique de partitions
                                    </Box>
                                </ListItem>
                            </List>
                        </Box>
                    </chakra.nav>
                </Box>
            </Box>

            {/*History page content*/}
            <Box position={"relative"}>
                <Box id="catalog-content">
                    <Box role="tebpanel">
                        <Box padding={"24px"} marginX={"auto"} position={"relative"}>
                            <Box>
                                <Heading as={"h2"}
                                fontFamily={"Inter,Arial,sans-serif"} fontWeight={"700"} fontSize={"20px"} 
                                lineHeight={"24px"} textDecoration={"none"} color={"#ffffff"}>
                                    Historique des partitions
                                </Heading>
                            </Box>
                        </Box>
                        <Box marginTop={"-24px"} padding={"24px"} marginX={"auto"} position={"relative"}>
                            <Grid id="historyGrid" templateColumns={"repeat(auto-fit, minmax(20rem, 1fr))"}
                            gap={"7"} justifyItems={"center"} p={"4"}
                            overflow={"visible"}
                            marginTop={"2rem"} marginBottom={"5rem"}>

                                {mockPartitons.map((partition: IPartitions) => (
                                    <PartitionCard key={partition.id} partition={partition} />
                                ))}

                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default History