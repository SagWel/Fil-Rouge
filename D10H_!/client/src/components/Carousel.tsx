import {Box, Flex, Heading, IconButton, List} from "@chakra-ui/react"

import { LeftCarouselIcon, RightCarouselIcon } from "./svg"
import { useState, useRef, useEffect } from "react"

export interface ICarouselProps {
    data,
    renderItem(e),
    id: string,
    title: string
}

const Carousel: React.FC<ICarouselProps> = ({ data, renderItem, id, title }) => {
    const [translate, setTranslate] = useState<number>(0)
    const [containerWidth, setContainerWidth] = useState<number>(0)
    const [maxScroll, setMaxScroll] = useState<number>(0)

    const carouselContainerRef = useRef<HTMLDivElement>(null)
    const listRef = useRef<HTMLUListElement>(null)
    const leftButtonRef = useRef<HTMLButtonElement>(null)
    const rightButtonRef = useRef<HTMLButtonElement>(null)

    const scroll = (direction: "left" | "right") => {
        const currentContainerWidth = carouselContainerRef.current?.clientWidth || 0;
        const currentScrollWidth = listRef.current?.scrollWidth || 0;
        const currentMaxScroll = currentContainerWidth - currentScrollWidth

        setContainerWidth(currentContainerWidth);
        setMaxScroll(currentMaxScroll);

        if (leftButtonRef.current && rightButtonRef.current) {
    
            if(direction === "left") {
                const newTranslate = translate + currentContainerWidth
                setTranslate(Math.min(0, newTranslate))
            } else {
                const newTranslate = translate - currentContainerWidth
                setTranslate(Math.max(currentMaxScroll, newTranslate))
            }

        }

    }

    useEffect(() => {
        if (carouselContainerRef.current && listRef.current) {
            setContainerWidth(carouselContainerRef.current.clientWidth);
            setMaxScroll(carouselContainerRef.current.clientWidth - listRef.current.scrollWidth);
        }
    }, [data])
    return (
        <Box as="section" id={id} display={"block"}>
            <Box>
                <Box 
                p={"24px"} mx={"auto"}
                position={"relative"}
                width={"1154px"}
                boxSizing="border-box">
                    <Flex flexDir={"column"} justifyContent={"center"}
                    minH={"32px"}
                    position={"relative"}>
                        <Box>
                            <Heading as={"h2"}
                            m={0}
                            fontFamily={"Inter,Arial,sans-serif"} fontSize={"20px"} fontWeight={"700"} lineHeight={"24px"} textDecor={"none"}
                            color={"#ffffff"}>
                                {title}
                            </Heading>
                        </Box>
                        <Box position={"absolute"} right={0} top={"50%"} transform={"translateY(-50%)"}>
                            <Flex display={"inline-flex"}
                            ps={"8px"}>
                                <IconButton type="button" aria-label="Précédent" disabled={translate === 0}
                                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} gap={"0,25rem"}
                                position={"relative"} whiteSpace={"nowrap"} verticalAlign={"middle"}
                                minH={"3rem"} minW={"3rem"} h={"auto"}
                                paddingInline={"1,5rem"} p={0} m={0}
                                fontSize={"16px"} fontWeight={"700"} lineHeight={"24px"} fontFamily={"Inter,Arial,sans-serif"}
                                textDecor={"none"} color={"#ffffff"}
                                bg={"transparent"}
                                borderRadius={"16rem"} border={0}
                                outline={"transparent solid 2px"} outlineOffset={0}
                                cursor={"not-allowed"} appearance={"none"} userSelect={"none"} overflow={"visible"}
                                transitionDuration={"200ms"} transitionProperty={"background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform"}
                                onClick={() => scroll("left")}
                                _disabled={{
                                    color: "#706e73"
                                }}>
                                    <LeftCarouselIcon focusable={"false"} aria-hidden={"true"} w={"24px"} h={"24px"} lineHeight={"1rem"} flexShrink={0} verticalAlign={"middle"} display={"block"}/>
                                </IconButton>
                            </Flex>
                            <Flex display={"inline-flex"}
                            ps={"8px"}>
                                <IconButton type="button" aria-label="suivant" disabled={translate === maxScroll}
                                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} gap={"0,25rem"}
                                position={"relative"} whiteSpace={"nowrap"} verticalAlign={"middle"}
                                minH={"3rem"} minW={"3rem"} height={"auto"}
                                paddingInline={"1,5rem"} p={0} m={0}
                                fontFamily={"Inter,Arial,sans-serif"} fontSize={"16px"} fontWeight={"700"} lineHeight={"24px"}
                                textDecor={"none"} color={"#ffffff"}
                                bg={"transparent"}
                                borderRadius={"16rem"} border={0}
                                outline={"transparent solid 2px"} outlineOffset={0}
                                appearance={"none"} userSelect={"none"} cursor={"pointer"} overflow={"visible"}
                                transitionDuration={"200ms"} transitionProperty={"background-color,border-color,outline-color,color,fill,stroke,opacity,box-shadow,transform"}
                                onClick={() => scroll("right")}
                                _disabled={{
                                    color: "#706e73"
                                }}>
                                    <RightCarouselIcon  focusable={"false"} aria-hidden={"true"} w={"24px"} h={"24px"} lineHeight={"1rem"} flexShrink={0} verticalAlign={"middle"} display={"block"}/>
                                </IconButton>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
                <Box 
                p={"24px"} pt={0} mx={"auto"}
                position={"relative"}
                w={"1154px"}
                boxSizing="border-box">
                    <Box m={"-2px"} overflow={"hidden"} p={"2px"} ref={carouselContainerRef}>
                        <Box 
                        transitionDuration={".6s"} transitionProperty={"transform"} transitionTimingFunction={"ease-in-out"}
                        style={{
                            transform: `translateX(${translate}px)`
                        }}>
                            <List as={Flex} ref={listRef} 
                            flexWrap={"nowrap"} gap={"5rem"}
                            mt={"-24px"} m={0} p={0}
                            position={"relative"}
                            overflow={"visible"}
                            listStyleType={"none"}>
                                {data.map(e => renderItem(e))}
                            </List>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Carousel