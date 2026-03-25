import { Box, Heading, Flex, Input, Grid } from "@chakra-ui/react";
import Result from "../components/ScoresResult";
import { useSearchParams } from "react-router-dom";

export interface ISearchProps {}

const Search: React.FC<ISearchProps> = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q')
    return(
        <Flex direction={"column"} textAlign={"center"} gap={"2rem"} pt={"2rem"}>

            {/*Title containing the query*/}
            <Heading id="headText" color={"#FDFCFE"}> SCORBRARY "{query}" </Heading>

            {/*Search filters*/}
            <Box id="filtersZone" border={"0.0625rem solid #4e4c51"} mx={"1.5rem"} padding={"0.5rem"}>
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

            {/*Search results*/}
            <Result />
        </Flex>
    )
}

export default Search