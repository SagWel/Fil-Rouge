import { Box, Link, Flex, Heading, Text, chakra } from '@chakra-ui/react'
import '../style.css'
import { LogoTempo } from '../components/svg'

export interface IPageInfosProps {}

const PageInfos: React.FC<IPageInfosProps> = () => {
    return (
        <>
            <chakra.nav className='tempo-topbar'
            display={"flex"} alignItems={"center"} justifyContent={"space-between"}
            position={"relative"}
            h={"80px"} w={"100%"}
            paddingInline={"112px"}
            bg={"#0F0D13"}
            boxSizing='border-box'>
                <Link href='/'
                flexGrow={0}
                textAlign={"center"} color={"#fdfcfe"} textDecor={"none"}
                w={'fit-content'}
                outline={0}
                zIndex={"201"} cursor={"pointer"}>
                    <LogoTempo />
                </Link>
                <Flex className='tempo-topbar-exposed-links' display={"none"} flexDir={"row"} flexGrow={1}
                ml={"112px"} mr={"calc(14px*2)"}>
                    <Link href='https://www.deezer.com/fr/offers/'
                    fontSize={"16px"} fontWeight={"700"}
                    color={"#fdfcfe"} textDecor={"none"}
                    cursor={"pointer"}
                    _active={{
                        color: "#a238ff"
                    }}
                    _focus={{
                        textDecor: "underlline"
                    }}
                    _focusVisible={{
                        textDecor: "underline"
                    }}
                    _hover={{
                        color: "#a238ff"
                    }}>
                        Offres
                    </Link>
                    <Link href='https://www.deezer.com/explore/fr/features/'
                    fontSize={"16px"} fontWeight={"700"}
                    color={"#fdfcfe"} textDecor={"none"}
                    cursor={"pointer"}
                    _active={{
                        color: "#a238ff"
                    }}
                    _focus={{
                        textDecor: "underlline"
                    }}
                    _focusVisible={{
                        textDecor: "underline"
                    }}
                    _hover={{
                        color: "#a238ff"
                    }}>
                        Découvrir Deezer
                    </Link>
                    <Link href='https://www.deezer.com/fr/channels/explore/'
                    fontSize={"16px"} fontWeight={"700"}
                    color={"#fdfcfe"} textDecor={"none"}
                    cursor={"pointer"}
                    _active={{
                        color: "#a238ff"
                    }}
                    _focus={{
                        textDecor: "underlline"
                    }}
                    _focusVisible={{
                        textDecor: "underline"
                    }}
                    _hover={{
                        color: "#a238ff"
                    }}>
                        Musique
                    </Link>
                </Flex>
                <Flex className='stack' 
                flexDir={'row'} flexGrow={0} justifyContent={"flex-end"} alignItems={"center"}>
                    <Link id='topbar-login-button' href='/login' className='topbar-action'
                    display={"none"} alignItems={"center"} gap={"14px"} justifyContent={"space-evenly"}
                    position={"relative"} 
                    padding={"9px 20px"}
                    minH={"34px"} w={"fit-content"}
                    fontSize={"14px"} fontWeight={"700"}
                    color={"#fdfcfe"} textAlign={"center"} textDecor={"none"} 
                    textTransform={"none"} transitionDuration={".2s"} transitionProperty={"background-color, border-color, color, transform;"}
                    background={"transparent"}
                    borderRadius={"8px"} border={"1px solid #555257"}
                    outline={0}
                    appearance={"none"} boxSizing='border-box' cursor={"pointer"}
                    _active={{
                        transform: "scale(.95)"
                    }}
                    _focusVisible={{
                        outline: "0"
                    }}
                    _hover={{
                        bg: "#29282d"
                    }}>
                        Connexion
                    </Link>
                    <Link id='topbar-register-button' href='/signup' className='topbar-action'
                    display={"none"} alignItems={"center"} gap={"14px"} justifyContent={"space-evenly"}
                    position={"relative"}
                    padding={"9px 20px"}
                    minH={"34px"} w={"fit-content"}
                    fontSize={"14px"} fontWeight={"700"}
                    color={"#ffffff"} textAlign={"center"} textDecor={"none"}
                    textTransform={"none"} transitionDuration={".2s"} transitionProperty={"background-color, border-color, color, transform;"}
                    background={"#a238ff"}
                    borderRadius={"8px"} border={"1px solid transparent"}
                    outline={0}
                    appearance={"none"} boxSizing='border-box' cursor={"pointer"}
                    _active={{
                        transform: "scale(.95)"
                    }}
                    _focusVisible={{
                        outline: "0"
                    }}
                    _hover={{
                        bg: "#9333e8"
                    }}>
                        Inscription
                    </Link>
                </Flex>
            </chakra.nav>
            <Box id='page-homepage-brand'
            display={"block"}>
                <Box as='section'
                display={"block"}
                pos={"relative"}
                paddingY={"calc(14px*10)"} paddingX={"calc(14px*2)"}
                color={"#0f0d13"}
                bg={"#fdfcfe"}
                boxSizing='border-box' overflow={"hidden"}>
                    <Box
                    display={'block'} alignItems={"center"} 
                    textAlign={"center"}>
                        <Heading as={"h1"} display={"block"}
                        maxW={"900px"}
                        marginBlock={"0.67em"} marginInline={0}
                        mx={"auto"} my={0}
                        fontSize={"140px"} fontWeight={"800"}
                        lineHeight={".9"} textTransform={"uppercase"}
                        sx={{textWrap: 'balance'}}>
                            Là où ta musique prend vie
                        </Heading>
                        <Text as={"p"} display={"block"}
                        marginBlock={"1em"} marginInline={0}
                        pb={"14px"} m={0}
                        fontSize={"35px"} fontWeight={"700"}
                        color={"#0f0d13"}
                        lineHeight={"1.2"} textAlign={"center"}>
                            Le streaming musical par Deezer
                        </Text>
                        <Link href='/signup/?step=0'
                        display={"inline-flex"} alignItems={"center"} gap={"14px"} justifyContent={"space-evenly"}
                        position={"relative"}
                        p={"8px 32px"}
                        minH={"42px"}
                        fontSize={"16px"} fontWeight={"700"}
                        color={"#ffffff"} textAlign={"center"} textDecor={"none"}
                        textTransform={"none"} transitionDuration={".2s"} transitionProperty={"background-color, border-color, color, transform"}
                        bg={"#a238ff"}
                        borderRadius={"12px"} border={"1px solid transparent"}
                        outline={0}
                        appearance={"none"} boxSizing='border-box' cursor={"pointer"}
                        _active={{
                        transform: "scale(.95)"
                    }}
                    _focusVisible={{
                        outline: "0"
                    }}
                    _hover={{
                        bg: "#9333e8"
                    }}>
                            S'inscrire gratuitement
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default PageInfos