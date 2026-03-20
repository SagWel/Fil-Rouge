import { createContext, useCallback, useMemo, useState, type ReactNode } from "react"
import type { IPartitions } from "../types/partitions"

interface PartitionContextType {
    partition: IPartitions | undefined
    setPartition: (p: IPartitions | undefined) => void

    playback: {
        pctBpm: number,
        isMetronomeActive: boolean,
        isCountdownActive: boolean
        loopRegion: {
            startMeasureId : number,
            endMeasureId: number
        } | null,
        learningConfig: {
            startPct: number,
            endPct: number,
            step: number
        } | null
    }

    audio: {
        mutedTracks: number[],
        isSoloMode: boolean
    }

    annotations : any[]

    activeModal: 'tuner' | 'tempo' | 'looper' | 'learning' | 'chords' | null

    setPlayback: (update: any) => void
    toggleMute: (trackId: number) => void,
    setActiveModal: (modal: 'tuner' | 'tempo' | 'looper' | 'learning' | 'chords' | null) => void
    toggleIsSoloMode: (isSoloMode: boolean) => void
    
}

const PartitionContext: React.Context<PartitionContextType | undefined> = createContext<PartitionContextType | undefined>(undefined)

interface PartitionProviderProps {
    children: ReactNode
}

const PartitionProvider = ({ children } : PartitionProviderProps) => {
    const [partition, setPartition] = useState<IPartitions | undefined>(undefined)
    
    /* playback */
    const [pctBpm, setPctBpm] = useState<number>(100)
    const [isMetronomeActive, setIsMetronomeActive] = useState<boolean>(false)
    const [isCountdownActive, setIsCountdownActive] = useState<boolean>(false)
    const [loopRegion, setLoopRegion] = useState<{startMeasureId: number, endMeasureId: number} | null>(null)
    const [learningConfig, setLearningConfig] = useState<{startPct: number, endPct: number, step: number} | null>(null)

    /* audio */
    const [mutedTracks, setMutedTracks] = useState<number[] | []>([])
    const [isSoloMode, setIsSoloMode] = useState<boolean>(false)

    /* annotations */
    const [annotations, setAnnotations] = useState<any[]>([])

    /* modals */
    const [activeModal, setActiveModal] = useState<'tuner' | 'tempo' | 'looper' | 'learning' | 'chords' | null>(null)

    const toggleMute = useCallback((trackId: number) => {
        setMutedTracks(prev => prev.includes(trackId) ? 
            prev.filter(id => id !== trackId) :
            [...prev, trackId])
    }, [])

    const toggleIsSoloMode = useCallback(() => {
        setIsSoloMode(prev => !prev)
    },[])

    const setPlayback = useCallback((update: any) => {
        if (update.pctBpm !== undefined) setPctBpm(update.pctBpm)
        
        if (update.isMetronomeActive !== undefined) setIsMetronomeActive(update.isMetronomeActive)
        
        if (update.isCountdownActive !== undefined) setIsCountdownActive(update.isCountdownActive)
        
        if (update.loopRegion !== undefined) setLoopRegion(update.loopRegion)

        if (update.learningConfig !== undefined) setLearningConfig(update.learningConfig)
    },[])

    const contextValue = useMemo(() => ({
        partition,
        setPartition,
        playback: {
            pctBpm,
            isMetronomeActive,
            isCountdownActive,
            loopRegion,
            learningConfig
        },
        setPlayback,
        audio: {
            mutedTracks,
            isSoloMode,
        },
        toggleMute,
        toggleIsSoloMode,
        annotations,
        activeModal,
        setActiveModal
    }),[
        partition, pctBpm, isMetronomeActive, isCountdownActive, loopRegion, 
        learningConfig, mutedTracks, isSoloMode, annotations, activeModal, 
        setPlayback, toggleMute
    ])

    return (
        <PartitionContext.Provider value={contextValue}>
            {children}
        </PartitionContext.Provider>
    )
}

export {PartitionContext, PartitionProvider}