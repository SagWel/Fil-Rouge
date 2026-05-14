import { createContext, useMemo, useState, type ReactNode } from "react"
import type { IInstrument, IOtherInstrument } from "../types/instrument"
import { useScore } from "../hooks/useScore"

export type LearningModeProps = {
    startTempoPercent: number,
    endTempoPercent: number,
    increment: number
}

export type LooperProps = {
    startMeasure: number,
    endMeasure: number
}

export interface IInstrumentMute {
    instrument: IInstrument,
    muted: boolean
}

export interface PlayScoreStatesContextType {
    onPlay: boolean,
    previousMeasure: boolean,
    backToStart: boolean,
    nextMeasure: boolean,
    tunnerOn: boolean,
    countdown: boolean,
    metronome: boolean,
    tempoManagementOn: boolean,
    tempoPercent: number,
    learningModeOn: boolean,
    learningMode: LearningModeProps,
    looperOn: boolean,
    looper: LooperProps,
    solo: boolean,
    muteOn: boolean,
    mute: IInstrumentMute [],
}

export interface PlayScoreDispatchContextType {
    setOnPlay: React.Dispatch<React.SetStateAction<boolean>>,
    setPreviousMeasure: React.Dispatch<React.SetStateAction<boolean>>,
    setBackToStart: React.Dispatch<React.SetStateAction<boolean>>,
    setNextMeasure: React.Dispatch<React.SetStateAction<boolean>>,
    setTunnerOn: React.Dispatch<React.SetStateAction<boolean>>,
    setCountdown: React.Dispatch<React.SetStateAction<boolean>>,
    setMetronome: React.Dispatch<React.SetStateAction<boolean>>,
    setTempoManagementOn: React.Dispatch<React.SetStateAction<boolean>>,
    setTempoPercent: React.Dispatch<React.SetStateAction<number>>,
    setLearningModeOn: React.Dispatch<React.SetStateAction<boolean>>,
    setLearningMode: React.Dispatch<React.SetStateAction<LearningModeProps>>,
    setLooperOn : React.Dispatch<React.SetStateAction<boolean>>,
    setLooper: React.Dispatch<React.SetStateAction<LooperProps>>,
    setSolo: React.Dispatch<React.SetStateAction<boolean>>,
    setMuteOn: React.Dispatch<React.SetStateAction<boolean>>,
    setMute: React.Dispatch<React.SetStateAction<IInstrumentMute []>>,
}

const PlayScoreStatesContext: React.Context<PlayScoreStatesContextType | undefined> = createContext<PlayScoreStatesContextType | undefined>(undefined)

const PlayScoreDispatchContext: React.Context<PlayScoreDispatchContextType | undefined> = createContext<PlayScoreDispatchContextType | undefined>(undefined)

interface PlayScoreProviderProps {
    children: ReactNode
}

const PlayScoreProvider = ({ children } : PlayScoreProviderProps) => {
    const {score} = useScore()

    const [onPlay, setOnPlay] = useState<boolean>(false)
    const [previousMeasure, setPreviousMeasure] = useState<boolean>(false)
    const [backToStart, setBackToStart] = useState<boolean>(false)
    const [nextMeasure, setNextMeasure] = useState<boolean>(false)
    const [tunnerOn, setTunnerOn] = useState<boolean>(false)
    const [countdown, setCountdown] = useState<boolean>(false)
    const [metronome, setMetronome] = useState<boolean>(false)
    const [tempoManagementOn, setTempoManagementOn] = useState<boolean>(false)
    const [tempoPercent, setTempoPercent] = useState<number>(100)
    const [learningModeOn, setLearningModeOn] = useState<boolean>(false)
    const [learningMode, setLearningMode] = useState<LearningModeProps>({startTempoPercent: 100, endTempoPercent: 100, increment: 1})
    const [looperOn, setLooperOn] = useState<boolean>(false)
    const [looper, setLooper] = useState<LooperProps>({startMeasure: 0, endMeasure: 0})
    const [solo, setSolo] = useState<boolean>(false)
    const [muteOn, setMuteOn] = useState<boolean>(false)
    const [mute, setMute] = useState<IInstrumentMute[] | undefined>(() => {
        const firstElement: IInstrumentMute = {
            instrument: score?.instruments.currentInstrument as IInstrument, 
            muted: false
        }

        if (score) {
            return [
                firstElement,
                ...(score.instruments.othersInstruments as IOtherInstrument[]).map((oi: IOtherInstrument) => ({
                    instrument: oi.instrument,
                    muted: false        
                }))
            ]
        } else {
            return undefined
        }
    })

    const statesContextValue = useMemo(() => ({
        onPlay,
        previousMeasure,
        backToStart,
        nextMeasure,
        tunnerOn,
        countdown,
        metronome,
        tempoManagementOn,
        tempoPercent,
        learningModeOn,
        learningMode,
        looperOn,
        looper,
        solo,
        muteOn,
        mute,
    }),[onPlay,
        previousMeasure,
        backToStart,
        nextMeasure,
        tunnerOn,
        countdown,
        metronome,
        tempoManagementOn,
        tempoPercent,
        learningModeOn,
        learningMode,
        looperOn,
        looper,
        solo,
        muteOn,
        mute,])

    const dispatchContextValue = useMemo(() => ({
        setOnPlay,
        setPreviousMeasure,
        setBackToStart,
        setNextMeasure,
        setTunnerOn,
        setCountdown,
        setMetronome,
        setTempoManagementOn,
        setTempoPercent,
        setLearningModeOn,
        setLearningMode,
        setLooperOn,
        setLooper,
        setSolo,
        setMuteOn,
        setMute
    }),[])

    return (
        <PlayScoreStatesContext.Provider value={statesContextValue}>
            <PlayScoreDispatchContext.Provider value={dispatchContextValue}>
                {children}
            </PlayScoreDispatchContext.Provider>
        </PlayScoreStatesContext.Provider>
    )
}

export {PlayScoreStatesContext, PlayScoreDispatchContext, PlayScoreProvider}