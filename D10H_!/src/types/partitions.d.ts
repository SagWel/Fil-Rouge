import { IInstrument } from "./instrument"

export type TieStatus = "start" | "end"
export type Durations = "w" | "h" | "q" | "8" | "16" | "32"

export interface INoteData {
    keys: string[],
    duration: Durations,
    dots?: number,
    bpm?: number,
    isRest?: boolean,
    accidental?: string,
    beam?: "start" | "continue" | "end" | "none",
    ties?: TieStatus[],
    tuplet?: {
        type: "start" | "mid" | "end",
        num?: number,
        occupied?: number
    },
    lyrics?: string,
}

export interface IGenre {
    id: number,
    name: string,
    picture: string,
    picture_small?: string,
    picture_medium?: string,
    picture_big?: string,
    picture_xl?: string
}

export interface IMeasure {
    id: number,
    notes: INoteData[]
    shortText?: string
    bpm?: number
}

export interface IArtist {
    id: number,
    name: string,
    deezer_link?: string,
    partitions?: IPartitions[]
    albums?: IAlbum[]
    picture: string,
    picture_small?: string,
    picture_medium?: string,
    picture_big?: string,
    picture_xl?: string
}

export interface IAlbum {
    id: number,
    title: string,
    deezer_link: string,
    cover: string,
    cover_small?: string,
    cover_medium?: string,
    cover_big?: string,
    cover_xl?: string,
    partitions?: IPartitions[]
    artist: IArtist
}

export interface IPartitions {
    id: number,
    title: string,
    artist: IArtist,
    album?: IAlbum,
    genre: IGenre,
    difficulty: number,
    instruments: {
        currentInstrument : IInstrument,
        othersInstruments : IInstrument[] }
    bpm: number,
    time_signature: string,
    clef: string,
    clef_signature?: string,
    measures: IMeasure[],
    duration: number
    deezer_link: string,
    audio_preview: string,
    partition_preview: string,
}