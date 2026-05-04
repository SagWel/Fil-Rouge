import { 
    Box, 
    useDisclosure, 
    Select, 
    ModalOverlay, 
    Container, 
    Button,
    chakra, 
    Flex, 
    Heading, 
    List, 
    ListItem, 
    Stack, 
    Text, 
    Image, 
    Input,
    FormControl, 
    FormLabel, 
    Radio, 
    RadioGroup, 
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalCloseButton, 
    ModalBody,
    InputGroup,
    InputRightElement,
    FormHelperText,
    FormErrorMessage,
    Link as ChakraLink
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { 
    AppleIcon, 
    FacebookIcon, 
    GoogleIcon, 
    DisableIcon,
    DisplayIcon,
    AddCircleIcon, 
    CameraIcon, 
    DownChevronSoftIcon, 
    PenIcon, 
    UpChevronSoftIcon, 
    AddIcon, RemoveIcon, 
    SuccesIcon, 
    ErrorIcon,
    CloseButtonIcon,
    WarningIcon
} from "../../../components/Svg"

import { useEffect, useRef, useState } from "react"

import '../../../style.css'

import { useAuth } from "../../../hooks/useAuth"
import type { GenderType } from "../../../types/user"
import type { IInstrumentLvl, IInstrument } from "../../../types/instrument"
import { difficultyLvl } from "../../../components/cards/ScoreCard"

export interface IPageAccountProps { }

export interface ILanguage {
    id: string,
    name: string
}

const PageAccount: React.FC<IPageAccountProps> = () => {

    const { user } = useAuth()

    const currentYear: number = new Date().getFullYear()

    const userProfilBirthday: Date | undefined = user?.birthday ? new Date(user.birthday) : undefined

    const userProfilBirthdayDay: number = userProfilBirthday ? userProfilBirthday.getDate() : 1
    const userProfilBirthdayMonth: number | undefined = userProfilBirthday ? userProfilBirthday.getMonth() + 1 : 1
    const userProfilBirthdayYear: number = userProfilBirthday ? userProfilBirthday.getFullYear() : user?.age !== 0 ? currentYear - user?.age : currentYear - 1

    /* Modal management */
    const { isOpen, onOpen, onClose } = useDisclosure()

    const disabled = true

    const [opacity, setOpacity] = useState<"0" | "1">("0")
    const [scale, setScale] = useState<"0" | "1">("0")
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [userGender, setUserGender] = useState<GenderType | undefined>(user?.gender)
    const [userPseudo, setUserPseudo] = useState<string | undefined>(user?.username)
    const [userInstruments, setUserInstruments] = useState<IInstrumentLvl[] | undefined>(user?.userInstruments)
    const [userBirthdayDay, setUserBirthdayDay] = useState<number>(userProfilBirthdayDay)
    const [userBirthdayMonth, setUserBirthdayMonth] = useState<number>(userProfilBirthdayMonth)
    const [userBirthdayYear, setUserBirthdayYear] = useState<number>(userProfilBirthdayYear)
    const [userLanguage, setUserLanguage] = useState<string | undefined>(user?.language)
    const [instruments, setInstruments] = useState<IInstrument[] | []>([])
    const [currentInstrument, setCurrentInstrument] = useState<IInstrument | undefined>(undefined)
    const [currentLvl, setCurrentLvl] = useState<1 | 2 | 3 | 4 | 5 | undefined>(undefined)
    // const [displayConfidentialModal, setDisplayConfidentialModal] = useState<'flex' | 'none'>('none')
    const [displayModalMailling, setDisplayModalMailling] = useState<'block' | 'none'>('none')
    const [updateMessage, setUpdateMessage] = useState<string>('')
    const [updateModal, setUpdateModal] = useState<boolean>(false)
    const [updateValidating, setUpdateValidating] = useState<boolean>(true)
    const [displayDeleteInformations, setDisplayDeleteInformations] = useState<boolean>(false)
    const [inputType, setInputType] = useState<'password' | 'text'>('password')
    const [password, setPassword] = useState<string>('')
    const [isError, setIsError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')

    const avatarDefault: string = "https://cdn-images.dzcdn.net/images/user//125x125-000000-80-0-0.jpg"

    const host = import.meta.env.VITE_HOST
    const port = import.meta.env.VITE_SERVER_PORT

    const BASE_URL = `http://${host}:${port}/D10h_server/public/`

    const fileInputRef = useRef<HTMLInputElement>(null)

    const languages: ILanguage[] = [
        {
            id: 'fr',
            name: 'Français',
        },
        {
            id: 'en',
            name: 'English'
        }
    ]

    const displayPassword = () => {
        if (inputType === 'password') setInputType('text')
        if (inputType === 'text') setInputType('password')
    }

    const handleOnClick = () => {
        if (opacity === "0" && scale === "0") {
            setOpacity('1')
            setScale('1')
        } else {
            setOpacity('0')
            setScale('0')
        }
    }

    const handleFileOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            setSelectedFile(file)

            const localUrl = URL.createObjectURL(file)
            setPreviewUrl(localUrl)
        }
    }

    const fetchInstruments = async () => {
        const urlFetchInstruments = import.meta.env.VITE_URL_FETCH_ALLINSTRUMENTS
        try {
            const res: Response = await fetch(`http://${host}:${port}${urlFetchInstruments}`, { credentials: 'include' })

            if (!res.ok) {
                throw new Error(`Erreur HTTP: ${res.status}`);
            }

            const data = await res.json()
            if (data) {
                setInstruments(data)
            }


        } catch (error) {
            console.error('Imposible de récuperer les Instruments dans la base de donnée : ', error)
        }
    }

    /* Delete instrument in list */
    const deleteInstrument = (id: number) => {
        setUserInstruments(prevItems => prevItems.filter((_, i) => i !== id))
    }

    /* Add instrument in list */
    const handleOnClickAddInstrument = (e: Event) => {
        e.preventDefault()
        if (currentInstrument && currentLvl) {
            const currentUserInstrument: IInstrumentLvl = {
                instrument: currentInstrument,
                lvl: currentLvl
            }
            setCurrentInstrument(undefined)
            setCurrentLvl(undefined)

            setUserInstruments(prevInstrumentLvl => [...prevInstrumentLvl, currentUserInstrument])
            onClose()
        }
    }

    const handleReduceLvl = (ui : IInstrumentLvl) => {
        const updateUserInstruments = userInstruments?.flatMap((userI: IInstrumentLvl) => {
            if (userI.instrument.id === ui.instrument.id) {
                if (userI.lvl === 1 && userInstruments.length > 1 && confirm("Vous allez supprimer l'instrument de votre liste. Est ce bien ce que vous voulez faire ?")) {
                    return []
                } else if (userI.lvl > 1) {
                    return [{ ...userI, lvl: userI.lvl - 1}]
                }
            }

            return [userI]
        })

        setUserInstruments(updateUserInstruments)
    }

    const handleIncreaseLvl = (ui : IInstrumentLvl) => {
        const updateUserInstruments = userInstruments?.flatMap((userI: IInstrumentLvl) => {
             if (userI.instrument.id === ui.instrument.id) {
                if (userI.lvl === 5) {
                    return [userI]
                }

                return [{ ...userI, lvl: userI.lvl + 1}]
             }

             return [userI]
        })

        setUserInstruments(updateUserInstruments)
    }

    const [daysInMonth, setDaysInMonth] = useState<number>(31)

    const handleOnClickOpenMaillingModal = () => {
        displayModalMailling === 'block' ? setDisplayModalMailling('none') : setDisplayModalMailling('block')
    }

    const handleOnCLickUpdateProfil = async () => {
        const urlfetchUpdateProfile = import.meta.env.VITE_URL_FETCH_UPDATEPROFIL
        const userBirthday = new Date(userBirthdayYear, userBirthdayMonth, userBirthdayDay)

        const formData = new FormData()
        if (user?.id) {
            formData.append('id', user.id.toString())
        }
        if (userPseudo !== user?.username) {
            formData.append('username', userPseudo ||'')
        }
        if (userGender !== user?.gender) {
            formData.append('gender', userGender || '')
        }
        if (userBirthday !== userProfilBirthday) {
            formData.append('birthday', userBirthday.toISOString().split('T')[0])
        }
        if (JSON.stringify(userInstruments) !== JSON.stringify(user?.userInstruments)) {
            formData.append('userInstruments', JSON.stringify(userInstruments));
        }
        if (selectedFile) {
            formData.append('avatar', selectedFile)
        }

        try {
            const res: Response = await fetch(`http://${host}:${port}${urlfetchUpdateProfile}${user?.id}`, {
                method: 'POST',
                body: formData,
                credentials: 'include'
            })

            if (!res.ok) {
                const errorBody = await res.json()
                
                throw errorBody;
            }

            const data = await res.json()
            setUpdateMessage(data.message)
            setUpdateValidating(data.validating)
            setUpdateModal(true)
            setTimeout(() => {
                setUpdateModal(false)
                setUpdateMessage('')
                setUpdateValidating(true)
            }, 5000)
            
        } catch (error) {
            console.error("Erreur lors de l'update du profil : ", error);
            
            setUpdateMessage(`Erreur lors de la modification de vos données : ${error.message}` )
            setUpdateValidating(false)
            setUpdateModal(true)
            setTimeout(() => {
                setUpdateModal(false)
                setUpdateMessage('')
                setUpdateValidating(true)
            }, 5000)
        }
    }

    const handleFinalDeleting = () => {
        
    }

    useEffect(() => {
        const totalDays: number = new Date(userBirthdayYear, userBirthdayMonth, 0).getDate()
        setDaysInMonth(totalDays)
        if (userBirthdayDay > totalDays) {
            setUserBirthdayDay(totalDays)
        }
    }, [userBirthdayDay, userBirthdayMonth, userBirthdayYear])

    useEffect(() => {
        fetchInstruments()
    }, [])

    return (
        <>
            {updateModal && (
                <chakra.aside 
                pos={'fixed'} left={0} right={0}
                marginInline={'auto'}
                maxW={'560px'} w={'max-content'}
                animation={'400ms ease-out 0s 1 normal both running'}
                bottom={'calc(80px + 15px)'}
                zIndex={9000}>
                    <Flex align={'center'} gap={'0.5rem'}
                    pos={'relative'}
                    p={'0.75rem'}
                    color={'#000000'}
                    bg={'#ffff'}
                    borderRadius={'0.5rem'}
                    overflow={'hidden'}>
                        <chakra.span display={'inherit'}>
                            {updateValidating ? <SuccesIcon /> : <ErrorIcon />}
                        </chakra.span>
                        <Stack>
                            <Heading
                            fontFamily={'Inter,Arial,sans-serif'} fontWeight={'500'} fontSize={'16px'}
                            lineHeight={'20px'} textDecor={'none'}>
                                {updateMessage}
                            </Heading>
                        </Stack>
                        <Flex
                        align={'center'} justifyContent={'flex-end'} gap={'0.5rem'} flexGrow={1}/>
                    </Flex>
                </chakra.aside>
            )}
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
            <Flex align={'center'} justify={'center'}
                p={"1.5rem"}
                w={'full'} h={"95%"}>
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
                        opacity={'0.1 !important'}
                        borderWidth={'0 0 1px'} borderColor={'inherit'} borderStyle={'solid'} />
                        <Stack gap={'1.5rem'}
                        marginInline={'auto'}
                        maxW={'640px'} w={"100%"}>
                            <Stack align={'center'} gap={'1.5rem'}>
                                <Box
                                borderRadius={'full'} overflow={'hidden'} flex={'0 0 auto'}>
                                    <chakra.figure role="group"
                                        display={'inline-block'}
                                        pos={'relative'}
                                        m={0}
                                        maxH={'100%'} maxW={'100%'}
                                        verticalAlign={'top'}
                                        overflow={'hidden'}
                                        borderRadius={'0.25rem'}
                                        boxShadow={'0 1px 6px #19192229'}
                                        transform={'translateZ(0)'}
                                        _hover={{
                                            boxShadow: '0 1px 6px #1919223d'
                                        }}>
                                        <Box display={'block'} pos={'relative'} bgColor={'#0000'}
                                            _after={{
                                                bg: '#000000',
                                                bottom: '0',
                                                content: '""',
                                                left: '0',
                                                opacity: '0',
                                                position: 'absolute',
                                                right: '0',
                                                top: '0',
                                                transitionDuration: '.15s',
                                                transitionProperty: 'opacity, background-color'
                                            }}
                                            _groupHover={{
                                                _after: {
                                                    opacity: '.24'
                                                }
                                            }}>
                                            <Image alt={user?.username} src={user?.avatarUrl ? `${BASE_URL}uploads/avatars/${user?.avatarUrl}` : previewUrl || avatarDefault}
                                                display={"inline-block"}
                                                h={'125px'} w={'125px'}
                                                verticalAlign={'top'}
                                                borderStyle={'none'} border={0}
                                                objectFit={'cover'} />
                                        </Box>
                                        <Input type="file" accept="image/jpeg, image/png" ref={fileInputRef}
                                        onChange={handleFileOnChange}
                                            display={'none'}
                                            m={0}
                                            lineHeight={'normal'} verticalAlign={'middle'}
                                            outline={0} />
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
                                                cursor={'pointer'}
                                                onClick={() => fileInputRef.current?.click()}
                                                _hover={{
                                                    transform: 'scale3d(1.2, 1.2, 1.2)'
                                                }}
                                                _groupHover={{
                                                    opacity: 1
                                                }}>
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
                                        {userPseudo}
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
                                    opacity={'0.1'}
                                    borderWidth={'0 0 1px'} borderColor={'inherit'} borderStyle={'solid'}
                                    boxSizing="content-box" overflow={'visible'} />
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
                                                }} />
                                            <Button aria-label="Modifier" title="Modifier"
                                                display={'inline-flex'} alignItems={'center'} justifyContent={'center'} gap={'0.25rem'}
                                                pos={'relative'}
                                                p={0} m={0}
                                                minH={'3rem'} h={'auto'} minW={'3rem'}
                                                fontSize={'16px'} fontWeight={'700'} fontFamily={'Inter,Arial,sans-serif'}
                                                whiteSpace={'nowrap'} verticalAlign={'middle'} lineHeight={'24px'} textDecor={'none'} color={'#ffffff'}
                                                bg={'transparent'}
                                                border={'#4e4c51 solid 0.0625rem'} borderRadius={'full'}
                                                outline={'transparent solid 1px'} outlineOffset={'0px'}
                                                transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                                appearance={'none'} userSelect={'none'} cursor={'pointer'} overflow={'visible'}
                                                onClick={handleOnClickOpenMaillingModal}
                                                _active={{
                                                    borderColor: '#656367',
                                                    bg: '#38373b',
                                                    color: '#e2dfe6'
                                                }}
                                                _focusVisible={{
                                                    boxShadow: 'none',
                                                    borderColor: '#ad47ff',
                                                    outlineColor: '#ad47ff'
                                                }}
                                                _hover={{
                                                    borderColor: '#59575c',
                                                    bg: '#2e2c30',
                                                    color: '#f5f2f8'
                                                }}>
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
                                                }} />
                                            <Button aria-label="Modifier" title="Modifier"
                                                display={'inline-flex'} alignItems={'center'} justifyContent={'center'} gap={'0.25rem'}
                                                pos={'relative'}
                                                m={0} p={0}
                                                minH={'3rem'} h={'auto'} minW={'3rem'}
                                                fontSize={'16px'} fontWeight={'700'} fontFamily={'Inter,Arial,sans-serif'}
                                                whiteSpace={'nowrap'} verticalAlign={'middle'} lineHeight={'24px'} textDecor={'none'} color={'#ffffff'}
                                                bg={'transparent'}
                                                border={'#4e4c51 solid 0.0625rem'} borderRadius={'full'}
                                                outline={'transparent solid 1px'} outlineOffset={'0px'}
                                                transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                                appearance={'none'} userSelect={'none'} cursor={'pointer'} overflow={'visible'}
                                                onClick={handleOnClickOpenMaillingModal}
                                                _active={{
                                                    borderColor: '#656367',
                                                    bg: '#38373b',
                                                    color: '#e2dfe6'
                                                }}
                                                _focusVisible={{
                                                    boxShadow: 'none',
                                                    borderColor: '#ad47ff',
                                                    outlineColor: '#ad47ff'
                                                }}
                                                _hover={{
                                                    borderColor: '#59575c',
                                                    bg: '#2e2c30',
                                                    color: '#f5f2f8'
                                                }}>
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
                                    opacity={'0.1'}
                                    borderWidth={'0 0 1px'} borderColor={'inherit'} borderStyle={'solid'} />
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
                                        <RadioGroup value={userGender} onChange={(e: GenderType) => setUserGender(e)}
                                            sx={{
                                                ".chakra-radio__control": {
                                                    borderColor: '#4e4c51',
                                                    borderWidth: '1px',
                                                    color: '#ffffff',
                                                    h: '20px',
                                                    w: '20px'
                                                },
                                                ".chakra-radio__control[data-checked]": {
                                                    borderColor: '#ad47ff',
                                                    borderWidth: "1px",
                                                    color: '#ad47ff',
                                                    bg: 'transparent',
                                                    h: '20px',
                                                    w: '20px'
                                                },
                                                ".chakra-radio__control[data-checked]:hover": {
                                                    borderColor: '#bb73ff',
                                                    color: '#bb73ff',
                                                    bg: 'transparent'
                                                }
                                            }}>
                                            <Stack align={'center'} flexDir={'row'} gap={'1.5rem'}>
                                                <Radio value="M" id="sexe_M"
                                                    display={'inline-flex'} alignItems={'center'}
                                                    verticalAlign={'top'} cursor={'pointer'} pos={'relative'}>
                                                    Homme
                                                </Radio>
                                                <Radio value="F" id="sexe_F"
                                                    display={'inline-flex'} alignItems={'center'}
                                                    verticalAlign={'top'} cursor={'pointer'} pos={'relative'}>
                                                    Femme
                                                </Radio>
                                                <Radio value="NB" id="sexe_NB"
                                                    display={'inline-flex'} alignItems={'center'}
                                                    verticalAlign={'top'} cursor={'pointer'} pos={'relative'}>
                                                    Non-binaire
                                                </Radio>
                                                <Radio value="Private" id="sexe_Private"
                                                    display={'inline-flex'} alignItems={'center'}
                                                    verticalAlign={'top'} cursor={'pointer'} pos={'relative'}>
                                                    Privé
                                                </Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormControl w={'100%'} pos={'relative'}>
                                        <FormLabel
                                            display={'block'}
                                            marginInlineEnd={'0.75rem'} mb={'0.75rem'}
                                            fontWeight={'500'} fontSize={'0.875rem'}
                                            textAlign={'start'} color={'#a19fa4'}
                                            transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                            opacity={1}>
                                            Pseudo
                                        </FormLabel>
                                        <Input name="blog_name" id="blog_name" type="text" value={userPseudo}
                                            pos={'relative'}
                                            paddingInlineEnd={'0.75rem'} paddingInlineStart={'1rem'} m={0}
                                            minW={0} w={'100%'} h={'3rem'} minH={'3rem'}
                                            fontSize={'16px'} fontWeight={'400'} fontFamily={'Inter,Arial,sans-serif'}
                                            color={'#ffffff'} lineHeight={'24px'} textDecor={'none'} verticalAlign={'middle'}
                                            bg={'#242326'}
                                            border={'transparent, solid 0.125rem'} borderRadius={'0.5rem'}
                                            outline={'transparent solid 2px'} outlineOffset={'2px'}
                                            transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                            appearance={'none'} boxSizing="border-box"
                                            onChange={(e) => setUserPseudo(e.target.value)}
                                            _active={{
                                                borderColor: '#ad47ff'
                                            }}
                                            _focus={{
                                                borderColor: '#ad47ff'
                                            }}
                                            _hover={{
                                                bgColor: '#2e2c30',
                                                color: '#f5f2f8'
                                            }} />
                                    </FormControl>
                                    <FormControl w={'100%'} pos={'relative'}>
                                        <FormLabel
                                            display={'block'}
                                            marginInlineEnd={'0.75rem'} mb={'0.75rem'}
                                            fontWeight={'500'} fontSize={'0.875rem'}
                                            textAlign={'start'} color={'#a19fa4'}
                                            transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                            opacity={1}>
                                            Mes instruments
                                        </FormLabel>
                                        <Stack alignItems={"center"} gap={"1rem"}
                                            position={"relative"}
                                            paddingInlineStart={"1rem"} paddingInlineEnd={"0.75rem"} py={"0.75rem"}
                                            w={"100%"} h={"fit-content"} minW={"0"} minH={"3rem"}
                                            fontSize={"16px"} fontWeight={"400"} fontFamily={"Inter,Arial,sans-serif"}
                                            color={"#ffffff"} lineHeight={"24px"} textDecor={"none"}
                                            bg={"#242326"}
                                            borderRadius={"0.5rem"} borderColor={"transparent"} borderWidth={"0.125rem"} borderStyle={"solid"}
                                            outline={"transparent solid 2px"} outlineOffset={"2px"}
                                            transitionDuration={"200ms"} transitionProperty={"background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform"}
                                            appearance={"none"}>
                                            {userInstruments?.map((ui: IInstrumentLvl, index) => (
                                                <Flex key={index} w={"100%"} bg={"#4d4c50"} justifyContent={"space-between"} alignItems={"center"} ps={"1rem"} borderRadius={"0.375rem"}>
                                                    <Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"} minH={'2rem'}>
                                                        <Flex w={"50%"} justifyContent={"space-between"}>
                                                            <Text fontSize={"20px"}>{ui.instrument.name.toUpperCase()}</Text>
                                                            <Text fontSize={"24px"}>{"==>"}</Text>
                                                        </Flex>
                                                        <Flex flexDir={"row"} justifyContent={"center"} w={"50%"} alignItems={"center"} pos={'relative'}>
                                                            {difficultyLvl(ui.lvl)}
                                                            {user?.userInstruments.some(userI => userI.instrument === ui.instrument) &&
                                                                <Flex position={'absolute'} right={0} gap={1} mr={1}>
                                                                    <Button isDisabled={userInstruments.length === 1 && ui.lvl === 1}
                                                                        p={0}
                                                                        h={'1.75rem'} w={'1.75rem'} minH={'1.75rem'} minW={'1.75rem'}
                                                                        bg={'transparent'}
                                                                        borderRadius={'full'}
                                                                        onClick={(e) => {
                                                                            e.preventDefault()
                                                                            handleReduceLvl(ui)
                                                                        }}
                                                                        _hover={{
                                                                            bg: '#a19fa4'
                                                                        }}>
                                                                        <RemoveIcon />
                                                                    </Button>
                                                                    <Button isDisabled={ui.lvl === 5}
                                                                        p={0}
                                                                        h={'1.75rem'} w={'1.75rem'} minH={'1.75rem'} minW={'1.75rem'}
                                                                        bg={'transparent'}
                                                                        borderRadius={'full'}
                                                                        onClick={(e) => {
                                                                            e.preventDefault()
                                                                            handleIncreaseLvl(ui)
                                                                        }}
                                                                        _hover={{
                                                                            bg: '#a19fa4'
                                                                        }}>
                                                                        <AddIcon size="20px" />
                                                                    </Button>
                                                                </Flex>
                                                            }
                                                        </Flex>
                                                    </Flex>
                                                    {(userInstruments.length > 1 && !user?.userInstruments.some(userI => userI.instrument === ui.instrument)) &&
                                                        <Button
                                                            bg={"transparent"} p={0} pos={'absolute'} right={0} mr={3} minH={'2rem'} h={'2rem'} minW={'2rem'} w={'2rem'}
                                                            onClick={() => deleteInstrument(index)}
                                                            _hover={{
                                                                bg: "#434344"
                                                            }}
                                                            _active={{
                                                                borderColor: "#ad47ff",
                                                                bg: "#434344"
                                                            }}
                                                            _focus={{
                                                                borderColor: "#ad47ff"
                                                            }}
                                                            _focusVisible={{
                                                                boxShadow: "0 0 0 3px #ad47ff"
                                                            }}>
                                                            <DisableIcon />
                                                        </Button>
                                                    }
                                                </Flex>
                                            ))}
                                            <Flex as={Button} w={"100%"} bg={"#4d4c50"} justifyContent={"center"} alignItems={"center"}
                                                onClick={onOpen}
                                                _hover={{
                                                    bg: "#434344"
                                                }}
                                                _active={{
                                                    borderColor: "#ad47ff",
                                                    bg: "#434344"
                                                }}
                                                _focus={{
                                                    borderColor: "#ad47ff"
                                                }}
                                                _focusVisible={{
                                                    boxShadow: "0 0 0 3px #ad47ff"
                                                }}>
                                                <AddCircleIcon />
                                            </Flex>
                                        </Stack>
                                    </FormControl>
                                </Stack>
                            </Box>
                            <Box
                                marginInline={'auto'}
                                maxW={'640px'} w={"100%"}>
                                <Heading as={'h3'}
                                    fontFamily={'Inter,Arial,sans-serif'} fontWeight={'700'} fontSize={'20px'}
                                    lineHeight={'24px'} textDecor={'none'}>
                                    Informations privées
                                </Heading>
                                <chakra.hr aria-orientation="horizontal"
                                    mt={'0.75rem'} mb={'1rem'}
                                    w={'full'}
                                    opacity={'0.1 !important'}
                                    borderWidth={'0 0 1px'} borderColor={'inherit'} borderStyle={'solid'} />
                                <Stack align={'center'} gap={'1.5rem'} marginInline={'auto'} w={'100%'}>
                                    <Flex gap={'0.75rem'}>
                                        <Button disabled title="en cour de programmation"
                                            display={'inline-flex'} alignItems={'center'} justifyContent={'center'} gap={'0.25rem'}
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
                                            // onClick={() => setDisplayConfidentialModal('flex')}
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
                                            <span>Paramètre de confidentialité</span>
                                        </Button>
                                        <Button disabled title="en cour de programmation"
                                            display={'inline-flex'} alignItems={'center'} justifyContent={'center'} gap={'0.25rem'}
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
                                            <span>Mes données personnelles</span>
                                        </Button>
                                    </Flex>
                                    <Stack align={'center'} flexDir={'row'} gap={'0.5rem'} w={'100%'}>
                                        <FormControl w={"100%"}>
                                            <FormLabel htmlFor="birthday-day"
                                                display={'block'}
                                                marginInlineEnd={'0.75rem'} mb={'0.75rem'}
                                                fontWeight={'500'} fontSize={'0.875rem'}
                                                textAlign={'start'} color={'#a19fa4'}
                                                transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                                opacity={1}>
                                                Date de naissance
                                            </FormLabel>
                                            <Stack align={'center'} flexDir={'row'} gap={'0.5rem'} w={'100%'}>
                                                <Select id="birthday-day" value={userBirthdayDay}
                                                    pos={'relative'} verticalAlign={'middle'}
                                                    m={0}
                                                    minW={'0px'} w={'100%'} h={'3rem'} minH={'3rem'}
                                                    fontSize={'16px'} fontWeight={'400'} fontFamily={'Inter,Arial,sans-serif'}
                                                    color={'#ffffff'} lineHeight={'24px'} textDecor={'none'}
                                                    bg={'#242326'}
                                                    border={'transparent 0.125rem solid'} borderRadius={'0.5rem'}
                                                    outline={'transparent solid 2px'} outlineOffset={'2px'}
                                                    appearance={'none'} boxSizing="border-box"
                                                    transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                                    onChange={(e) => setUserBirthdayDay(Number(e.target.value))}
                                                    sx={{
                                                        "> option": { bg: "#242326" }
                                                    }}
                                                    _active={{
                                                        borderColor: '#ad47ff'
                                                    }}
                                                    _focus={{
                                                        borderColor: '#ad47ff'
                                                    }}
                                                    _focusVisible={{
                                                        borderColor: '#ad47ff'
                                                    }}
                                                    _hover={{
                                                        bgColor: '#2e2c30',
                                                        color: '#f5f2f8'
                                                    }}>
                                                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d: number) => (
                                                        <option key={d} value={d}>{d}</option>
                                                    ))}
                                                </Select>
                                                <Select id="birthday-month" value={userBirthdayMonth}
                                                    pos={'relative'} verticalAlign={'middle'}
                                                    m={0}
                                                    minW={'0px'} w={'100%'} h={'3rem'} minH={'3rem'}
                                                    fontSize={'16px'} fontWeight={'400'} fontFamily={'Inter,Arial,sans-serif'}
                                                    color={'#ffffff'} lineHeight={'24px'} textDecor={'none'}
                                                    bg={'#242326'}
                                                    border={'transparent 0.125rem solid'} borderRadius={'0.5rem'}
                                                    outline={'transparent solid 2px'} outlineOffset={'2px'}
                                                    appearance={'none'} boxSizing="border-box"
                                                    transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                                    onChange={(e) => setUserBirthdayMonth(Number(e.target.value))}
                                                    sx={{
                                                        "> option": { bg: "#242326" }
                                                    }}
                                                    _active={{
                                                        borderColor: '#ad47ff'
                                                    }}
                                                    _focus={{
                                                        borderColor: '#ad47ff'
                                                    }}
                                                    _focusVisible={{
                                                        borderColor: '#ad47ff'
                                                    }}
                                                    _hover={{
                                                        bgColor: '#2e2c30',
                                                        color: '#f5f2f8'
                                                    }}>
                                                    {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                                                        <option key={m} value={m - 1}>{m - 1}</option>
                                                    ))}
                                                </Select>
                                                <Select id="birthday-year" value={userBirthdayYear}
                                                    pos={'relative'} verticalAlign={'middle'}
                                                    m={0}
                                                    minW={'0px'} w={'100%'} h={'3rem'} minH={'3rem'}
                                                    fontSize={'16px'} fontWeight={'400'} fontFamily={'Inter,Arial,sans-serif'}
                                                    color={'#ffffff'} lineHeight={'24px'} textDecor={'none'}
                                                    bg={'#242326'}
                                                    border={'transparent 0.125rem solid'} borderRadius={'0.5rem'}
                                                    outline={'transparent solid 2px'} outlineOffset={'2px'}
                                                    appearance={'none'} boxSizing="border-box"
                                                    transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                                    onChange={(e) => setUserBirthdayYear(Number(e.target.value))}
                                                    sx={{
                                                        "> option": { bg: "#242326" }
                                                    }}
                                                    _active={{
                                                        borderColor: '#ad47ff'
                                                    }}
                                                    _focus={{
                                                        borderColor: '#ad47ff'
                                                    }}
                                                    _focusVisible={{
                                                        borderColor: '#ad47ff'
                                                    }}
                                                    _hover={{
                                                        bgColor: '#2e2c30',
                                                        color: '#f5f2f8'
                                                    }}>
                                                    {Array.from({ length: currentYear - 1900 }, (_, i) => 1900 + i).map(y => (
                                                        <option key={y} value={y}>{y}</option>
                                                    ))}
                                                </Select>
                                            </Stack>
                                        </FormControl>
                                    </Stack>
                                    <FormControl w={'100%'} pos={'relative'}>
                                        <FormLabel htmlFor="language"
                                            display={'block'}
                                            marginInlineEnd={'0.75rem'} mb={'0.75rem'}
                                            fontWeight={'500'} fontSize={'0.875rem'}
                                            textAlign={'start'} color={'#a19fa4'}
                                            transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                            opacity={1}>
                                            Langue
                                        </FormLabel>
                                        <Select id="language" value={userLanguage}
                                            pos={'relative'} verticalAlign={'middle'}
                                            m={0}
                                            minW={'0px'} w={'100%'} h={'3rem'} minH={'3rem'}
                                            fontSize={'16px'} fontWeight={'400'} fontFamily={'Inter,Arial,sans-serif'}
                                            color={'#ffffff'} lineHeight={'24px'} textDecor={'none'}
                                            bg={'#242326'}
                                            border={'transparent 0.125rem solid'} borderRadius={'0.5rem'}
                                            outline={'transparent solid 2px'} outlineOffset={'2px'}
                                            appearance={'none'} boxSizing="border-box"
                                            transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                            onChange={(e) => setUserLanguage(e.target.value)}
                                            sx={{
                                                "> option": { bg: "#242326" }
                                            }}
                                            _active={{
                                                borderColor: '#ad47ff'
                                            }}
                                            _focus={{
                                                borderColor: '#ad47ff'
                                            }}
                                            _focusVisible={{
                                                borderColor: '#ad47ff'
                                            }}
                                            _hover={{
                                                bgColor: '#2e2c30',
                                                color: '#f5f2f8'
                                            }}>
                                            {languages.map((l: ILanguage) => (
                                                <option key={l.id} value={l.id}>{l.name}</option>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <Box>
                                        <Button
                                        display={'inline-flex'} alignItems={'center'} justifyContent={'center'} gap={'0.25rem'}
                                        pos={'relative'} verticalAlign={'middle'}
                                        paddingInline={'1.5rem'} py={'0.75rem'}
                                        minH={'3rem'} minW={'3rem'} h={'auto'}
                                        fontSize={'16px'} fontWeight={'700'}
                                        whiteSpace={'nowrap'} lineHeight={'24px'} fontFamily={'Inter,Arial,sans-serif'} textDecor={'none'} color={'#ffffff'}
                                        bg={'#ad47ff'}
                                        borderRadius={'0.75rem'}
                                        outline={'transparent solid 2px'} outlineOffset={'0px'}
                                        transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                        appearance={'none'} userSelect={'none'} cursor={'pointer'}
                                        onClick={handleOnCLickUpdateProfil}
                                        _active={{
                                            color: '#e2dfe6',
                                            bg: '#ca97ff'
                                        }}
                                        _focusVisible={{
                                            boxShadow: 'none',
                                            outlineColor: '#f5f2f8'
                                        }}
                                        _hover={{
                                            color: '#f5f2f8',
                                            bg: '#bb73ff'
                                        }}>
                                            <span>Enregistrer</span>
                                        </Button>
                                    </Box>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                    <chakra.hr aria-orientation="horizontal"
                        mt={'0.75rem'} mb={'1rem'}
                        w={'full'}
                        opacity={'0.2'}
                        borderWidth={'0 0 1px'} borderColor={'inherit'} borderStyle={'solid'} />
                    <Stack alignItems={'flex-start'} gap={'1.5rem'} w={'100%'}>
                        {displayDeleteInformations && 
                            <Stack align={'flex-start'} gap={'1rem'} w={'100%'}>
                                <Heading as={'h2'}
                                fontFamily={'Inter,Arial,sans-serif'} fontWeight={'700'} fontSize={'20px'}
                                lineHeight={"24px"} textDecor={'none'}>
                                    Es-tu sûr·e de vouloir supprimer ton compte&nbsp;?
                                </Heading>
                                <Stack align={'flex-start'} gap={'0.5rem'} w={'100%'}>
                                    <Text as={'p'} m={0}>
                                        Pour confirmer la suppression de ton compte, merci d'entrer ton mot de passe ci-dessous. Tu vas recevoir un email de validation finale de ta demande.
                                    </Text>
                                    <Text as={'p'} m={0}>
                                        Vérifie que l'adresse email de ton compte ci-dessus est valide, sinon ton compte ne pourra pas être supprimé.
                                    </Text>
                                    <Text as={'p'} m={0}>
                                        La suppression de ton compte entraînera la perte définitive de toutes tes Scorbraries et artistes favoris.
                                    </Text>
                                </Stack>
                                <Box w={'100%'}>
                                    <FormControl w={'100%'} pos={'relative'}>
                                        <FormLabel 
                                        display={'block'}
                                        marginInlineEnd={'0.75rem'} mb={'0.5rem'}
                                        fontWeight={'500'} fontSize={'0.875rem'}
                                        textAlign={'start'} color={'#a19fa4'}
                                        transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                        opacity={1} cursor={'pointer'}>
                                            Mot de passe&nbsp;:
                                        </FormLabel>
                                        <InputGroup 
                                        pos={'relative'}
                                        display={'flex'}
                                        w={'100%'}
                                        isolation={'isolate'}>
                                            <Input id="password" type={inputType} value={password}
                                            pos={'relative'}
                                            paddingInlineEnd={'0.75rem'} paddingInlineStart={'1rem'} m={0}
                                            minW={0} w={'100%'} h={'3rem'} minH={'3rem'}
                                            fontSize={'16px'} fontWeight={'400'} fontFamily={'Inter,Arial,sans-serif'}
                                            color={'#ffffff'} lineHeight={'24px'} textDecor={'none'} verticalAlign={'middle'}
                                            bg={'#242326'}
                                            border={'transparent, solid 0.125rem'} borderRadius={'0.5rem'}
                                            outline={'transparent solid 2px'} outlineOffset={'2px'}
                                            transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                            appearance={'none'} boxSizing="border-box"
                                            onChange={(e) => setPassword(e.target.value)}
                                            _active={{
                                                borderColor: '#ad47ff'
                                            }}
                                            _focus={{
                                                borderColor: '#ad47ff'
                                            }}
                                            _hover={{
                                                bgColor: '#2e2c30',
                                                color: '#f5f2f8'
                                            }} />
                                            <InputRightElement display={"flex"} alignItems={"center"} justifyContent={"center"}
                                            position={"absolute"} right={0} top={0}
                                            marginInlineStart={"1rem"} marginInlineEnd={"0.75rem"}
                                            w={"1.5rem"} h={"3rem"}
                                            fontSize={"16px"}
                                            zIndex={"2"}>
                                                <Button display={"inline-flex"} alignItems={"center"} justifyContent={"center"} gap={"0.25rem"}
                                                whiteSpace={"nowrap"}
                                                pos={"relative"}
                                                paddingInline={0} py={0} p={0}
                                                minH={"3rem"} minW={"3rem"} h={"auto"}
                                                fontWeight={"700"} fontSize={"16px"} fontFamily={"Inter,Arial,sans-serif"} 
                                                verticalAlign={"middle"} lineHeight={"24px"} textDecor={"none"}
                                                bg={"transparent"}
                                                borderRadius={"0.75rem"}
                                                outline={"transparent solid 2px"} outlineOffset={0}
                                                transitionDuration={"200ms"} transitionProperty={"background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform"}
                                                userSelect={"none"}
                                                onClick={displayPassword}
                                                _focusVisible={{ boxShadow: "none"}}
                                                _hover={{bg: "transparent"}}>
                                                    <DisplayIcon display={"block"} size="20px"
                                                    lineHeight={"1rem"} flexShrink={0} verticalAlign={"middle"}
                                                    mb={"1px"}/>
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                        <FormHelperText as={ChakraLink} role="button"
                                        display={'block'}
                                        mt={"0.75rem"}
                                        fontSize={"0.875rem"}
                                        lineHeight={"normal"} color={"#a19fa4"} textDecor={"inherit"}
                                        bg={"transparent"}
                                        _focusVisible={{ outlineColor: "#ad47ff"}}
                                        _hover={{textDecor: "none"}}>
                                            Mot de passe oublié?
                                        </FormHelperText>
                                        {isError && (
                                            <FormErrorMessage display={"flex"} alignItems={"center"}
                                            mt={"0.5rem"}
                                            fontSize={"0.875rem"}
                                            lineHeight={"normal"} textAlign={"start"}
                                            color={"#E53E3E"}>
                                                <WarningIcon lineHeight={"1em"} flexShrink={0} verticalAlign={"middle"}
                                                mr={"0.5rem"} color="#E53E3E" display={"block"}/>
                                                {message}
                                            </FormErrorMessage>
                                        )}
                                    </FormControl>
                                </Box>
                            </Stack>
                        }
                        <Button
                            display={'inline-flex'} alignItems={'center'} justifyContent={'center'} gap={'0.25rem'}
                            pos={'relative'} verticalAlign={'middle'}
                            paddingInline={'1.5rem'} py={'0.75rem'}
                            minH={'3rem'} minW={'3rem'} h={'auto'}
                            fontSize={'16px'} fontWeight={'700'}
                            whiteSpace={'nowrap'} lineHeight={'24px'} fontFamily={'Inter,Arial,sans-serif'} textDecor={'none'} color={'#ffffff'}
                            bg={'transparent'}
                            borderRadius={'0.75rem'} border={'#4e4c51 solid 0.0625rem'}
                            outline={'transparent solid 2px'} outlineOffset={'0px'}
                            transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                            appearance={'none'} userSelect={'none'} cursor={'pointer'}
                            onClick={(e) => {
                                e.preventDefault()
                                if (displayDeleteInformations) {
                                    if (password === '') {
                                        setIsError(true)
                                        setMessage('Le champ ne doit pas être vide')
                                    }
                                    setIsError(false)
                                    setMessage('')
                                    handleFinalDeleting()
                                } else {
                                    setDisplayDeleteInformations(true)
                                }
                            }}
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
                            <span>Supprimer mon compte</span>
                        </Button>
                    </Stack>
                </Container>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay background={"rgba(0, 0, 0, 0.48)"}
                    style={{
                        opacity: "1"
                    }} />
                <ModalContent
                    p={".75rem"}
                    maxW={'600px'} h={"fit-content"}
                    bg={"#242326"}
                    borderRadius={"0.5rem"} gap={'1rem'}
                    boxShadow={"rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,rgba(0, 0, 0, 0.2) 0px 5px 10px,rgba(0, 0, 0, 0.4) 0px 15px 40px"}
                    style={{
                        opacity: 1,
                        transform: "none"
                    }}>
                    <ModalHeader
                        paddingInlineStart={"1rem"} paddingInlineEnd={"0.75rem"} padding={"1.5rem"}
                        borderBottom={"1px solid #38373b"} textAlign={'center'}
                        margin={0}>
                        <Heading
                            fontWeight={"700"} lineHeight={"24px"} fontFamily={"Inter,Arial,sans-serif"}
                            textDecoration={"none"} color={"#ffffff"} size={'lg'}>
                            Ajouter un instrument
                        </Heading>
                        <ModalCloseButton color={'#ffffff'} flexShrink={0}
                            pos={'absolute'} top={0} right={0}
                            mt={'3px'} mr={'3px'}
                            w={'24px'} h={"24px"}
                            onClick={onClose} />
                    </ModalHeader>
                    <ModalBody display={'flex'} flexDir={'column'} gap={'1rem'}
                        w={'100%'}>
                        <Flex>
                            <Select name="instrument" id="identity" value={currentInstrument?.id ?? ""} placeholder="Selectionner un instrument" required
                                pos={"relative"} textTransform={"capitalize"}
                                pb={"1px"} mr={'1px'}
                                w={"50%"} h={"3rem"} minW={0} minH={"3rem"}
                                fontSize={"16px"} fontWeight={"400"} fontFamily={"Inter,Arial,sans-serif"}
                                lineHeight={"24px"} color={"#ffffff"} textDecor={"none"}
                                bg={"#4d4c50"}
                                borderRadius={"0.5rem"} border={"transparent solid 0.125rem"}
                                outline={"transparent solid 2px"} outlineOffset={"none"}
                                transitionDuration={"200ms"} transitionProperty={"background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform"}
                                appearance={"none"}
                                onChange={(e) => setCurrentInstrument(instruments.find((i) => i.id == Number(e.target.value)))}
                                sx={{
                                    paddingInlineStart: "1rem",
                                    paddingInlineEnd: "2rem",
                                    "> option": { bg: "#4e4c51" }
                                }}
                                _placeholder={{ color: "#5D6E73" }}
                                _active={{
                                    borderColor: "#ad47ff"
                                }}
                                _focus={{
                                    borderColor: "#ad47ff"
                                }}
                                _hover={{
                                    bg: "#5e5d5f",
                                    color: "#f5f2f8"
                                }}>
                                {Array.isArray(instruments) &&
                                    instruments.filter(i => !userInstruments.some(ui => ui.instrument.id === i.id)).map((i, index) => (
                                        <chakra.option textTransform={"capitalize"} value={i.id} key={index}>{i.name}</chakra.option>
                                    )
                                    )}
                            </Select>
                            <Select name="lvl" id="lvl" value={currentLvl ?? ""} placeholder="Niveau exercé" required
                                pos={"relative"}
                                pb={"1px"}
                                w={"50%"} h={"3rem"} minW={0} minH={"3rem"}
                                fontSize={"16px"} fontWeight={"400"} fontFamily={"Inter,Arial,sans-serif"}
                                lineHeight={"24px"} color={"#ffffff"} textDecor={"none"}
                                bg={"#4d4c50"}
                                borderRadius={"0.5rem"} border={"transparent solid 0.125rem"}
                                outline={"transparent solid 2px"} outlineOffset={"none"}
                                transitionDuration={"200ms"} transitionProperty={"background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform"}
                                appearance={"none"}
                                onChange={(e) => setCurrentLvl((Number(e.target.value) as 1 | 2 | 3 | 4 | 5))}
                                sx={{
                                    paddingInlineStart: "1rem",
                                    paddingInlineEnd: "2rem",
                                    "> option": { bg: "#4e4c51" }
                                }}
                                _placeholder={{ color: "#5D6E73" }}
                                _active={{
                                    borderColor: "#ad47ff"
                                }}
                                _focus={{
                                    borderColor: "#ad47ff"
                                }}
                                _hover={{
                                    bg: "#5e5d5f",
                                    color: "#f5f2f8"
                                }}>
                                <option value={1}>Niveau 1 (Débutant)</option>
                                <option value={2}>Niveau 2</option>
                                <option value={3}>Niveau 3 (Intermédiaire)</option>
                                <option value={4}>Niveau 4</option>
                                <option value={5}>Niveau 5 (Expert)</option>
                            </Select>
                        </Flex>
                        <Flex justifyContent={"center"} alignItems={"center"}>
                            <Button px={"4rem"} bg={"#4d4c50"} color={"#ffffff"}
                                onClick={handleOnClickAddInstrument}
                                isDisabled={!currentInstrument || !currentLvl}
                                _focusVisible={{
                                    boxShadow: "0 0 0 3px #ad47ff"
                                }}
                                _active={{
                                    borderColor: "#ad47ff"
                                }}
                                _focus={{
                                    borderColor: "#ad47ff"
                                }}
                                _hover={{
                                    bg: "#5e5d5f",
                                    color: "#f5f2f8"
                                }}>
                                Ajouter
                            </Button>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
            {/* <Flex display={displayConfidentialModal} align={'center'} justify={'center'}
            left={0} pos={'fixed'} top={0}
            mt={0}
            h={'100%'} w={'100%'}
            bg={'rgba(0, 0, 0, 0.6)'}
            boxSizing="border-box" zIndex={'2200'}>
                <Stack
                pos={'relative'}
                maxW={'800px'} maxH={'100%'} w={'100%'}
                bg={'#1b191f'}
                borderRadius={'3px'}
                boxShadow={'0 4px 44px rgba(0, 0, 0, 0.45'} boxSizing="border-box"
                zIndex={'2200'}>
                    <Text as={'p'}
                    p={'30px 20px 5px 0'} m={'0 20px'}
                    fontSize={'1rem'} fontWeight={'700'} fontFamily={"'Inter', 'Arial', sans-serif"}
                    color={'#fdfbff'} lineHeight={'1.5'}>
                        Nous valorisons la protection de tes données
                    </Text>
                </Stack>
            </Flex> */}
            <Box display={displayModalMailling}>
                <Box
                pos={'fixed'} left={0} top={0}
                width={'100vw'} h={'100vh'} bg={'rgba(0, 0, 0, 0.48)'}
                opacity={1} zIndex={'4000'}/>
                    <Flex justify={'center'} align={'center'}
                    pos={'fixed'} left={0} top={0}
                    w={'100vw'} h={'100dvh'}
                    zIndex={'4000'} overflow={'auto'} overscrollBehaviorY={'none'}
                    onClick={handleOnClickOpenMaillingModal}>
                        <chakra.section display={'flex'} flexDir={'column'}
                        pos={'relative'}
                        pb={'1rem'} pt={'0.25rem'} m={"auto"}
                        w={'100%'} maxW={'32rem'}
                        bg={'#141216'}
                        borderRadius={'0.5rem'}
                        outline={'transparent solid 2px'} outlineOffset={'2px'}
                        boxShadow={'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,rgba(0, 0, 0, 0.2) 0px 5px 10px,rgba(0, 0, 0, 0.4) 0px 15px 40px'}
                        opacity={1} zIndex={'4000'}
                        transform={'none'}>
                            <Button aria-label="Close"
                            display={'flex'} alignItems={'center'} justifyContent={'center'} flexShrink={0}
                            pos={'absolute'} top={'0.5rem'} right={'0.75rem'} verticalAlign={'middle'}
                            p={0} m={0}
                            w={'40px'} h={'40px'}
                            fontSize={'16px'}
                            lineHeight={'normal'}
                            bg={'transparent'}
                            borderRadius={'16rem'}
                            border={0}
                            transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                            transform={'perspective(1000px) translateZ(0px)'}
                            outline={'transparent solid 2px'} outlineOffset={'2px'}
                            cursor={'pointer'} appearance={'auto'} overflow={'visible'}
                            onClick={() => setDisplayModalMailling('none')}
                            _active={{
                                bg: 'rgba(255, 255, 255, 0.08)',
                                transform: 'perspective(1000px) translateZ(-50px)'
                            }}
                            _focus={{
                                boxShadow: 'none'
                            }}
                            _hover={{
                                bg: 'rgba(255, 255, 255, 0.06)'
                            }}>
                                <CloseButtonIcon />
                            </Button>
                            <chakra.header display={'flex'} flex={'0 1 0%'} justifyContent={'space-between'}
                            paddingInlineStart={'1rem'} paddingInlineEnd={'0.75rem'} py={'1rem'}
                            h={'3rem'}
                            fontSize={'18px'} fontWeight={'700'} fontFamily={'Inter,Arial,sans-serif'}
                            textAlign={'left'} lineHeight={'24px'} textDecor={'none'}>
                                Confirmer ton identité
                            </chakra.header>
                            <Box flex={'1 1 0%'}
                            p={'1rem'}
                            w={'100%'}
                            fontSize={'14px'} fontWeight={'400'} fontFamily={'Inter,Arial,sans-serif'}
                            lineHeight={'20px'} textAlign={'left'} textDecor={'none'}>
                                <Stack align={'center'} gap={'0.5rem'}>
                                    <Text as={'p'}
                                    m={0}
                                    fontSize={'14px'} fontWeight={'600'} fontFamily={'Inter,Arial,sans-serif'}
                                    lineHeight={'20px'} textDecor={'none'}>
                                        Pour des raisons de sécurité, nous allons t'envoyer un code de vérification à&nbsp;:&nbsp;
                                        <chakra.span display={'inline-block'} color={'#bb73ff'}>
                                            {user?.email}
                                        </chakra.span>
                                    </Text>
                                    <Text as={'p'}
                                    m={0}
                                    fontSize={'14px'} fontWeight={'600'} fontFamily={'Inter,Arial,sans-serif'}
                                    lineHeight={'20px'} textDecor={'none'}>
                                        Si tu n'as plus accès à cette adresse email, merci de contacter le service client&nbsp;
                                        <chakra.a target="_blank"
                                        bg={'transparent'} 
                                        color={'inherit'} textDecor={'inherit'} 
                                        cursor={'pointer'}
                                        outline={'0 none'}>
                                            D10h Support
                                        </chakra.a>
                                        .
                                    </Text>
                                </Stack>
                            </Box>
                            <chakra.footer display={'flex'} alignItems={'flex-start'} justifyContent={'flex-end'}
                            px={''} paddingInline={'1.5rem'} py={'1rem'}>
                                <Stack align={'center'} justify={'center'} flexFlow={'wrap-reverse'} gap={'1rem'}
                                w={"100%"}>
                                    <Button
                                    display={'inline-flex'} alignItems={'center'} justifyContent={'center'} gap={'0.25rem'}
                                    pos={'relative'} verticalAlign={'middle'}
                                    paddingInline={'1.5rem'} py={'0.75rem'}
                                    minH={'3rem'} minW={'3rem'} h={'auto'}
                                    fontSize={'16px'} fontWeight={'700'}
                                    whiteSpace={'nowrap'} lineHeight={'24px'} fontFamily={'Inter,Arial,sans-serif'} textDecor={'none'} color={'#ffffff'}
                                    bg={'#ad47ff'}
                                    borderRadius={'0.75rem'}
                                    outline={'transparent solid 2px'} outlineOffset={'0px'}
                                    transitionDuration={'200ms'} transitionProperty={'background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform'}
                                    appearance={'none'} userSelect={'none'} cursor={'pointer'}
                                    _active={{
                                        color: '#e2dfe6',
                                        bg: '#ca97ff'
                                    }}
                                    _focusVisible={{
                                        boxShadow: 'none',
                                        outlineColor: '#f5f2f8'
                                    }}
                                    _hover={{
                                        color: '#f5f2f8',
                                        bg: '#bb73ff'
                                    }}>
                                    <span>Envoyer le code</span>
                                </Button>
                                </Stack>
                            </chakra.footer>
                        </chakra.section>
                    </Flex>
            </Box>
        </>
    )
}

export default PageAccount