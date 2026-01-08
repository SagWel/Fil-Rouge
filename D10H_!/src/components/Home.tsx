import { Box, Button, Flex, Heading } from "@chakra-ui/react"

import PartitionCard from "./PartitionCard";
import { IPartitions } from "../types/partitions";

// Pictures import as modules
import PartitionImg from '../../public/img/Partition.jpeg';

// SVGs import from a unique file
import { LeftCarouselIcon, RightCarouselIcon } from './svg'

/*Mock database*/
const mockPartitons: IPartitions[] = [
    {
        title : "Zombie",
        artist : "The Cranberries",
        difficulty : 1,
        instrument : "guitare",
        preview : PartitionImg,
        audioPreviewUrl : "https://fake_url.com",
        id : "1",
    },
    {
        title : "Smells Like Teen Spirit",
        artist : "Nirvanna",
        difficulty : 2,
        instrument : "guitare",
        preview : PartitionImg,
        audioPreviewUrl : "https://fake_url.com",
        id : "2",
    },
    {
        title : "Comme Des Connards",
        artist : "Mickael Youn",
        difficulty : 2,
        preview : PartitionImg,
        audioPreviewUrl : "https://fake_url.com",
        id : "3",
    },
    {
        title : "Still Waiting",
        artist : "Sum 41",
        difficulty : 4,
        preview : PartitionImg,
        audioPreviewUrl : "https://fake_url.com",
        id : "4",
    },
    {
        title : "Pretty Fly (For A White Guy)",
        artist : "The Offspring",
        difficulty : 3,
        preview : PartitionImg,
        audioPreviewUrl : "https://fake_url.com",
        id : "5",
    }
]

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
    return(
        <Box className="channel"
        overflowY={"auto"} height={"100%"}>
            <Box as="section" id="recents" className="channet-section" 
            display={"block"}>
                <Box className="carousel">
                    <Box className="container">
                        <Flex className="channel-heading" 
                        direction={"column"} justifyContent={"center"}
                        position={"relative"}
                        minH={"32px"}>
                            <Box flex={"1 1 0%"}>
                                <Heading
                                fontFamily={"Inter,Arial,sans-serif"} fontWeight={"700"} fontSize={"20px"} lineHeight={"24px"}>
                                    Écouté récemment
                                </Heading>
                            </Box>
                            <Box className="carousel-controls"
                            position={"absolute"} right={0} top={"50%"}
                            transform={"translateY(-50%"}>
                                <Flex className="carousel-control carousel-prev"
                                display={"inline-flex"}
                                paddingLeft={"8px"}>
                                    <Button type="button" aria-label="Précédent"
                                    gap={"0.25rem"}
                                    minH={"3rem"} minW={"3rem"} 
                                    padding={0}
                                    color={"#706e73"}
                                    background={"transparent"}
                                    borderRadius={"full"}
                                    boxShadow={"none"}
                                    outline={"transparent solid 2px"} outlineOffset={0}
                                    opacity={"0.4"}
                                    cursor={"not-allowed"} tabIndex={-1}
                                    transitionProperty={"background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform"} transitionDuration={"200ms"}
                                    _hover={{
                                        background: "transparent"
                                    }}
                                    _active={{
                                        backgroundColor: "#706e73"
                                    }}
                                    >
                                        <LeftCarouselIcon color="rgb(112, 110, 115)"/>
                                    </Button>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                    <Box>

                    </Box>
                </Box>
            </Box>
            <Box as="section" id="suggestions" display={"block"}>

                {/* future CAROUSEL */}

            </Box>
            <Box as="section" id="news" display={"block"}>

                {/* future CAROUSEL */}

            </Box>
            <Box as="section" id="tops" display={"block"}>

                {/* future CAROUSEL */}

            </Box>
            <Box as="section" id="listen" display={"block"}>

                {/* future CAROUSEL */}

            </Box>
        </Box>
    )
}

export default Home