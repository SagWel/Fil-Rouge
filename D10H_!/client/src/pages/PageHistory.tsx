import { Box, Flex, Heading, Button, List, ListItem, chakra, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import type { IScore } from "../types/Score";

// SVGs import from a unique file
import { ShuffleIcon } from "../components/Svg";

// Card for each scores in the database
import ScoreCard from '../components/ScoreCard'

export interface IPageHistoryProps {}

const PageHistory: React.FC<IPageHistoryProps> = () => {
    const mockPartitons: IScore[] = [
  {
    "id": 1,
    "title": "Michelle",
    "artist": {
      "id": 101,
      "name": "The Beatles",
      "picture": "https://e-cdns-images.dzcdn.net/images/artist/072461/500x500.jpg",
      "deezer_link": "https://www.deezer.com/artist/1"
    },
    "album": {
      "id": 201,
      "title": "Rubber Soul",
      "deezer_link": "https://www.deezer.com/album/201",
      "cover": "https://e-cdns-images.dzcdn.net/images/cover/123/500x500.jpg",
      "artist": { "id": 101, "name": "The Beatles", "picture": "..." }
    },
    "genre": {
      "id": 1,
      "name": "Pop/Rock",
      "picture": "https://img.com/rock.jpg"
    },
    "difficulty": 3,
    "instruments": {
      "currentInstrument": {
        "id": "1",
        "name": "guitare",
        "imgSrc": "assets/instruments/guitar-icon.png"
      },
      "othersInstruments": [
        {
          "id": "2",
          "name": "basse",
          "imgSrc": "assets/instruments/bass-icon.png"
        },
        {
          "id": "3",
          "name": "chant",
          "imgSrc": "assets/instruments/vocals-icon.png"
        }
      ]
    },
    "bpm": 117,
    "time_signature": "4/4",
    "clef": "treble",
    "clef_signature": "Ab",
    "duration": 162,
    "deezer_link": "https://www.deezer.com/track/123",
    "audio_preview": "https://preview.dz.com/123.mp3",
    "score_preview": "https://img.com/michelle-preview.png",
    "measures": [
      {
        "id": 1,
        "notes": [
          { "keys": ["f/4"], "duration": "q" },
          { "keys": ["e/4"], "duration": "q", "accidental": "b" },
          { "keys": ["db/4"], "duration": "q" },
          { "keys": ["c/4"], "duration": "q" }
        ],
        "shortText": "Intro"
      }
    ]
  },
  {
    "id": 2,
    "title": "Fly Me To The Moon",
    "artist": {
      "id": 102,
      "name": "Frank Sinatra",
      "picture": "https://img.com/sinatra.jpg"
    },
    "genre": {
      "id": 2,
      "name": "Jazz",
      "picture": "https://img.com/jazz.jpg"
    },
    "difficulty": 4,
    "instruments": {
      "currentInstrument": {
        "id": "4",
        "name": "piano",
        "imgSrc": "assets/instruments/piano-icon.png"
      },
      "othersInstruments": [
        {
          "id": "5",
          "name": "saxo",
          "imgSrc": "assets/instruments/sax-icon.png"
        }
      ]
    },
    "bpm": 120,
    "time_signature": "4/4",
    "clef": "treble",
    "clef_signature": "C",
    "duration": 147,
    "deezer_link": "https://www.deezer.com/track/456",
    "audio_preview": "https://preview.dz.com/456.mp3",
    "score_preview": "https://img.com/flyme-preview.png",
    "measures": [
      {
        "id": 1,
        "notes": [
          { "keys": ["c/4"], "duration": "w", "lyrics": "Fly" }
        ]
      }
    ]
  }
]

    return (        
        <Box id="main"
        overflowY={"auto"} height={"100%"}>

            {/*Favoris page content header*/}
            <Box id="header-container" marginBottom={"12px"} boxShadow={"0 2px 2px"}>
                <Box id="container" padding={"24px 24px 0"} marginX={"49px"}>
                    <Box display={"flex"} gap={"2rem"}>
                        <Box alignSelf={"center"}>
                            <Heading as={"h2"} fontSize={"64px"} fontFamily={"Tahoma,Arial,sans-serif"} fontWeight={"700"}
                            marginBottom={"1.5rem"} color={"#ffffff"}>
                                Favoris
                            </Heading>
                        </Box>
                    </Box>
                    <Box marginTop={"1.5rem"} marginBottom={"2rem"}>
                        <List display={"inline-flex"} gap={"0.25rem"} listStyleType={"none"} margin={0} padding={0}>
                            <ListItem listStyleType={"none"} margin={0} padding={0}>
                                <Button type="button" aria-label="Une de Mes Partition Aléatoire"
                                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"} gap={"0.25rem"}
                                minHeight={"3rem"} minWidth={"3rem"} height={"auto"} width={"auto"}
                                paddingInlineStart={"1rem"} paddingInlineEnd={"1.5rem"} paddingY={"0.75rem"}
                                position={"relative"} 
                                appearance={"none"} userSelect={"none"}
                                outline={"transparent solid 2px"} outlineOffset={0}
                                borderRadius={"0.75rem"}
                                fontWeight={"700"} fontSize={"16px"} fontFamily={"Inter,Arial,sans-serif"} textDecoration={"none"}
                                color={"#ffffff"} background={"#ad47ff"}
                                _active={{
                                    color : "#e2dfe6",
                                    background : "#ca97ff"
                                }}
                                _focus={{
                                    zIndex : "1"
                                }}
                                _focusVisible={{
                                    boxShadow : "none",
                                    outlineColor : "#ca97ff"
                                }}
                                _hover={{
                                    color: "#f5f2f8",
                                    background: "#bb73ff"
                                }}> 
                                    <chakra.span display={"inline-flex"} alignSelf={"center"} flexShrink={0} marginInlineEnd={0}>
                                        <ShuffleIcon/>
                                    </chakra.span>
                                    <Box fontFamily={"Inter,Arial,sans-serif"}>
                                        <Flex alignItems={"center"} justifyContent={"center"}>
                                            <Link to={"/scores/:instrumentId/:morceauId"}>Une de Mes Partition Aléatoire</Link>
                                        </Flex>
                                    </Box>
                                </Button>
                            </ListItem>
                        </List>
                    </Box>
                    <chakra.nav boxShadow={"none"} marginBottom={"0"} width={"100%"}>
                        <Box padding={0} width={"100%"}>
                            <List listStyleType={"none"} margin={0} padding={0}>
                                <ListItem 
                                listStyleType={"none"} margin={0} padding={0}
                                color={"#a19fa4"} display={"inline-block"} position={"relative"} >
                                    <Box as={Link} to={"/favoris"} borderBottom={"transparent 2px solid"} paddingBottom={"16px"} backgroundColor={"transparent"}
                                    display={"block"}
                                    fontSize={"16px"} fontFamily={"Inter,Arial,sans-serif"} fontWeight={"400"}
                                    lineHeight={"24px"} textDecoration={"none"}>
                                        Vue d'ensemble
                                    </Box>
                                </ListItem>
                                <ListItem 
                                listStyleType={"none"} margin={0} padding={0}
                                color={"#a19fa4"} display={"inline-block"} position={"relative"} paddingLeft={"44px"}>
                                    <Box as={Link} to={"/favoris/scorbraries"} borderBottom={"transparent 2px solid"} paddingBottom={"16px"} backgroundColor={"transparent"}
                                    display={"block"}
                                    fontSize={"16px"} fontFamily={"Inter,Arial,sans-serif"} fontWeight={"400"}
                                    lineHeight={"24px"} textDecoration={"none"}>
                                        Scorbraries
                                    </Box>
                                </ListItem>
                                <ListItem 
                                listStyleType={"none"} margin={0} padding={0}
                                color={"#a19fa4"} display={"inline-block"} position={"relative"} paddingLeft={"44px"}>
                                    <Box as={Link} to={"/favoris/history"} borderBottom={"#ad47ff solid 2px"} color={"#ffffff"}
                                    paddingBottom={"16px"}
                                    display={"block"}
                                    fontSize={"16px"} fontFamily={"Inter,Arial,sans-serif"} fontWeight={"600"}
                                    lineHeight={"24px"} textDecoration={"none"}>
                                        Historique de partitions
                                    </Box>
                                </ListItem>
                            </List>
                        </Box>
                    </chakra.nav>
                </Box>
            </Box>

            {/*History page content*/}
            <Box position={"relative"}>
                <Box id="catalog-content">
                    <Box role="tebpanel">
                        <Box padding={"24px"} marginX={"auto"} position={"relative"}>
                            <Box>
                                <Heading as={"h2"}
                                fontFamily={"Inter,Arial,sans-serif"} fontWeight={"700"} fontSize={"20px"} 
                                lineHeight={"24px"} textDecoration={"none"} color={"#ffffff"}>
                                    Historique des partitions
                                </Heading>
                            </Box>
                        </Box>
                        <Box marginTop={"-24px"} padding={"24px"} marginX={"auto"} position={"relative"}>
                            <Grid id="historyGrid" templateColumns={"repeat(auto-fit, minmax(20rem, 1fr))"}
                            gap={"7"} justifyItems={"center"} p={"4"}
                            overflow={"visible"}
                            marginTop={"2rem"} marginBottom={"5rem"}>

                                {mockPartitons.map((score: IScore) => (
                                    <ScoreCard key={score.id} score={score} currentInstrument={score.instruments.currentInstrument.name} />
                                ))}

                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PageHistory