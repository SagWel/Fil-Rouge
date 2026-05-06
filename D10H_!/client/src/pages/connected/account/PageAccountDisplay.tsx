import { Box, chakra, Text, List, ListItem, Button, Flex, Container, Heading, FormControl, FormLabel, Switch, FormHelperText } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useState } from "react"

import { UpChevronSoftIcon, DownChevronSoftIcon, InfosIcon } from "../../../components/Svg"
import { useAuth } from "../../../hooks/useAuth"

export interface IPageAccountDisplayProps {}

const PageAccountDisplay : React.FC<IPageAccountDisplayProps> = () => {
    const disabled = true

    const { user } = useAuth()

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

    
    
    const [explicitContent, setExplicitContent] = useState<boolean>(user?.isChildAccount ? false : true)
    const [displayExplicitContent, setDisplayExplicitContent] = useState<boolean>(user?.isChildAccount ? false : true)
    const [displayUpdateInfos, setDisplayUpdateInfos] = useState<boolean>(false)

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
                        <Text as={Link} to={"/account/devices"} title="prochainement"
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
                            onClick={(e) => disabled && e.preventDefault()}
                            sx={disabled ? {
                                opacity: 0.5,
                                cursor: 'not-allowed',
                                textDecor: 'none',
                                _hover : {
                                    borderColor: 'none'
                                }
                            } : {}}
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
                        <Text as={Link} to={"/apps"} target="_blanket" title="prochainement"
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
                            onClick={(e) => disabled && e.preventDefault()}
                            sx={disabled ? {
                                opacity: 0.5,
                                cursor: 'not-allowed',
                                textDecor: 'none',
                                _hover : {
                                    borderColor: 'none'
                                }
                            } : {}}
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
                                <DownChevronSoftIcon lineHeight={'1em'} flexShrink={0} color="#a19fa4" verticalAlign={"middle"} display={'block'} marginInlineStart={"5px"} mt={'3px'} />
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
                            <ListItem role="group"
                                listStyleImg={"initial"} listStylePos={'initial'} listStyleType={'none'}
                                m={0} p={0}
                                color={'#a19fa4'}>
                                <Text as={Link} to={'/account/share'}
                                    display={'block'}
                                    p={'0 15px'}
                                    w={'100%'}
                                    fontSize={'16px'} fontFamily={'Inter,Arial,sans-serif'} fontWeight={'400'}
                                    lineHeight={'32px'} textAlign={'left'} textDecor={'none'} whiteSpace={'nowrap'} color={'#a19fa4'} cursor={'pointer'}
                                    bgColor={"#141216"}
                                    outline={'0 none'}
                                    transitionDuration={'.15s'} transitionProperty={'background-color, color'}
                                    _hover={{
                                        bg: "#242326",
                                        color: "white",
                                        textDecor: 'none'
                                    }}>
                                    Préférences de partage
                                </Text>
                            </ListItem>
                            <ListItem role="group"
                                listStyleImg={"initial"} listStylePos={'initial'} listStyleType={'none'}
                                m={0} p={0}
                                color={'#a19fa4'}>
                                <Text as={Link} to={'/account/country_selector'}
                                    display={'block'}
                                    p={'0 15px'}
                                    w={'100%'}
                                    fontSize={'16px'} fontFamily={'Inter,Arial,sans-serif'} fontWeight={'400'}
                                    lineHeight={'32px'} textAlign={'left'} textDecor={'none'} whiteSpace={'nowrap'} color={'#a19fa4'} cursor={'pointer'}
                                    bgColor={"#141216"}
                                    outline={'0 none'}
                                    transitionDuration={'.15s'} transitionProperty={'background-color, color'}
                                    _hover={{
                                        bg: "#242326",
                                        color: "white",
                                        textDecor: 'none'
                                    }}>
                                    Sélection du pays
                                </Text>
                            </ListItem>
                        </List>
                    </ListItem>
                </List>
            </Box>
        </chakra.nav>
        <Flex align={'start'} justify={'center'}
        p={"1.5rem"}
        w={'full'} h={"95%"}>
            <Container
            p={"1.5rem"} marginInline={'auto'} px={'1rem'}
            maxW={'1024px'} w={'100%'}
            bg={'#141216'}
            borderRadius={'0.5rem'} border={'1px solid #4e4c51'}>
                <Box>
                    <Heading as={'h2'}
                    m={0}
                    fontFamily={'"Deezer Product",Tahoma,Arial,sans-serif'} fontWeight={'700'} fontSize={'32px'}
                    lineHeight={'32px'} textDecor={'none'}>
                        Paramètres d'affichage
                    </Heading>
                    <chakra.hr aria-orientation="horizontal"
                    mt={'0.75rem'} mb={'1rem'}
                    w={'full'}
                    opacity={'0.1 !important'}
                    borderWidth={'0 0 1px'} borderColor={'inherit'} borderStyle={'solid'} />
                    <Box
                    mt={'25px'}>
                        <FormControl w={'100%'} pos={'relative'}>
                            <Flex align={'center'}>
                                <FormLabel 
                                display={'block'}
                                marginInlineEnd={'0.75rem'} mb={'0'}
                                fontWeight={'500'} fontSize={'0.875rem'}
                                textAlign={'start'} color={'#ffff'}
                                transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                opacity={1} cursor={'pointer'}>
                                    Ne pas me recommander de contenus explicites
                                </FormLabel>
                                <Switch isChecked={!explicitContent}
                                display={'inline-block'}
                                pos={'relative'}
                                verticalAlign={'middle'} lineHeight={0}
                                onChange={(e) => {
                                    setExplicitContent(!e.target.checked)
                                    setDisplayUpdateInfos(true)
                                }}
                                sx={{
                                    ".chakra-switch__track": {
                                        bg: "#242326",
                                        p: "0.25rem"
                                    },

                                    "&[data-checked]": {
                                        ".chakra-switch__track": {
                                            bg: "#ad47ff"
                                        }
                                    },

                                    ".chakra-switch__thumb": {
                                        bg: "white"
                                    }
                                }}/>
                            </Flex>
                            <FormHelperText
                            mt={0}
                            fontSize={'0.75rem'}
                            lineHeight={'normal'} color={'#a19fa4'}>
                                Les contenus explicites seront exclus de tes recommandations.
                            </FormHelperText>
                        </FormControl>
                    </Box>
                    {
                        explicitContent === false && 
                        <Box
                        mt={'25px'}>
                            <FormControl w={'100%'} pos={'relative'}>
                                <Flex align={'center'}>
                                    <FormLabel 
                                    display={'block'}
                                    marginInlineEnd={'0.75rem'} mb={'0'}
                                    fontWeight={'500'} fontSize={'0.875rem'}
                                    textAlign={'start'} color={'#ffff'}
                                    transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                    opacity={1} cursor={'pointer'}>
                                        Masquer les contenus explicites
                                    </FormLabel>
                                    <Switch isChecked={!displayExplicitContent}
                                    display={'inline-block'}
                                    pos={'relative'}
                                    verticalAlign={'middle'} lineHeight={0}
                                    onChange={(e) => setDisplayExplicitContent(!e.target.checked)}
                                    sx={{
                                        ".chakra-switch__track": {
                                            bg: "#242326",
                                            p: "0.25rem"
                                        },

                                        "&[data-checked]": {
                                            ".chakra-switch__track": {
                                                bg: "#ad47ff"
                                            }
                                        },

                                        ".chakra-switch__thumb": {
                                            bg: "white"
                                        }
                                    }}/>
                                </Flex>
                                <FormHelperText
                                mt={0}
                                fontSize={'0.75rem'}
                                lineHeight={'normal'} color={'#a19fa4'}>
                                    Les contenus explicites ne seront pas recommandés, ne pourront pas être écoutés ni recherchés.
                                </FormHelperText>
                            </FormControl>
                        </Box>
                    }
                    {
                        displayUpdateInfos &&
                        <Flex align={'center'} gap={'0.5rem'}
                        pos={'relative'}
                        p={'0.75rem'} mt={'1rem'}
                        color={'#000000'}
                        bg={'#ffffff'}
                        borderRadius={'0.5rem'}
                        overflow={'hidden'}>
                            <chakra.span display={'inherit'}>
                                <InfosIcon lineHeight={'1em'} flexShrink={0} verticalAlign={'middle'} display={'block'} />
                            </chakra.span>
                            <Text
                            fontSize={'14px'} fontWeight={'400'} fontFamily={'Inter,Arial,sans-serif'}
                            lineHeight={'20px'} textDecor={'none'} color={'#656367'}>
                                Encore un peu de patience, la mise à jour peut prendre quelques heures.
                            </Text>
                        </Flex>
                    }                 
                </Box>
            </Container>
        </Flex>
        </>
    )
}

export default PageAccountDisplay