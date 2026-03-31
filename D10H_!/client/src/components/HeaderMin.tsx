import { Box, chakra, Flex, Input, InputGroup, InputLeftElement, InputRightElement, Button, Avatar, IconButton, Text, Heading, Image, Link, List, ListItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

/* Import SVG */
import { SearchIcon, DisableIcon, NotifIcon, RightCarouselIcon } from "./Svg";

// Hooks
import { useAuth } from "../hooks/useAuth";

// Types
import { type IUsers } from "../types/user";

function HeaderMin() {

    /* Navigation */
    const navigate = useNavigate()

    /* States for Avatar button */
    const [user, setUser] = useState< IUsers | null>(null)
    const [isDisplayed, setIsDisplayed] = useState<boolean>(false)

    /* User data from context by hook */
    const { user: userToken, logout } = useAuth()

    /* Creat user data about user for the buger menue system he need */
    const userInfos = async () => {
        const host = import.meta.env.VITE_HOST
        const port = import.meta.env.VITE_SERVER_PORT
        const urlFetchUserInfos = import.meta.env.VITE_URL_FETCH_FINDBYEMAIL

        try {
            const res: Response = await fetch(`http://${host}:${port}${urlFetchUserInfos}${userToken?.email}`, {credentials: 'include'})

            if (!res.ok) {
                throw new Error(`Erreur HTTP: ${res.status}`);
            }

            const data = await res.json()
            setUser(data.user)
        } catch (err) {
            console.error("Impossible de récuperer les informations de l'utilisateur connecté : ", err)
        }
    }

    /* display burger menu */
    const display = () => {
        if (isDisplayed) return "block"
        return "none"
    }

    const handleAvatarClick = () => {
        if (isDisplayed) return setIsDisplayed(false)
        return setIsDisplayed(true)        
    }

    useEffect(() => {
        userInfos()       
    },[userToken])

    return(
        <Flex id="header-container" 
        alignItems={"center"}
        height={"40px"} minWidth={"770px"}
        paddingX={"1rem"} paddingY={"0.3125rem"}
        background={"#000000"}
        position={"fixed"} right={"0"} top={"0"} left={"80px"}
        borderBottom={"1px solid #4e4c51"}>
            <Flex id="header"
            direction={"row"} align={"center"}
            height={"40px"} width={"100%"}
            >
                <Box id="top-search-bar"
                marginRight={"auto"}
                width={"375px"}>
                    <InputGroup id="search-zone"
                    bg={"#242326"}
                    color={"#6D6D71"}
                    borderRadius={"0.5rem"}
                    >
                        <InputLeftElement id="search-icon"
                        margin={"0 0.75rem 0 1rem"} left={"0"}
                        width={"1.5rem"} height={"2rem"}
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
                        <Input type="search" aria-label="Rechercher" placeholder="Artistes, titres, Scorbraries ..."
                        padding={"0 2.75rem 0 2.75rem" }
                        height={"2rem"} width={"100%"}
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
                        width={"1.5rem"} height={"2rem"}
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
                <Box h={"32px"} pos={"relative"} w={"32px"} ml={"16px"}>
                    <Avatar as={Button} id="compte" name={userToken?.username} src={user?.avatarUrl}
                    textAlign={"center"} verticalAlign={"top"}
                    padding={0}
                    w={"2rem"} h={"2rem"} minW={"2rem"}
                    fontWeight={"500"}
                    bg={"#29282d"} color={"#a9a6aa"} borderRadius={"full"} textTransform={"uppercase"}
                    onClick={handleAvatarClick}
                    _hover={{
                            opacity: "0.76",
                            transition: "opacity 0.2s ease-in-out",
                            background: "#29282d"
                    }}
                    />
                    <Box display={display()}
                    pos={"absolute"} top={0} left={0}
                    pt={"10px"}
                    transform={"translate3d(-332px, 32px, 0px)"} willChange={"tranform"}>
                        <Box 
                        pos={"relative"}
                        p={0} 
                        w={"375px"} maxH={"calc(100vh - 150px)"}
                        bg={"#141216"}
                        color={"#ffffff"}
                        borderRadius={"10px"}
                        boxShadow={"0 4px 20px 0 #0000003d"}
                        overflowY={"auto"}>
                            <Flex as={Link} alignItems={"center"}
                            p={"12px 20px"}
                            color={"#ffffff"} textDecor={"none"}
                            bg={"transparent"}
                            outline={"transparent solid 2px"} outlineOffset={"2px"}
                            transitionDuration={".15s"} transitionProperty={"background-color"} transitionTimingFunction={"cubic-bezier(0, 0, 0.2, 1)"}
                            cursor={"pointer"} transform={"translateZ(0)"}
                            _hover={{
                                        backgroundColor: "#242326",
                                        color: "#ffffff",
                                        textDecor: "none"
                                    }}
                            >
                                <Avatar as={"span"} name={userToken?.username} src={user?.avatarUrl}
                                display={"inline-flex"} alignItems={"center"} justifyContent={"center"}
                                pos={"relative"} verticalAlign={"top"}
                                w={"2.5rem"} h={"2.5rem"}
                                fontWeight={"500"}
                                textAlign={"center"} textTransform={"uppercase"} color={"#a19fa4"}
                                bg={"#242326"}
                                borderRadius={"16rem"} borderColor={"black"}
                                flexShrink={0}/>
                                <Box color={"#ffffff"} flex={1}
                                fontSize={"16px"} ml={"12px"}
                                textOverflow={"ellipsis"} whiteSpace={"nowrap"}
                                overflow={"hidden"}>
                                    <span>{user?.username}</span>
                                </Box>
                                <RightCarouselIcon size="16px" lineHeight={"1rem"} flexShrink={0} verticalAlign={"middle"} display={"block"}/>
                            </Flex>
                            <List borderTop={"1px solid #38373b"} fontSize={"14px"} m={0} p={"8px 0"} listStyleType={"none"}>
                                <ListItem p={"0 8px"} listStyleType={"none"} m={0}>
                                    <Flex as={Link} role="button"
                                    alignItems={"center"}
                                    p={"12px"} 
                                    color={"#ffffff"} textDecor={"inherit"}
                                    backgroundColor={"transparent"}
                                    borderRadius={"4px"} 
                                    outline={"0 none"}
                                    transition={"015s"} transitionProperty={"background-color, color"}
                                    transform={"translateZ(0)"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "#242326",
                                        color: "#ffffff",
                                        textDecor: "none"
                                    }}
                                    >
                                        <chakra.span flex={1}>Membres</chakra.span>
                                        <RightCarouselIcon size="16px" lineHeight={"1rem"} flexShrink={0} color="currentcolor" verticalAlign={"middle"} display={"block"}/>
                                    </Flex>
                                </ListItem>
                                <ListItem p={"0 8px"} listStyleType={"none"} m={0}>
                                    <Flex as={Link} href="/account"
                                    alignItems={"center"}
                                    p={"12px"} 
                                    color={"#ffffff"} textDecor={"inherit"}
                                    backgroundColor={"transparent"}
                                    borderRadius={"4px"} 
                                    outline={"transparent solid 2px"} outlineOffset={"2px"}
                                    transition={"015s"} transitionProperty={"background-color, color"} transitionTimingFunction={"cubic-bezier(0, 0, 0.2, 1)"}
                                    transform={"translateZ(0)"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "#242326",
                                        color: "#ffffff",
                                        textDecor: "none"
                                    }}
                                    >
                                        <chakra.span flex={1}>Paramètre de compte</chakra.span>
                                        <RightCarouselIcon size="16px" lineHeight={"1rem"} flexShrink={0} color="currentcolor" verticalAlign={"middle"} display={"block"}/>
                                    </Flex>
                                </ListItem>
                                <ListItem p={"0 8px"} listStyleType={"none"} m={0}>
                                    <Flex as={Link} role="button"
                                    alignItems={"center"}
                                    p={"12px"} 
                                    color={"#ffffff"} textDecor={"inherit"}
                                    backgroundColor={"transparent"}
                                    borderRadius={"4px"} 
                                    outline={"transparent solid 2px"} outlineOffset={"2px"}
                                    transition={"015s"} transitionProperty={"background-color, color"} transitionTimingFunction={"cubic-bezier(0, 0, 0.2, 1)"}
                                    transform={"translateZ(0)"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "#242326",
                                        color: "#ffffff",
                                        textDecor: "none"
                                    }}>
                                        <chakra.span flex={1}>Gérer mon abonnement</chakra.span>
                                        <RightCarouselIcon size="16px" lineHeight={"1rem"} flexShrink={0} color="currentcolor" verticalAlign={"middle"} display={"block"}/>
                                    </Flex>
                                </ListItem>
                                <ListItem p={"0 8px"} listStyleType={"none"} m={0}>
                                    <Flex as={Link} role="button"
                                    alignItems={"center"}
                                    p={"12px"} 
                                    color={"#ffffff"} textDecor={"inherit"}
                                    backgroundColor={"transparent"}
                                    borderRadius={"4px"} 
                                    outline={"transparent solid 2px"} outlineOffset={"2px"}
                                    transition={"015s"} transitionProperty={"background-color, color"} transitionTimingFunction={"cubic-bezier(0, 0, 0.2, 1)"}
                                    transform={"translateZ(0)"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "#242326",
                                        color: "#ffffff",
                                        textDecor: "none"
                                    }}>
                                        <chakra.span flex={1}>Gérer mes recommandations</chakra.span>
                                        <RightCarouselIcon size="16px" lineHeight={"1rem"} flexShrink={0} color="currentcolor" verticalAlign={"middle"} display={"block"}/>
                                    </Flex>
                                </ListItem>
                                <ListItem p={"0 8px"} listStyleType={"none"} m={0}>
                                    <Flex as={Link} role="button"
                                    alignItems={"center"}
                                    p={"12px"} 
                                    color={"#ffffff"} textDecor={"inherit"}
                                    backgroundColor={"transparent"}
                                    borderRadius={"4px"} 
                                    outline={"transparent solid 2px"} outlineOffset={"2px"}
                                    transition={"015s"} transitionProperty={"background-color, color"} transitionTimingFunction={"cubic-bezier(0, 0, 0.2, 1)"}
                                    transform={"translateZ(0)"} cursor={"pointer"}
                                    onClick={() => {
                                        logout()
                                        navigate('/')
                                    }}
                                    _hover={{
                                        backgroundColor: "#242326",
                                        color: "#ffffff",
                                        textDecor: "none"
                                    }}>
                                        Déconnexion
                                    </Flex>
                                </ListItem>
                            </List>
                        </Box>
                        <Box pos={"absolute"} left={"343px"} top={"4px"}
                        my={0}
                        h={0} w={0}
                        border={"6px solid #0000"} borderBottomColor={"#141216"} borderTopWidth={0} />
                    </Box>
                </Box>
            </Flex>
        </Flex>
    )
}

export default HeaderMin