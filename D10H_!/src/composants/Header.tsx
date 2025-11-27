import { Box, Flex, Input, InputGroup, InputLeftElement, InputRightElement, Button, IconButton, Text, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

// SVGs import from a unique file
import { SearchIcon, DisableIcon, NotifIcon, DeleteButtonIcon } from "./svg";

// Context
import { useSearch, } from '../context/SearchContext'

// Hooks
import useSearchHistory from '../hooks/useSearchHistory'

export interface IHeaderProps {
    userName: string,
    isLoggedIn: boolean,
}

const Header: React.FC<IHeaderProps> = () => {

    /*Searchs Results management*/
    const {
        searchResults,
        setSearchResults,
        setIsLoading,
        setIsSearching,
    } = useSearch()

    /*Calling the Deezer API for search suggestions*/
    async function fetchDeezerSuggestions(query: string) {
        try {
            setIsLoading(true)
            
            const safeQuery = encodeURIComponent(query)
            const apiURL = `/api/search?q=${safeQuery}`

            const response = await fetch(apiURL);
            const responseJson = await response.json() as IDeezerSearchResponse

            setSearchResults(responseJson.data)

        } catch (error) {
        console.error(error);
        } finally {
        setIsLoading(false)
        }
    }

    async function fetchDeezerHistory(h: string) {
        try {
            setIsLoading(true)

            const safeQuery = encodeURIComponent(h)
            const apiURL = `/api/search?q=${safeQuery}`

            const response = await fetch(apiURL)
            const responseJson = await response.json() as IDeezerSearchResponse

            setHistoryInfos(responseJson.data)
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false)
        }
    }

    /*Variables*/
    const [query, setQuery] = useState('')    

    const navigate = useNavigate()

    const [isFocused, setIsFocused] = useState<boolean>(false)

    const ref = useRef<number | null> (null)

    const [infoNavigation, setInfoNavigation] = useState<boolean>(false)

    const [history, _SearchHistory, addToHistory] = useSearchHistory ()

    const [historyInfos, setHistoryInfos] = useState<object>()

    
    /*search choice management*/
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key == 'Enter') {
            event.preventDefault()
            const safeQuery = encodeURIComponent(query)
            addToHistory(query)
            setIsFocused(false)
            setQuery("")
            navigate(`/search?q=${safeQuery}`)
        } else if (event.key == 'Tab') {
            event.preventDefault()
            setIsFocused(false)
            setSearchResults([])
        }
    }

    /*Sends suggestion selected to query*/
    function handleSuggestionClick (id: number) {
        const item = searchResults.find(result => {
            return result.id == `${id}`
        })
        
        if (ref.current != null) {
            clearTimeout(ref.current)
            ref.current = null
        }
        if (item != undefined) {
            setQuery(item.title)
            setInfoNavigation(true)
        }
        setIsFocused(false)
    }

    /*Sends history selected to query*/
    function handleHistoryClick (h: string) {
        if (ref.current != null) {
            clearTimeout(ref.current)
            ref.current = null
        }
        setQuery(h)
        setInfoNavigation(true)
    }

    return(
        <Flex id="header-container" 
        alignItems={"center"}
        height={"80px"} minWidth={"770px"}
        padding={"1rem"}
        background={"#000000"}
        position={"fixed"} left={"272px"} right={"0"} top={"0"}
        borderBottom={"1px solid #4e4c51"}>
            <Flex id="header"
            direction={"row"} align={"center"}
            height={"80px"} width={"100%"}
            >
                <Box id="top-search-bar"
                marginRight={"auto"}
                width={"375px"} position={"relative"}>
                    <InputGroup id="search-zone"
                    bg={"#242326"}
                    color={"#6D6D71"}
                    borderRadius={"0.5rem"}
                    >
                        <InputLeftElement id="search-icon"
                        margin={"0 0.75rem 0 1rem"} left={"0"}
                        width={"1.5rem"} height={"3rem"}
                        display={"flex"} alignItems={"center"} justifyContent={"center"}>
                            <Button type="submit"
                            display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"baseline"} gap={'0.25rem'}
                            padding={"0"}
                            appearance={"none"} userSelect={"none"} whiteSpace={"nowrap"} outline={"transparent solid 2px"} pointerEvents={"none"}
                            textDecoration={"none"} 
                            background={"transparent"}
                            _active={{
                            borderColor: "#9A36F3"
                        }}
                            >
                                <SearchIcon />
                            </Button>
                        </InputLeftElement>
                        <Input type="search" value={query} aria-label="Rechercher" placeholder="Artistes, titres, Scorbraries ..."

                        /*API call update*/
                        onChange={(e) => {
                            
                            setQuery(e.target.value)
                            
                            if (e.target.value.length >= 2) {
                                fetchDeezerSuggestions(e.target.value)                                
                            } else if (e.target.value.length < 2) {
                                setSearchResults([])
                            }}}

                        /*Search choice management triggering*/
                        onKeyDown={handleKeyDown}

                        /*setTimeout clearing*/
                        onFocus={() =>{
                            {if (ref.current != null) {
                                clearTimeout(ref.current)
                                ref.current = null
                            }}
                            setIsFocused(true)
                        }}
                        
                        /*Hide the suggestions after selection*/
                        onBlur={() => {ref.current = setTimeout (() => {setIsFocused(false)}, 250)}}
                        padding={"0 2.75rem 0 2.75rem" }
                        height={"3rem"} width={"100%"}
                        borderRadius={"0.5rem"} borderColor={"transparent"} borderWidth={"0.125rem"} borderStyle={"solid"}
                        textDecoration={"none"}
                        _placeholder={{
                            color: "#6F6D6A",
                            fontWeight: "425",
                            fontFamily: "Inter, Arial, sans-serif",
                        }}
                        _hover={{
                            borderColor: "#2e2c30",
                            bg: "#2e2c30",
                        }}
                        _focus={{
                            borderColor: "#A238FF",
                            boxShadow: "none"
                        }}
                        _active={{
                            borderColor: "#A238FF"
                        }}
                        ></Input>
                        <InputRightElement
                        right={"0"}
                        width={"1.5rem"} height={"3rem"}
                        margin={"0 0.75rem 0 1rem"}
                        display={"flex"} alignItems={"center"} justifyContent={"center"}
                        >
                            <Button type="button" aria-label="Effacer"
                            padding={"0"}
                            display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"baseline"} gap={'0.25rem'}
                            appearance={"none"} userSelect={"none"} whiteSpace={"nowrap"} outline={"transparent solid 2px"} pointerEvents={"none"}
                            textDecoration={"none"}
                            background={"transparent"}
                            >
                                <DisableIcon />
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    {(isFocused) &&
                        <Box position={"absolute"} top={"0px"} left={"0px"}
                        paddingTop={"10px"}
                        transform={"translate3d(-1px, 48px, 0px)"} willChange={"transform"}
                        width={"100%"}>
                            <Box position={"relative"}
                            padding={"0"} width={"375px"} maxHeight={"calc(100vh - 150px)"}
                            backgroundColor={"#141216"} borderRadius={"10px"}
                            boxShadow={"0 4px 20px 0 #0000003d"}
                            color={"#ffffff"}
                            overflow={"auto"}>
                                <Flex direction={"column"}
                                maxHeight={"440px"}
                                overflowY={"auto"}>
                                    <Flex direction={"column"}
                                    maxHeight={"385px"}>

                            {/*Display searh history before query*/}
                            {(query.length === 0) ? (
                                <Flex direction={"column"}
                                maxHeight={"385px"}>
                                    <Flex direction={"row"} alignItems={"center"} justifyContent={"space-between"}
                                    paddingInlineStart={"1rem"} paddingInlineEnd={"0.75rem"} paddingY={"0.5rem"}>
                                        <Heading as={"h2"}
                                        fontFamily={"Inter,Arial,sans-serif"} fontWeight={"700"} fontSize={"18px"}
                                        lineHeight={"24px"} textDecoration={"none"}>
                                            Dernières recherches
                                        </Heading>
                                        <Button type="button" display={"inline-flex"} alignItems={"center"} justifyContent={"center"}
                                        minHeight={"2rem"} minWidth={"2rem"} height={"auto"}
                                        paddingInline={"0px"} paddingY={"0px"}
                                        position={"relative"} verticalAlign={"middle"}
                                        color={"#ffffff"}
                                        background={"transparent"} borderRadius={"full"}
                                        appearance={"none"} userSelect={"none"} whiteSpace={"nowrap"}
                                        outline={"transparent solid 2px"} outlineOffset={"0px"} lineHeight={"20px"}
                                        fontWeight={"600"} fontSize={"14px"} fontFamily={"Inter,Arial,sans-serif"} textDecoration={"none"}
                                        _hover={{
                                            background: "#3A393D",
                                        }}>
                                            <DeleteButtonIcon lineHeight={"1rem"} flexShrink={"0"} verticalAlign={"middle"} display={"block"} />
                                        </Button>
                                    </Flex>
                                    <Box overflow={"auto"}>
                                        <Box>
                                    {history.map((h: string) => {
                                        return (
                                            <Box key={h} paddingInlineStart={"1rem"} paddingInlineEnd={"0"} paddingY={"0.5rem"}
                                            onClick={() => {handleHistoryClick(h)}}>
                                                <Flex alignItems={"center"} gap={"0.5rem"}>
                                                    <Box 
                                                    minWidth={"3rem"} height={"3rem"} width={"3rem"}
                                                    borderRadius={"0.125px"}>
                                                        <Flex alignItems={"center"} justifyContent={"center"}
                                                        position={"relative"}
                                                        height={"100%"} width={"100%"}
                                                        borderStyle={"solid"} borderWidth={"0.0625rem"} borderRadius={"0.125rem"}
                                                        overflow={"hidden"}>
                                                            <Image src={""} objectFit={"cover"} width={"100%"} height={"100%"} opacity={"1"}/>
                                                            <Flex alignItems={"center"} gap={"0.25rem"}
                                                            position={"absolute"} bottom={"0.75rem"} left={"50%"} top={"50%"}
                                                            transform={"translate(-50%, -50%)"}></Flex>
                                                        </Flex>
                                                    </Box>
                                                </Flex>
                                            </Box>
                                        )})}
                                        </Box>
                                    </Box>
                                </Flex>

                                /*Displays suggestions list*/
                            ) : (searchResults.map((e: object) => {
                                return (
                                    <Box key={e.id} paddingStart={1} marginY={1}
                                    _hover={{
                                        background: "#2e2c30",}}
                                    onClick={() => {handleSuggestionClick(e.id)}}>
                                        <Text as={"p"} fontWeight={"700"}>
                                            {e.title}
                                        </Text>
                                        <Text as={"p"} fontSize={"14px"}>
                                            {e.artist.name}
                                        </Text>
                                    </Box>
                                )
                            }))}
                                    </Flex>
                                </Flex>
                            </Box>
                        </Box>
                        }

                    {/*Displays searchs informations*/}
                    {(query.length > 0) && (infoNavigation) &&
                        <Box position={"absolute"} left={"0"} right={"0"}
                        background={"#2e2c30"} color={"white"} textAlign={"center"} fontSize={"14px"}>
                            <Text>
                                ENTRER : rechercher partition - TAB : lecture morceau
                            </Text>
                        </Box>
                    }
                </Box>
                <Box id="notif"
                marginLeft={"1rem"}
                height={"2rem"} width={"2rem"}>
                    <IconButton type="button" aria-label="Notifications"
                    background={"transparent"} borderRadius={"full"}
                    height={"2rem"} width={"2rem"} minWidth={"2rem"}
                    _active={{
                        backgroundColor: "#464549",
                        color: "#ebe7ee",
                        borderRadius: "full"
                    }}
                    _focusVisible={{
                        borderRadius: "full",
                        outlineColor: "#9A36F3",
                        boxShadow: "none"
                    }}
                    _hover={{
                        background: "#3A393D",
                        borderRadius: "full"
                    }}
                    >
                        <NotifIcon />
                    </IconButton>
                </Box>
                <Button id="compte"
                textAlign={"center"}
                marginLeft={"1rem"} paddingX={"0"}
                height={"32px"} minWidth={"32px"}
                bg={"#29282d"} color={"#a9a6aa"} borderRadius={"9999px"}
                _hover={{
                        opacity: "0.76",
                        transition: "opacity 0.2s ease-in-out",
                }}
                _active={{}}
                _focusVisible={{}}
                >
                    <Text>S</Text>
                </Button>
            </Flex>
        </Flex>
    )
}

export default Header