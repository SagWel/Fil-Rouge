import { type IInstrument } from "./instrument"
import type { IUsers } from "./user"

export type TieStatus = "start" | "end" | "null"
export type Durations = "w" | "h" | "q" | "8" | "16" | "32"

export interface INoteData {
    id?: string,
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

export interface IMeasure {
    id: number,
    notes: INoteData[]
    shortText?: string
    bpm?: number
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

export interface IArtist {
    id: number,
    name: string,
    deezer_link?: string,
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
    artist: IArtist,
    songs: ISong[]
}

export interface ISong {
    id: number,
    title: string,
    deezer_link: string,
    audio_preview: string,
    duration: number,
    artist: IArtist,
    album: IAlbum,
    genre: IGenre,
}

export interface IPartitions {
    id: number,
    difficulty: number,
    instruments: {
        currentInstrument : IInstrument,
        othersInstruments : IInstrument[] }
    bpm: number,
    time_signature: string,
    clef: string,
    clef_signature?: string,
    measures: IMeasure[],
    song: ISong,
    partition_preview: string,
}

export interface IScorbrarie {
    id: number,
    name: string,
    description?: string,
    user: IUsers,
    partitions?: IPartitions[]
}