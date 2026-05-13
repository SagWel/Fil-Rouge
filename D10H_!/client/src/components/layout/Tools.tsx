import { Flex } from "@chakra-ui/react";

// SVGs import from a unique file
import { 
    TunnerIcon, 
    CountdownIcon, 
    MetronomeIcon, 
    TempoIcon, 
    LearningModeIcon,
    LooperIcon,
    SoloIcon,
    MuteIcon, 
    AnnotationsIcon, 
    ImpressionIcon, 
    ChordsIcon
} from "../Svg";

/* Import hook */
import { useScore } from "../../hooks/useScore";

/* Import conponent */
import OtherInstrumentCard from "../cards/OtherInstrumentCard";

/* Import type */
import type { IOtherInstrument } from "../../types/instrument";
import type { JSX } from "react";
import ToolButton from "../buttons/ToolButton";

export interface IToolsProps {}

export type ToolType = {
    name: string,
    content: JSX.Element
}

const Tools: React.FC<IToolsProps> = () => {

    /* Score data from context by hook */
    const { score } = useScore()

    const Tools: ToolType[] = [
        {
            name: 'tunner',
            content: <TunnerIcon size="24px" />
        },
        {
            name: 'countdown',
            content: <CountdownIcon size="24px" />
        },
        {
            name: 'metronome',
            content: <MetronomeIcon size="24px" />
        },
        {
            name: 'tempoManagement',
            content: <TempoIcon size="24px" />
        },
        {
            name: 'learningMode',
            content: <LearningModeIcon size="24px" />
        },
        {
            name: 'looper',
            content: <LooperIcon size="24px" />
        },
        {
            name: 'solo',
            content: <SoloIcon size="24px" />
        },
        {
            name: 'mute',
            content: <MuteIcon size="24px" />
        },
        {
            name: 'notes',
            content: <AnnotationsIcon size="24px" />
        },
        {
            name: 'printing',
            content: <ImpressionIcon size="24px" />
        },
        {
            name: 'chords',
            content: <ChordsIcon size="24px" />
        }
    ]

    return (
        <Flex id="RightBarContainer"
        direction={"column"} justifyContent={"start"} alignItems={"center"}
        marginRight={"0.5rem"} marginTop={"0.5rem"} paddingBottom={"1rem"}
        height={"100%"} width={"3rem"}>

            {/*Scores management tools*/}
            <Flex id="toolsContainer" 
            direction={"column"} justifyContent={"space-around"} alignItems={"center"}
            paddingBottom={"0.5rem"} height={"90%"}
            backgroundColor={"#141216"}
            borderTopRadius={"0.5rem"}
            borderBottomColor={"#3a393d"} borderBottomStyle={"solid"} borderBottomWidth={"0.0625rem"}>
                
                {Tools.map((t: ToolType) => {
                    return (
                        <ToolButton key={t.name} id={`${t.name}Btn`} title={t.name}>
                            {t.content}
                        </ToolButton>
                    )
                })}

            </Flex>

            {/*Others scores from current track*/}
            <Flex id="pistesContainer"
            direction={"column"} justifyContent={"space-around"} alignItems={"center"}
            paddingY={"0.5rem"} gap={"0.5rem"} minW={"38px"}
            backgroundColor={"#141216"}
            borderBottomRadius={"0.5rem"}
            overflowY={"auto"} sx={{
                "&::-webkit-scrollbar": {
                    display: "none"
                }
            }}>
                
                {score?.instruments.othersInstruments.map((oi: IOtherInstrument) => (
                    <OtherInstrumentCard instrument={oi} />
                ))}

            </Flex>
        </Flex>
    )
}

export default Tools