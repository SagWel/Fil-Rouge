import { Box, Button, chakra, Flex, List, ListItem, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { DownChevronSoftIcon, UpChevronSoftIcon } from "../components/Svg"
import { useState } from "react"

import '../style.css'

export interface IPageAccountProps {}

const PageAccount: React.FC<IPageAccountProps> = () => {

    const [opacity, setOpacity] = useState<"0" | "1">("0")
    const [scale, setScale] = useState<"0" | "1">("0")

    const handleOnClick = () => {
        if (opacity === "0" && scale === "0") {
            setOpacity('1')
            setScale('1')
        } else {
            setOpacity('0')
            setScale('0')
        }
    }

    return (
        <>
            <chakra.nav
            display={"block"}
            pos={'relative'} 
            pt={"24px"}
            borderBottom={"1px solid #141216"}
            boxShadow={"0 2px 6px -4px #19192229"} boxSizing="border-box">
                <Box
                pos={'relative'}
                py={0} px={'24px'} mx={'auto'} 
                whiteSpace={"nowrap"}
                boxSizing="border-box">
                    <List listStyleImg={"initial"} listStylePos={'initial'} listStyleType={'none'}
                    m={0} p={0}>
                        <ListItem listStyleImg={"initial"} listStylePos={'initial'} listStyleType={'none'}
                        pos={'relative'}
                        display={"inline-block"}
                        m={0} p={0}
                        fontSize={"16px"}
                        color={"#a19fa4"}>
                            <Text as={Link}
                            display={"block"}
                            pb={"16px"} 
                            color={"white"}
                            backgroundColor={'transparent'}
                            borderBottom={"2px solid transparent"} borderColor={"#ad47ff"}
                            outline={"0 none"}
                            fontSize={"16px"} fontFamily={"Inter,Arial,sans-serif"} fontWeight={"600"}
                            lineHeight={"24px"} textDecor={'none'} cursor={'pointer'}
                            transitionDuration={'.15s'} transitionProperty={"border-color, color"}
                            boxSizing="border-box">
                                Mes informations
                            </Text>
                        </ListItem>
                        <ListItem listStyleImg={"initial"} listStylePos={'initial'} listStyleType={'none'}
                        pos={'relative'}
                        display={"inline-block"}
                        m={0} p={0} pl={"44px"}
                        fontSize={"16px"}
                        color={"#a19fa4"}>
                            <Text as={Link} to={"/account/notifications"}
                            display={"block"}
                            pb={"16px"} 
                            color={"#a19fa4"}
                            backgroundColor={'transparent'}
                            borderBottom={"2px solid transparent"}
                            outline={"0 none"}
                            fontSize={"16px"} fontFamily={"Inter,Arial,sans-serif"} fontWeight={"400"}
                            lineHeight={"24px"} textDecor={'none'} cursor={'pointer'}
                            transitionDuration={'.15s'} transitionProperty={"border-color, color"}
                            boxSizing="border-box" 
                            _hover={{
                                borderColor: '#a19fa4'
                            }}>
                                Préférences de notifications
                            </Text>
                        </ListItem>
                        <ListItem listStyleImg={"initial"} listStylePos={'initial'} listStyleType={'none'}
                        pos={'relative'}
                        display={"inline-block"}
                        m={0} p={0} pl={"44px"}
                        fontSize={"16px"}
                        color={"#a19fa4"}>
                            <Text as={Link} to={"/account/devices"}
                            display={"block"}
                            pb={"16px"} 
                            color={"#a19fa4"}
                            backgroundColor={'transparent'}
                            borderBottom={"2px solid transparent"}
                            outline={"0 none"}
                            fontSize={"16px"} fontFamily={"Inter,Arial,sans-serif"} fontWeight={"400"}
                            lineHeight={"24px"} textDecor={'none'} cursor={'pointer'}
                            transitionDuration={'.15s'} transitionProperty={"border-color, color"}
                            boxSizing="border-box"
                            _hover={{
                                borderColor: '#a19fa4'
                            }}>
                                Mes appareils connectés
                            </Text>
                        </ListItem>
                        <ListItem listStyleImg={"initial"} listStylePos={'initial'} listStyleType={'none'}
                        pos={'relative'}
                        display={"inline-block"}
                        m={0} p={0} pl={"44px"}
                        fontSize={"16px"}
                        color={"#a19fa4"}>
                            <Text as={Link} to={"/apps"} target="_blanket"
                            display={"block"}
                            pb={"16px"} 
                            color={"#a19fa4"}
                            backgroundColor={'transparent'}
                            borderBottom={"2px solid transparent"}
                            outline={"0 none"}
                            fontSize={"16px"} fontFamily={"Inter,Arial,sans-serif"} fontWeight={"400"}
                            lineHeight={"24px"} textDecor={'none'} cursor={'pointer'}
                            transitionDuration={'.15s'} transitionProperty={"border-color, color"}
                            boxSizing="border-box"
                            _hover={{
                                borderColor: '#a19fa4'
                            }}>
                                Mes Applications
                            </Text>
                        </ListItem>
                        <ListItem listStyleImg={"initial"} listStylePos={'initial'} listStyleType={'none'}
                        pos={'relative'}
                        display={"inline-block"}
                        m={0} p={0} pl={"44px"}
                        fontSize={"16px"}
                        color={"#a19fa4"}>
                            <Text as={Link} to={"/account/display"}
                            display={"block"}
                            pb={"16px"} 
                            color={"#a19fa4"}
                            backgroundColor={'transparent'}
                            borderBottom={"2px solid transparent"}
                            outline={"0 none"}
                            fontSize={"16px"} fontFamily={"Inter,Arial,sans-serif"} fontWeight={"400"}
                            lineHeight={"24px"} textDecor={'none'} cursor={'pointer'}
                            transitionDuration={'.15s'} transitionProperty={"border-color, color"}
                            boxSizing="border-box"
                            _hover={{
                                borderColor: '#a19fa4'
                            }}>
                                Paramètres d'affichage
                            </Text>
                        </ListItem>
                        <ListItem listStyleImg={"initial"} listStylePos={'initial'} listStyleType={'none'}
                        pos={'relative'}
                        display={"inline-block"}
                        m={0} p={0} pl={"44px"}
                        fontSize={"16px"}
                        color={"#a19fa4"}>
                            <Text as={Button}
                            display={"flex"} align={'center'}
                            p={0} m={0}
                            color={"#a19fa4"}
                            background={'transparent'}
                            border={0} borderBottom={"2px solid transparent"}
                            outline={"0 none"}
                            fontSize={"16px"} fontFamily={"Inter,Arial,sans-serif"} fontWeight={"400"}
                            lineHeight={"normal"} textDecor={'none'} verticalAlign={"middle"} cursor={'pointer'} appearance={"none"}
                            transitionDuration={'.15s'} transitionProperty={"border-color, color"} overflow={'visible'}
                            boxSizing="border-box"
                            onClick={handleOnClick}
                            _hover={{
                                bg: 'transparent'
                            }}>
                                Plus
                                {(scale === '1' && opacity === '1') ? 
                                <UpChevronSoftIcon lineHeight={'1em'} flexShrink={0} color="#a19fa4" verticalAlign={"middle"} display={'block'} marginInlineStart={"5px"} mt={'3px'} /> :
                                <DownChevronSoftIcon lineHeight={'1em'} flexShrink={0} color="#a19fa4" verticalAlign={"middle"} display={'block'} marginInlineStart={"5px"} mt={'3px'}/>
                                }
                            </Text>
                            <List listStyleImg={"initial"} listStylePos={'initial'} listStyleType={'none'}
                            pos={'absolute'} left={"auto"} right={0} top={'45px'} zIndex={'1001'}
                            m={0} p={0} mt={1}
                            minW={"100%"}
                            fontSize={"12px"}
                            textAlign={'left'} opacity={opacity}
                            bgColor={"#141216"}
                            borderRadius={'10px'}
                            float={'left'}
                            boxShadow={'0 4px 20px 0 #0000003d'}
                            transform={`scaleY(${scale})`} transformOrigin={'50% 0'}
                            transitionDuration={'.15s'} transitionProperty={'opacity, transform'}>
                                <ListItem listStyleImg={"initial"} listStylePos={'initial'} listStyleType={'none'}
                                m={0} p={0}
                                color={'#a19fa4'}
                                _hover={{
                                    bg: "#242326",
                                    color: "white"
                                }}>
                                    <Text as={Link} to={'/account/share'}
                                    display={'block'}
                                    p={'0 15px'}
                                    w={'100%'}
                                    fontSize={'16px'} fontFamily={'Inter,Arial,sans-serif'} fontWeight={'400'}
                                    lineHeight={'32px'} textAlign={'left'} textDecor={'none'} whiteSpace={'nowrap'} color={'#a19fa4'} cursor={'pointer'}
                                    bgColor={"#141216"}
                                    outline={'0 none'}
                                    transitionDuration={'.15s'} transitionProperty={'background-color, color'}>
                                        Préférences de partage
                                    </Text>
                                </ListItem>
                                <ListItem listStyleImg={"initial"} listStylePos={'initial'} listStyleType={'none'}
                                m={0} p={0}
                                color={'#a19fa4'}
                                _hover={{
                                    bg: "#242326",
                                    color: "white"
                                }}>
                                    <Text as={Link} to={'/account/country_selector'}
                                    display={'block'}
                                    p={'0 15px'}
                                    w={'100%'}
                                    fontSize={'16px'} fontFamily={'Inter,Arial,sans-serif'} fontWeight={'400'}
                                    lineHeight={'32px'} textAlign={'left'} textDecor={'none'} whiteSpace={'nowrap'} color={'#a19fa4'} cursor={'pointer'}
                                    bgColor={"#141216"}
                                    outline={'0 none'}
                                    transitionDuration={'.15s'} transitionProperty={'background-color, color'}>
                                        Sélection du pays
                                    </Text>
                                </ListItem>
                            </List>
                        </ListItem>
                    </List>
                </Box>
            </chakra.nav>
            <Flex>

            </Flex>
        </>
    )
}

export default PageAccount