import { useParams } from "react-router-dom";
import { Box, Heading, Flex, Input, Grid } from "@chakra-ui/react";
import PartitionCard from './PartitionCard'
import PartitionImg from '../img/Partition.jpeg'

const mockPartitons = [
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
        instrument : "guitare",
        preview : PartitionImg,
        audioPreviewUrl : "https://fake_url.com",
        id : "2",
    },
    {
        title : "Comme Des Connards",
        artist : "Mickael Youn",
        difficulty : 2,
        preview : PartitionImg,
        audioPreviewUrl : "https://fake_url.com",
        id : "3",
    },
    {
        title : "Still Waiting",
        artist : "Sum 41",
        difficulty : 4,
        preview : PartitionImg,
        audioPreviewUrl : "https://fake_url.com",
        id : "4",
    },
    {
        title : "Pretty Fly (For A White Guy)",
        artist : "The Offspring",
        difficulty : 3,
        preview : PartitionImg,
        audioPreviewUrl : "https://fake_url.com",
        id : "5",
    }
]

function Research () {
    const { instrumentId } = useParams();

    return(
        <Flex direction={"column"} textAlign={"center"} gap={"2rem"} pt={"2rem"}>
            <Heading id="headText" color={"#FDFCFE"}> SCORBRARY {instrumentId.toUpperCase()} </Heading>
            <Box id="researchZone" border={"0.0625rem solid #4e4c51"} mx={"1.5rem"} padding={"0.5rem"}>
                <Grid templateColumns={"repeat(5, 1fr)"}>
                    <Flex gridColumn={"span 1"} direction={"column"} background={"#9A36F3"} borderRadius={"0.5rem"}>
                        <Heading color={"#fdfcfe"} 
                        fontSize={"1.25rem"} fontWeight={"500"}>Artiste</Heading>
                        <Box>
                            <Input mb={"0.75rem"} mx={"auto"} 
                            height={"1.25rem"} width={"75%"}
                            border={"none"} borderRadius={"none"} 
                            background={"#141216"} color={"#fdfcfe"}
                            _focusVisible={{
                                zIndex: "1",
                                borderColor: "#4e4c51",
                                boxShadow: "0 0 0 1px #fdfcfe",
                            }}
                            ></Input>
                        </Box>
                    </Flex>
                    <Box gridColumn={"span 1"}></Box>
                    <Flex gridColumn={"span 1"} direction={"column"} background={"#9A36F3"} borderRadius={"0.5rem"}>
                        <Heading color={"#fdfcfe"} 
                        fontSize={"1.25rem"} fontWeight={"500"}>Difficultée</Heading>
                        <Box>
                            <Input mb={"0.75rem"} mx={"auto"} 
                            height={"1.25rem"} width={"75%"}
                            border={"none"} borderRadius={"none"} 
                            background={"#141216"} color={"#fdfcfe"}
                            _focusVisible={{
                                zIndex: "1",
                                borderColor: "#4e4c51",
                                boxShadow: "0 0 0 1px #fdfcfe",
                            }}
                            ></Input>
                        </Box>
                    </Flex>
                    <Box gridColumn={"span 1"}></Box>
                    <Flex gridColumn={"span 1"} direction={"column"} background={"#9A36F3"} borderRadius={"0.5rem"}>
                        <Heading color={"#fdfcfe"} 
                        fontSize={"1.25rem"} fontWeight={"500"}>Style</Heading>
                        <Box>
                            <Input mb={"0.75rem"} mx={"auto"} 
                            height={"1.25rem"} width={"75%"}
                            border={"none"} borderRadius={"none"} 
                            background={"#141216"} color={"#fdfcfe"}
                            _focusVisible={{
                                zIndex: "1",
                                borderColor: "#4e4c51",
                                boxShadow: "0 0 0 1px #fdfcfe",
                            }}
                            ></Input>
                        </Box>
                    </Flex>
                    <Box gridColumn={"span 1"}></Box>
                    <Flex gridColumn={"span 1"} direction={"column"} background={"#9A36F3"} borderRadius={"0.5rem"}>
                        <Heading color={"#fdfcfe"} 
                        fontSize={"1.25rem"} fontWeight={"500"}>Type</Heading>
                        <Box>
                            <Input mb={"0.75rem"} mx={"auto"} 
                            height={"1.25rem"} width={"75%"}
                            border={"none"} borderRadius={"none"} 
                            background={"#141216"} color={"#fdfcfe"}
                            _focusVisible={{
                                zIndex: "1",
                                borderColor: "#4e4c51",
                                boxShadow: "0 0 0 1px #fdfcfe",
                            }}
                            ></Input>
                        </Box>
                    </Flex>
                    <Box gridColumn={"span 1"}></Box>
                    <Flex gridColumn={"span 1"} direction={"column"} background={"#9A36F3"} borderRadius={"0.5rem"}>
                        <Heading color={"#fdfcfe"} 
                        fontSize={"1.25rem"} fontWeight={"500"}>Trier</Heading>
                        <Box>
                            <Input mb={"0.75rem"} mx={"auto"} 
                            height={"1.25rem"} width={"75%"}
                            border={"none"} borderRadius={"none"} 
                            background={"#141216"} color={"#fdfcfe"}
                            _focusVisible={{
                                zIndex: "1",
                                borderColor: "#4e4c51",
                                boxShadow: "0 0 0 1px #fdfcfe",
                            }}
                            ></Input>
                        </Box>
                    </Flex>
                    <Box gridColumn={"span 1"}></Box>
                </Grid>
            </Box>
            <Grid id="resultZone" templateColumns={"repeat(auto-fit, minmax(20rem, 1fr))"}
            gap={"7"} justifyItems={"center"} p={"4"}
            overflow={"visible"}
            marginTop={"2rem"} marginBottom={"5rem"}>
                
                {mockPartitons.map((partition) => (
                    <PartitionCard key={partition.id} partition={partition} />
                ))}

            </Grid>
        </Flex>
    )
}

export default Research;