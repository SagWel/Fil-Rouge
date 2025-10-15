import { Link } from "react-router-dom";
import { Box, Flex, Heading, Button } from "@chakra-ui/react"

function Home () {
    return(
        <Box id="main"
        overflowY={"auto"} height={"100%"}>
            <Box as="section" id="recents">
                <Box id="recents-header"
                p={"1.5rem"} m={"0 3.0625rem"}>
                    <Flex id="recents-header-flex"
                    direction={"column"} justifyContent={"center"}
                    position={"relative"}
                    minHeight={"2rem"}>
                        <Flex id="recents-header-title"
                        flex={"1 1 0%"}>                            
                            <Heading as={"h2"}
                                color={"#FDFCFE"}
                                fontSize={"20px"}>
                                    Récemment joué
                            </Heading>
                        </Flex>
                        <Box id="recents-scrollX-control"
                        position={"absolute"} right={"0"} top={"50%"} transform={"translateY(-50%)"}>
                            <Box id="recents-left-button-container"
                        display={"inline-flex"}
                        padding={"0"} paddingLeft={"0.5rem"}>
                                <Button type="button" id="recent-left-button" aria-label="Précédent"
                                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"} gap={"0.25rem"}
                                padding={"0"}
                                minWidth={"3rem"} minHeight={"3rem"}
                                background={"transparent"} borderRadius={"9999px"}
                                _active={{
                                    background: "#464549",
                                    color: "#ebe7ee"
                                }}
                                _focusVisible={{
                                    boxShadow: "none",
                                    outlineColor: "#a238ff"
                                }}
                                _hover={{
                                    background: "#3a393d",
                                    color: "#f5f2f8"
                                }}
                                >
                                    <svg
                                    display={"block"}
                                    height={"24"} width={"24"}>
                                        <path fill="#FDFCFE" d="M15.345 20c-.905-.823-1.048-.909-1.917-1.742-2.206-2.116-3.463-3.431-5.581-5.755a.748.748 0 0 1 0-1.006c2.114-2.32 3.37-3.635 5.58-5.755.87-.834 1.013-.918 1.918-1.742l1.003 1.102c-.896.815-1.03.89-1.89 1.715A98.482 98.482 0 0 0 9.405 12a98.138 98.138 0 0 0 5.053 5.183c.86.824.994.9 1.89 1.715L15.345 20Z"></path>
                                    </svg>
                                </Button>
                            </Box>
                            <Box id="recents-right-button-container"
                            display={"inline-flex"}
                            padding={"0"} paddingLeft={"0.5rem"}>
                                <Button type="butoon" id="rencents-right-button" aria-label="Suivant"
                                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"} gap={"0.25rem"}
                                padding={"0"}
                                minWidth={"3rem"} minHeight={"3rem"}
                                background={"transparent"} borderRadius={"9999px"}
                                _active={{
                                    background: "#464549",
                                    color: "#ebe7ee"
                                }}
                                _focusVisible={{
                                    boxShadow: "none",
                                    outlineColor: "#a238ff"
                                }}
                                _hover={{
                                    background: "#3a393d",
                                    color: "#f5f2f8"
                                }}
                                >
                                    <svg
                                    display={"block"}
                                    height={"24"} width={"24"}>
                                        <path fill="#fdfcfe" d="M8.655 20c.906-.823 1.048-.909 1.917-1.742 2.206-2.116 3.463-3.431 5.581-5.755a.748.748 0 0 0 0-1.006c-2.114-2.32-3.37-3.635-5.58-5.755C9.703 4.908 9.56 4.824 8.655 4L7.652 5.102c.896.815 1.03.89 1.89 1.715A98.485 98.485 0 0 1 14.595 12a98.14 98.14 0 0 1-5.053 5.183c-.86.824-.994.9-1.89 1.715L8.655 20Z"></path>
                                    </svg>
                                </Button>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
                <Box id="recents-content"
                p={"1.5rem"} paddingTop={"0"} m={"0 3.0625rem"}>
                    {/* Partitions */}
                </Box>
            </Box>
            <Box as="section" id="suggestions">
                <Box id="suggestions-header"
                p={"1.5rem"} m={"0 3.0625rem"}>
                    <Flex id="suggestions-header-flex"
                    direction={"column"} justifyContent={"center"}
                    position={"relative"}
                    minHeight={"2rem"}>
                        <Flex id="suggestion-header-title"
                        flex={"1 1 0%"}>                            
                            <Heading as={"h2"}
                                color={"#FDFCFE"}
                                fontSize={"20px"}>
                                    Suggestions
                                    <Link
                                    // to={"liste suggestions"}
                                    >
                                        <Button type="button"
                                        display={"inline-flex"} alignItems={"center"} justifyContent={"center"}
                                        padding={"0.25rem 1rem"} marginLeft={"0.5rem"}
                                        minHeight={"2rem"} minWidth={"2rem"} height={"auto"}
                                        borderRadius={"0.5rem"} borderColor={"#555257"} borderStyle={"solid"} borderWidth={"0.0625rem"} color={"#fdfcfe"}
                                        background={"transparent"}
                                        fontSize={"14px"}
                                        textDecoration={"none"}
                                        _active={{
                                            background: "#464549",
                                            borderColor: "#6f6d71",
                                            color: "#ebe7ee"
                                        }}
                                        _focusVisible={{
                                            boxShadow: "none",
                                            borderColor: "#a238ff",
                                            outlineColor: "#a238ff"
                                        }}
                                        _hover={{
                                            background: "#3a393d",
                                            borderColor: "#615e63",
                                            color: "#f5f2f8"
                                        }}
                                        >
                                            <span>Voir tout</span>
                                        </Button>
                                    </Link>
                            </Heading>

                        </Flex>
                        <Box id="suggestions-scrollX-control"
                        position={"absolute"} right={"0"} top={"50%"} transform={"translateY(-50%)"}>
                            <Box id="suggestions-left-button-container"
                        display={"inline-flex"}
                        padding={"0"} paddingLeft={"0.5rem"}>
                                <Button type="button" id="suggestions-left-button" aria-label="Précédent"
                                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"} gap={"0.25rem"}
                                padding={"0"}
                                minWidth={"3rem"} minHeight={"3rem"}
                                background={"transparent"} borderRadius={"9999px"}
                                _active={{
                                    background: "#464549",
                                    color: "#ebe7ee"
                                }}
                                _focusVisible={{
                                    boxShadow: "none",
                                    outlineColor: "#a238ff"
                                }}
                                _hover={{
                                    background: "#3a393d",
                                    color: "#f5f2f8"
                                }}
                                >
                                    <svg
                                    display={"block"}
                                    height={"24"} width={"24"}>
                                        <path fill="#FDFCFE" d="M15.345 20c-.905-.823-1.048-.909-1.917-1.742-2.206-2.116-3.463-3.431-5.581-5.755a.748.748 0 0 1 0-1.006c2.114-2.32 3.37-3.635 5.58-5.755.87-.834 1.013-.918 1.918-1.742l1.003 1.102c-.896.815-1.03.89-1.89 1.715A98.482 98.482 0 0 0 9.405 12a98.138 98.138 0 0 0 5.053 5.183c.86.824.994.9 1.89 1.715L15.345 20Z"></path>
                                    </svg>
                                </Button>
                            </Box>
                            <Box id="suggestionsr-ight-button-container"
                            display={"inline-flex"}
                            padding={"0"} paddingLeft={"0.5rem"}>
                                <Button type="butoon" id="suggestion-right-button" aria-label="Suivant"
                                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"} gap={"0.25rem"}
                                padding={"0"}
                                minWidth={"3rem"} minHeight={"3rem"}
                                background={"transparent"} borderRadius={"9999px"}
                                _active={{
                                    background: "#464549",
                                    color: "#ebe7ee"
                                }}
                                _focusVisible={{
                                    boxShadow: "none",
                                    outlineColor: "#a238ff"
                                }}
                                _hover={{
                                    background: "#3a393d",
                                    color: "#f5f2f8"
                                }}
                                >
                                    <svg
                                    display={"block"}
                                    height={"24"} width={"24"}>
                                        <path fill="#fdfcfe" d="M8.655 20c.906-.823 1.048-.909 1.917-1.742 2.206-2.116 3.463-3.431 5.581-5.755a.748.748 0 0 0 0-1.006c-2.114-2.32-3.37-3.635-5.58-5.755C9.703 4.908 9.56 4.824 8.655 4L7.652 5.102c.896.815 1.03.89 1.89 1.715A98.485 98.485 0 0 1 14.595 12a98.14 98.14 0 0 1-5.053 5.183c-.86.824-.994.9-1.89 1.715L8.655 20Z"></path>
                                    </svg>
                                </Button>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
                <Box id="suggestions-content"
                p={"1.5rem"} paddingTop={"0"} m={"0 3.0625rem"}>
                        {/* Partitions */}
                </Box>
            </Box>
            <Box as="section" id="news">
                <Box id="news-header"
                p={"1.5rem"} m={"0 3.0625rem"}>
                    <Flex id="news-header-flex"
                    direction={"column"} justifyContent={"center"}
                    position={"relative"}
                    minHeight={"2rem"}>
                        <Flex id="news-header-title"
                        flex={"1 1 0%"}>                            
                            <Heading as={"h2"}
                                color={"#FDFCFE"}
                                fontSize={"20px"}>
                                    Nouveautés
                                    <Link
                                    // to={"liste nouveautés"}
                                    >
                                        <Button type="button"
                                        display={"inline-flex"} alignItems={"center"} justifyContent={"center"}
                                        padding={"0.25rem 1rem"} marginLeft={"0.5rem"}
                                        minHeight={"2rem"} minWidth={"2rem"} height={"auto"}
                                        borderRadius={"0.5rem"} borderColor={"#555257"} borderStyle={"solid"} borderWidth={"0.0625rem"} color={"#fdfcfe"}
                                        background={"transparent"}
                                        fontSize={"14px"}
                                        textDecoration={"none"}
                                        _active={{
                                            background: "#464549",
                                            borderColor: "#6f6d71",
                                            color: "#ebe7ee"
                                        }}
                                        _focusVisible={{
                                            boxShadow: "none",
                                            borderColor: "#a238ff",
                                            outlineColor: "#a238ff"
                                        }}
                                        _hover={{
                                            background: "#3a393d",
                                            borderColor: "#615e63",
                                            color: "#f5f2f8"
                                        }}
                                        >
                                            <span>Voir tout</span>
                                        </Button>
                                    </Link>
                            </Heading>

                        </Flex>
                        <Box id="news-scrollX-control"
                        position={"absolute"} right={"0"} top={"50%"} transform={"translateY(-50%)"}>
                            <Box id="news-left-button-container"
                        display={"inline-flex"}
                        padding={"0"} paddingLeft={"0.5rem"}>
                                <Button type="button" id="news-left-button" aria-label="Précédent"
                                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"} gap={"0.25rem"}
                                padding={"0"}
                                minWidth={"3rem"} minHeight={"3rem"}
                                background={"transparent"} borderRadius={"9999px"}
                                _active={{
                                    background: "#464549",
                                    color: "#ebe7ee"
                                }}
                                _focusVisible={{
                                    boxShadow: "none",
                                    outlineColor: "#a238ff"
                                }}
                                _hover={{
                                    background: "#3a393d",
                                    color: "#f5f2f8"
                                }}
                                >
                                    <svg
                                    display={"block"}
                                    height={"24"} width={"24"}>
                                        <path fill="#FDFCFE" d="M15.345 20c-.905-.823-1.048-.909-1.917-1.742-2.206-2.116-3.463-3.431-5.581-5.755a.748.748 0 0 1 0-1.006c2.114-2.32 3.37-3.635 5.58-5.755.87-.834 1.013-.918 1.918-1.742l1.003 1.102c-.896.815-1.03.89-1.89 1.715A98.482 98.482 0 0 0 9.405 12a98.138 98.138 0 0 0 5.053 5.183c.86.824.994.9 1.89 1.715L15.345 20Z"></path>
                                    </svg>
                                </Button>
                            </Box>
                            <Box id="news-right-button-container"
                            display={"inline-flex"}
                            padding={"0"} paddingLeft={"0.5rem"}>
                                <Button type="butoon" id="news-right-button" aria-label="Suivant"
                                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"} gap={"0.25rem"}
                                padding={"0"}
                                minWidth={"3rem"} minHeight={"3rem"}
                                background={"transparent"} borderRadius={"9999px"}
                                _active={{
                                    background: "#464549",
                                    color: "#ebe7ee"
                                }}
                                _focusVisible={{
                                    boxShadow: "none",
                                    outlineColor: "#a238ff"
                                }}
                                _hover={{
                                    background: "#3a393d",
                                    color: "#f5f2f8"
                                }}
                                >
                                    <svg
                                    display={"block"}
                                    height={"24"} width={"24"}>
                                        <path fill="#fdfcfe" d="M8.655 20c.906-.823 1.048-.909 1.917-1.742 2.206-2.116 3.463-3.431 5.581-5.755a.748.748 0 0 0 0-1.006c-2.114-2.32-3.37-3.635-5.58-5.755C9.703 4.908 9.56 4.824 8.655 4L7.652 5.102c.896.815 1.03.89 1.89 1.715A98.485 98.485 0 0 1 14.595 12a98.14 98.14 0 0 1-5.053 5.183c-.86.824-.994.9-1.89 1.715L8.655 20Z"></path>
                                    </svg>
                                </Button>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
                <Box id="news-content"
                p={"1.5rem"} paddingTop={"0"} m={"0 3.0625rem"}>
                        {/* Partitions */}
                </Box>
            </Box>
            <Box as="section" id="tops">
                 <Box id="tops-header"
                p={"1.5rem"} m={"0 3.0625rem"}>
                    <Flex id="tops-header-flex"
                    direction={"column"} justifyContent={"center"}
                    position={"relative"}
                    minHeight={"2rem"}>
                        <Flex id="tops-header-title"
                        flex={"1 1 0%"}>                            
                            <Heading as={"h2"}
                                color={"#FDFCFE"}
                                fontSize={"20px"}>
                                    Tops
                                    <Link
                                    // to={"liste nouveautés"}
                                    >
                                        <Button type="button"
                                        display={"inline-flex"} alignItems={"center"} justifyContent={"center"}
                                        padding={"0.25rem 1rem"} marginLeft={"0.5rem"}
                                        minHeight={"2rem"} minWidth={"2rem"} height={"auto"}
                                        borderRadius={"0.5rem"} borderColor={"#555257"} borderStyle={"solid"} borderWidth={"0.0625rem"} color={"#fdfcfe"}
                                        background={"transparent"}
                                        fontSize={"14px"}
                                        textDecoration={"none"}
                                        _active={{
                                            background: "#464549",
                                            borderColor: "#6f6d71",
                                            color: "#ebe7ee"
                                        }}
                                        _focusVisible={{
                                            boxShadow: "none",
                                            borderColor: "#a238ff",
                                            outlineColor: "#a238ff"
                                        }}
                                        _hover={{
                                            background: "#3a393d",
                                            borderColor: "#615e63",
                                            color: "#f5f2f8"
                                        }}
                                        >
                                            <span>Voir tout</span>
                                        </Button>
                                    </Link>
                            </Heading>

                        </Flex>
                        <Box id="tops-scrollX-control"
                        position={"absolute"} right={"0"} top={"50%"} transform={"translateY(-50%)"}>
                            <Box id="tops-left-button-container"
                        display={"inline-flex"}
                        padding={"0"} paddingLeft={"0.5rem"}>
                                <Button type="button" id="tops-left-button" aria-label="Précédent"
                                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"} gap={"0.25rem"}
                                padding={"0"}
                                minWidth={"3rem"} minHeight={"3rem"}
                                background={"transparent"} borderRadius={"9999px"}
                                _active={{
                                    background: "#464549",
                                    color: "#ebe7ee"
                                }}
                                _focusVisible={{
                                    boxShadow: "none",
                                    outlineColor: "#a238ff"
                                }}
                                _hover={{
                                    background: "#3a393d",
                                    color: "#f5f2f8"
                                }}
                                >
                                    <svg
                                    display={"block"}
                                    height={"24"} width={"24"}>
                                        <path fill="#FDFCFE" d="M15.345 20c-.905-.823-1.048-.909-1.917-1.742-2.206-2.116-3.463-3.431-5.581-5.755a.748.748 0 0 1 0-1.006c2.114-2.32 3.37-3.635 5.58-5.755.87-.834 1.013-.918 1.918-1.742l1.003 1.102c-.896.815-1.03.89-1.89 1.715A98.482 98.482 0 0 0 9.405 12a98.138 98.138 0 0 0 5.053 5.183c.86.824.994.9 1.89 1.715L15.345 20Z"></path>
                                    </svg>
                                </Button>
                            </Box>
                            <Box id="tops-right-button-container"
                            display={"inline-flex"}
                            padding={"0"} paddingLeft={"0.5rem"}>
                                <Button type="butoon" id="tops-right-button" aria-label="Suivant"
                                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"} gap={"0.25rem"}
                                padding={"0"}
                                minWidth={"3rem"} minHeight={"3rem"}
                                background={"transparent"} borderRadius={"9999px"}
                                _active={{
                                    background: "#464549",
                                    color: "#ebe7ee"
                                }}
                                _focusVisible={{
                                    boxShadow: "none",
                                    outlineColor: "#a238ff"
                                }}
                                _hover={{
                                    background: "#3a393d",
                                    color: "#f5f2f8"
                                }}
                                >
                                    <svg
                                    display={"block"}
                                    height={"24"} width={"24"}>
                                        <path fill="#fdfcfe" d="M8.655 20c.906-.823 1.048-.909 1.917-1.742 2.206-2.116 3.463-3.431 5.581-5.755a.748.748 0 0 0 0-1.006c-2.114-2.32-3.37-3.635-5.58-5.755C9.703 4.908 9.56 4.824 8.655 4L7.652 5.102c.896.815 1.03.89 1.89 1.715A98.485 98.485 0 0 1 14.595 12a98.14 98.14 0 0 1-5.053 5.183c-.86.824-.994.9-1.89 1.715L8.655 20Z"></path>
                                    </svg>
                                </Button>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
                <Box id="tops-content"
                p={"1.5rem"} paddingTop={"0"} m={"0 3.0625rem"}>
                        {/* Partitions */}
                </Box>
            </Box>
            <Box as="section" id="listen">
                 <Box id="listen-header"
                p={"1.5rem"} m={"0 3.0625rem"}>
                    <Flex id="listen-header-flex"
                    direction={"column"} justifyContent={"center"}
                    position={"relative"}
                    minHeight={"2rem"}>
                        <Flex id="listen-header-title"
                        flex={"1 1 0%"}>                            
                            <Heading as={"h2"}
                                color={"#FDFCFE"}
                                fontSize={"20px"}>
                                    Ecoutés récemment
                                    <Link
                                    // to={"liste nouveautés"}
                                    >
                                        <Button type="button"
                                        display={"inline-flex"} alignItems={"center"} justifyContent={"center"}
                                        padding={"0.25rem 1rem"} marginLeft={"0.5rem"}
                                        minHeight={"2rem"} minWidth={"2rem"} height={"auto"}
                                        borderRadius={"0.5rem"} borderColor={"#555257"} borderStyle={"solid"} borderWidth={"0.0625rem"} color={"#fdfcfe"}
                                        background={"transparent"}
                                        fontSize={"14px"}
                                        textDecoration={"none"}
                                        _active={{
                                            background: "#464549",
                                            borderColor: "#6f6d71",
                                            color: "#ebe7ee"
                                        }}
                                        _focusVisible={{
                                            boxShadow: "none",
                                            borderColor: "#a238ff",
                                            outlineColor: "#a238ff"
                                        }}
                                        _hover={{
                                            background: "#3a393d",
                                            borderColor: "#615e63",
                                            color: "#f5f2f8"
                                        }}
                                        >
                                            <span>Voir tout</span>
                                        </Button>
                                    </Link>
                            </Heading>

                        </Flex>
                        <Box id="listen-scrollX-control"
                        position={"absolute"} right={"0"} top={"50%"} transform={"translateY(-50%)"}>
                            <Box id="listen-left-button-container"
                        display={"inline-flex"}
                        padding={"0"} paddingLeft={"0.5rem"}>
                                <Button type="button" id="listen-left-button" aria-label="Précédent"
                                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"} gap={"0.25rem"}
                                padding={"0"}
                                minWidth={"3rem"} minHeight={"3rem"}
                                background={"transparent"} borderRadius={"9999px"}
                                _active={{
                                    background: "#464549",
                                    color: "#ebe7ee"
                                }}
                                _focusVisible={{
                                    boxShadow: "none",
                                    outlineColor: "#a238ff"
                                }}
                                _hover={{
                                    background: "#3a393d",
                                    color: "#f5f2f8"
                                }}
                                >
                                    <svg
                                    display={"block"}
                                    height={"24"} width={"24"}>
                                        <path fill="#FDFCFE" d="M15.345 20c-.905-.823-1.048-.909-1.917-1.742-2.206-2.116-3.463-3.431-5.581-5.755a.748.748 0 0 1 0-1.006c2.114-2.32 3.37-3.635 5.58-5.755.87-.834 1.013-.918 1.918-1.742l1.003 1.102c-.896.815-1.03.89-1.89 1.715A98.482 98.482 0 0 0 9.405 12a98.138 98.138 0 0 0 5.053 5.183c.86.824.994.9 1.89 1.715L15.345 20Z"></path>
                                    </svg>
                                </Button>
                            </Box>
                            <Box id="listen-right-button-container"
                            display={"inline-flex"}
                            padding={"0"} paddingLeft={"0.5rem"}>
                                <Button type="butoon" id="listen-right-button" aria-label="Suivant"
                                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"} gap={"0.25rem"}
                                padding={"0"}
                                minWidth={"3rem"} minHeight={"3rem"}
                                background={"transparent"} borderRadius={"9999px"}
                                _active={{
                                    background: "#464549",
                                    color: "#ebe7ee"
                                }}
                                _focusVisible={{
                                    boxShadow: "none",
                                    outlineColor: "#a238ff"
                                }}
                                _hover={{
                                    background: "#3a393d",
                                    color: "#f5f2f8"
                                }}
                                >
                                    <svg
                                    display={"block"}
                                    height={"24"} width={"24"}>
                                        <path fill="#fdfcfe" d="M8.655 20c.906-.823 1.048-.909 1.917-1.742 2.206-2.116 3.463-3.431 5.581-5.755a.748.748 0 0 0 0-1.006c-2.114-2.32-3.37-3.635-5.58-5.755C9.703 4.908 9.56 4.824 8.655 4L7.652 5.102c.896.815 1.03.89 1.89 1.715A98.485 98.485 0 0 1 14.595 12a98.14 98.14 0 0 1-5.053 5.183c-.86.824-.994.9-1.89 1.715L8.655 20Z"></path>
                                    </svg>
                                </Button>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
                <Box id="listen-content"
                p={"1.5rem"} paddingTop={"0"} m={"0 3.0625rem"}>
                        {/* Partitions */}
                </Box>
            </Box>
        </Box>
    )
}

export default Home