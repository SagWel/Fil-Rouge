import { Box, Container, Button, chakra, Flex, Heading, List, ListItem, Stack, Text, Image, Input, FormControl, FormLabel, Radio, RadioGroup } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { AppleIcon, CameraIcon, DownChevronSoftIcon, FacebookIcon, GoogleIcon, PenIcon, UpChevronSoftIcon } from "../../components/Svg"
import { useState } from "react"

import '../../style.css'
import { useAuth } from "../../hooks/useAuth"
import type { GenderType } from "../../types/user"

export interface IPageAccountProps {}

const PageAccount: React.FC<IPageAccountProps> = () => {

    const { user } = useAuth()

    const [opacity, setOpacity] = useState<"0" | "1">("0")
    const [scale, setScale] = useState<"0" | "1">("0")
    const [userGender, setUserGender] = useState<GenderType>()

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
            <Flex align={'center'} justify={'center'}
            p={"1.5rem"}
            w={'full'} h={"full"}>
                <Container
                p={"1.5rem"}
                maxW={'1024px'}
                bg={'#141216'}
                borderRadius={'0.5rem'} border={'1px solid #4e4c51'}>
                    <Box>
                        <Heading as={'h2'}
                        m={0}
                        fontFamily={'"Deezer Product",Tahoma,Arial,sans-serif'} fontWeight={'700'} fontSize={'32px'}
                        lineHeight={'32px'} textDecor={'none'}>
                            Mes informations
                        </Heading>
                        <chakra.hr aria-orientation="horizontal"
                        mt={'0.75rem'} mb={'1rem'}
                        w={'full'}
                        opacity={'0.6'}
                        borderWidth={'0 0 1px'} borderColor={'inherit'} borderStyle={'solid'}/>
                        <Stack gap={'1.5rem'}
                        marginInline={'auto'}
                        maxW={'640px'} w={"100%"}>
                            <Stack align={'center'} gap={'1.5rem'}>
                                <Box
                                borderRadius={'full'} overflow={'hidden'} flex={'0 0 auto'}>
                                    <chakra.figure 
                                    display={'inline-block'}
                                    pos={'relative'}
                                    m={0}
                                    maxH={'100%'} maxW={'100%'}
                                    verticalAlign={'top'}
                                    overflow={'hidden'}
                                    borderRadius={'0.25rem'}
                                    boxShadow={'0 1px 6px #19192229'}
                                    transform={'translateZ(0)'}>
                                        <Box display={'block'} pos={'relative'} bgColor={'#0000'}>
                                            {/* User image or */}
                                            <Image alt={user?.username} src="https://cdn-images.dzcdn.net/images/user//125x125-000000-80-0-0.jpg"
                                            display={"inline-block"} 
                                            h={'125px'} w={'125px'} 
                                            verticalAlign={'top'} 
                                            borderStyle={'none'} border={0}
                                            objectFit={'cover'} />
                                        </Box>
                                        <Input type="file" accept="image/jpeg, image/png"
                                        display={'none'}
                                        m={0}
                                        lineHeight={'normal'} verticalAlign={'middle'}
                                        outline={0}/>
                                        <Box>
                                            <chakra.span 
                                            display={'flex'} alignItems={'center'} justifyContent={'center'}
                                            left={'50%'} position={'absolute'} top={'50%'}
                                            m={'-26px 0 0 -26px'}
                                            h={'52px'} w={'52px'}
                                            fontSize={'12px'}
                                            color={'#121216'} lineHeight={'36px'} textAlign={'center'}
                                            bgColor={'#fff'}
                                            borderRadius={'50%'}
                                            opacity={0} boxShadow={'0 3px 6px 0 #00000040'}
                                            transitionDuration={'.15s'} transitionProperty={'opacity, transform'}
                                            cursor={'pointer'}>
                                                <CameraIcon size="20px" lineHeight={'1em'} flexShrink={0} color="currentcolor" display={'block'} />
                                            </chakra.span>
                                        </Box>
                                    </chakra.figure>  
                                </Box>
                                <Stack gap={'0.5rem'}>
                                    <Heading as={'h3'}
                                    m={0}
                                    fontFamily={'"Deezer Product",Tahoma,Arial,sans-serif'} fontWeight={'700'} fontSize={'32px'}
                                    lineHeight={'32px'} textDecor={'none'} textAlign={'center'}>
                                        {user?.username}
                                    </Heading>
                                    {/* Partie affichage abonnement 
                                    <Text as={'p'} 
                                    fontSize={'0.875rem'} textAlign={'center'} color={'#a19fa4'} m={0}>

                                    </Text>
                                    */}
                                    {/* Button gestion d'abonnement
                                    <Button display={'inline-flex'} alignItems={'center'} justifyContent={'center'} gap={'0.25rem'}
                                    pos={'relative'}
                                    paddingInline={'1.5rem'} py={'0.75rem'} m={0}
                                    minH={'3rem'} minW={'3rem'}
                                    fontSize={'16px'} fontWeight={'700'} fontFamily={'Inter,Arial,sans-serif'}
                                    whiteSpace={'nowrap'} verticalAlign={'middle'} lineHeight={'24px'} textDecor={'none'} color={'#ffff'}
                                    bg={'transparent'}
                                    border={'solid 0.0625rem #4e4c51'} borderRadius={'0.75rem'}
                                    outline={'transparent solid 1px'} outlineOffset={0}
                                    transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                    appearance={'none'} userSelect={'none'} cursor={'pointer'} overflow={'visible'}
                                    _active={{
                                        borderColor: '#656367',
                                        bg: '#38373b',
                                        color: '#e2dfe6'
                                    }}
                                    _focusVisible={{
                                        boxShadow: 'none',
                                        borderColor: '#ad47ff',
                                        color: '#ad47ff'
                                    }}
                                    _hover={{
                                        borderColor: '#59575c',
                                        bg: '#2e2c30',
                                        color: '#f5f2f8'
                                    }}>
                                        <span>Gérer mon abonnement</span>
                                    </Button>
                                    */}
                                </Stack>
                            </Stack>
                            <Box
                            marginInline={'auto'}
                            maxW={'640px'} w={"full"}>
                                <Heading as={'h3'}
                                m={0}
                                fontFamily={'Inter,Arial,sans-serif'} fontWeight={'700'} fontSize={'20px'}
                                lineHeight={'24px'} textDecor={'none'}>
                                    Connexion
                                </Heading>
                                <chakra.hr aria-orientation="horizontal"
                                mt={'0.75rem'} mb={'1rem'}
                                w={'full'} h={0}
                                opacity={'0.6'}
                                borderWidth={'0 0 1px'} borderColor={'inherit'} borderStyle={'solid'}
                                boxSizing="content-box" overflow={'visible'}/>
                                <Stack align={'center'} gap={'1.5rem'}
                                marginInline={'auto'}
                                w={'100%'}>
                                    <FormControl role="group"
                                    w={'100%'} pos={'relative'}>
                                        <FormLabel htmlFor="field-:ron:"
                                        display={'block'}
                                        marginInlineEnd={'0.75rem'} mb={'0.5rem'}
                                        fontWeight={'500'} fontSize={'0.875rem'}
                                        textAlign={'start'} color={'#a19fa4'}
                                        opacity={'1'}
                                        transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'} transitionDuration={'200ms'}
                                        cursor={'pointer'}>
                                            Ton E-mail&nbsp;:
                                        </FormLabel>
                                        <Stack align={'center'} flexDir={'row'} gap={'0.5rem'}>
                                            <Input id="field-:ron:" value={user?.email} disabled
                                            pos={'relative'}
                                            m={0} paddingInlineStart={'1rem'} paddingInlineEnd={'0.75rem'} 
                                            minW={'0px'} w={'100%'} h={'3rem'} minH={'3rem'}
                                            fontSize={'16px'} fontWeight={'400'} fontFamily={'Inter,Arial,sans-serif'}
                                            color={'#ffffff'} lineHeight={'24px'} textDecor={'none'} verticalAlign={'middle'}
                                            bg={'#242326'}
                                            border={'transparent solid 0.125rem'} borderRadius={'0.5rem'}
                                            outline={'transparent solid 2px'} outlineOffset={'2px'}
                                            appearance={'none'} boxSizing="border-box"
                                            transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                            _disabled={{
                                                bgColor: "#2e2c30",
                                                opacity: "1",
                                                borderColor: 'transparent',
                                                color: '#706e73'
                                            }}/>
                                            <Button type="button" aria-label="Modifier"
                                            display={'inline-flex'} alignItems={'center'} justifyContent={'center'} gap={'0.25rem'}
                                            pos={'relative'}
                                            paddingInline={'1.5rem'} p={0} m={0}
                                            minH={'3rem'} h={'auto'} minW={'3rem'}
                                            fontSize={'16px'} fontWeight={'700'} fontFamily={'Inter,Arial,sans-serif'}
                                            whiteSpace={'nowrap'} verticalAlign={'middle'} lineHeight={'24px'} textDecor={'none'} color={'#ffffff'}
                                            bg={'transparent'}
                                            border={'#4e4c51 solid 0.0625rem'} borderRadius={'full'}
                                            outline={'transparent solid 1px'} outlineOffset={'0px'}
                                            transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                            appearance={'none'} userSelect={'none'} cursor={'pointer'} overflow={'visible'}>
                                                <PenIcon lineHeight={'1em'} flexShrink={0} verticalAlign={'middle'} display={'block'} />
                                            </Button>
                                        </Stack>
                                    </FormControl>
                                    <FormControl role="group"
                                    w={'100%'} pos={'relative'}>
                                        <FormLabel htmlFor="field-:rt:"
                                        display={'block'}
                                        marginInlineEnd={'0.75rem'} mb={'0.5rem'}
                                        fontWeight={'500'} fontSize={'0.875rem'}
                                        textAlign={'start'} color={'#a19fa4'}
                                        opacity={'1'}
                                        transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'} transitionDuration={'200ms'}
                                        cursor={'pointer'}>
                                            Ton mot de passe&nbsp;:
                                        </FormLabel>
                                        <Stack align={'center'} flexDir={'row'} gap={'0.5rem'}>
                                            <Input id="field-:ron:" value='******' disabled
                                            pos={'relative'}
                                            m={0} paddingInlineStart={'1rem'} paddingInlineEnd={'0.75rem'} 
                                            minW={'0px'} w={'100%'} h={'3rem'} minH={'3rem'}
                                            fontSize={'16px'} fontWeight={'400'} fontFamily={'Inter,Arial,sans-serif'}
                                            color={'#ffffff'} lineHeight={'24px'} textDecor={'none'} verticalAlign={'middle'}
                                            bg={'#242326'}
                                            border={'transparent solid 0.125rem'} borderRadius={'0.5rem'}
                                            outline={'transparent solid 2px'} outlineOffset={'2px'}
                                            appearance={'none'} boxSizing="border-box"
                                            transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                            _disabled={{
                                                bgColor: "#2e2c30",
                                                opacity: "1",
                                                borderColor: 'transparent',
                                                color: '#706e73'
                                            }}/>
                                            <Button aria-label="Modifier"
                                            display={'inline-flex'} alignItems={'center'} justifyContent={'center'} gap={'0.25rem'}
                                            pos={'relative'}
                                            paddingInline={'1.5rem'} m={0}
                                            minH={'3rem'} h={'auto'} minW={'3rem'}
                                            fontSize={'16px'} fontWeight={'700'} fontFamily={'Inter,Arial,sans-serif'}
                                            whiteSpace={'nowrap'} verticalAlign={'middle'} lineHeight={'24px'} textDecor={'none'} color={'#ffffff'}
                                            bg={'transparent'}
                                            border={'#4e4c51 solid 0.0625rem'} borderRadius={'full'}
                                            outline={'transparent solid 1px'} outlineOffset={'0px'}
                                            transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                            appearance={'none'} userSelect={'none'} cursor={'pointer'} overflow={'visible'}>
                                                <PenIcon lineHeight={'1em'} flexShrink={0} verticalAlign={'middle'} display={'block'} />
                                            </Button>
                                        </Stack>
                                    </FormControl>
                                </Stack>
                            </Box>
                            {/* Connexion services associés 
                            <Stack align={'center'} gap={'1.5rem'}
                            marginInline={'auto'}
                            w={'100%'}>
                                <Stack align={'center'} flexDir={'row'} gap={'0.75rem'} marginInline={'auto'}>
                                    <Stack align={'center'} gap={'0.75rem'}>
                                        <Text as={'p'}
                                        m={0}
                                        fontSize={'14px'} fontWeight={'600'} fontFamily={'Inter,Arial,sans-serif'}
                                        lineHeight={'20px'} textDecor={'none'}>
                                            Associer/Dissocier mon compte Facebook
                                        </Text>
                                        <Button aria-label="Associer/Dissocier mon compte Facebook"
                                        display={'inline-flex'} alignItems={'center'} justifyContent={'center'} gap={'0.25rem'}
                                        pos={'relative'}
                                        paddingInline={'1.5rem'} m={0}
                                        minH={'3rem'} h={'auto'} minW={'3rem'}
                                        fontSize={'16px'} fontWeight={'700'} fontFamily={'Inter,Arial,sans-serif'}
                                        whiteSpace={'nowrap'} verticalAlign={'middle'} lineHeight={'24px'} textDecor={'none'} color={'#ffffff'}
                                        bg={'transparent'}
                                        border={'#4e4c51 solid 0.0625rem'} borderRadius={'full'}
                                        outline={'transparent solid 1px'} outlineOffset={'0px'}
                                        transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                        appearance={'none'} userSelect={'none'} cursor={'pointer'} overflow={'visible'}>
                                            <FacebookIcon lineHeight={'1em'} flexShrink={0} verticalAlign={'middle'} display={'block'}/>
                                        </Button>
                                    </Stack>
                                    <Stack align={'center'} gap={'0.75rem'}>
                                        <Text as={'p'}
                                        m={0}
                                        fontSize={'14px'} fontWeight={'600'} fontFamily={'Inter,Arial,sans-serif'}
                                        lineHeight={'20px'} textDecor={'none'}>
                                            Associer/Dissocier mon compte Google
                                        </Text>
                                        <Button aria-label="Associer/Dissocier mon compte Google"
                                        display={'inline-flex'} alignItems={'center'} justifyContent={'center'} gap={'0.25rem'}
                                        pos={'relative'}
                                        paddingInline={'1.5rem'} m={0}
                                        minH={'3rem'} h={'auto'} minW={'3rem'}
                                        fontSize={'16px'} fontWeight={'700'} fontFamily={'Inter,Arial,sans-serif'}
                                        whiteSpace={'nowrap'} verticalAlign={'middle'} lineHeight={'24px'} textDecor={'none'} color={'#ffffff'}
                                        bg={'transparent'}
                                        border={'#4e4c51 solid 0.0625rem'} borderRadius={'full'}
                                        outline={'transparent solid 1px'} outlineOffset={'0px'}
                                        transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                        appearance={'none'} userSelect={'none'} cursor={'pointer'} overflow={'visible'}>
                                            <GoogleIcon lineHeight={'1em'} flexShrink={0} verticalAlign={'middle'} display={'block'}/>
                                        </Button>
                                    </Stack>
                                    <Stack align={'center'} gap={'0.75rem'}>
                                        <Text as={'p'}
                                        m={0}
                                        fontSize={'14px'} fontWeight={'600'} fontFamily={'Inter,Arial,sans-serif'}
                                        lineHeight={'20px'} textDecor={'none'}>
                                            Associer/Dissocier mon compte Apple
                                        </Text>
                                        <Button aria-label="Associer/Dissocier mon compte Apple"
                                        display={'inline-flex'} alignItems={'center'} justifyContent={'center'} gap={'0.25rem'}
                                        pos={'relative'}
                                        paddingInline={'1.5rem'} m={0}
                                        minH={'3rem'} h={'auto'} minW={'3rem'}
                                        fontSize={'16px'} fontWeight={'700'} fontFamily={'Inter,Arial,sans-serif'}
                                        whiteSpace={'nowrap'} verticalAlign={'middle'} lineHeight={'24px'} textDecor={'none'} color={'#ffffff'}
                                        bg={'transparent'}
                                        border={'#4e4c51 solid 0.0625rem'} borderRadius={'full'}
                                        outline={'transparent solid 1px'} outlineOffset={'0px'}
                                        transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                        appearance={'none'} userSelect={'none'} cursor={'pointer'} overflow={'visible'}>
                                            <AppleIcon lineHeight={'1em'} flexShrink={0} verticalAlign={'middle'} display={'block'}/>
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                            */}
                            <Box 
                            marginInline={'auto'}
                            maxW={'640px'} w={'100%'}>
                                <Heading as={'h3'}
                                fontFamily={'Inter,Arial,sans-serif'} fontWeight={'700'} fontSize={'20px'} 
                                lineHeight={'24px'} textDecor={'none'}>
                                    Informations Deezer ou D10H! visible par les internautes
                                </Heading>
                                <chakra.hr aria-orientation="horizontal"
                                mt={'0.75rem'} mb={'1rem'}
                                w={'full'}
                                opacity={'0.6'}
                                borderWidth={'0 0 1px'} borderColor={'inherit'} borderStyle={'solid'}/>
                                <Stack align={'center'} gap={'1.5rem'}
                                marginInline={'auto'}
                                w={'100%'}>
                                    <FormControl w={'100%'} pos={'relative'}>
                                        <FormLabel display={'block'}
                                        marginInlineEnd={'0.75rem'} mb={'0.75rem'}
                                        fontWeight={'500'} fontSize={'0.875rem'}
                                        textAlign={'start'} color={'#a19fa4'}
                                        transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                        opacity={1}>
                                            Je me définis comme
                                        </FormLabel>
                                        <RadioGroup>
                                            <Stack align={'center'} flexDir={'row'} gap={'1.5rem'}>

                                            </Stack>
                                        </RadioGroup>
                                    </FormControl>
                                </Stack>
                            </Box>
                            <Box 
                            marginInline={'auto'}
                            maxW={'640px'}>

                            </Box>
                        </Stack>
                    </Box>
                    <chakra.hr aria-orientation="horizontal"
                    mt={'0.75rem'} mb={'1rem'}
                    w={'full'}
                    opacity={'0.6'}
                    borderWidth={'0 0 1px'} borderColor={'inherit'} borderStyle={'solid'}/>
                    <Stack>

                    </Stack>
                </Container>
            </Flex>
        </>
    )
}

export default PageAccount