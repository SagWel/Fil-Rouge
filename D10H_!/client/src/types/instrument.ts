export type InstrumentType = "guitare" | "batterie" | "piano" | "basse" | "chant" | "ukulele" | "saxo"

export interface IInstrument {
    id: number,
    name: InstrumentType,
    role?: string
    imgSrc: string,
    link_to_search: string,
}

export interface IOtherInstrument {
    instrument : IInstrument,
    score_id: number
}

export interface IInstrumentLvl {
    instrument: IInstrument,
    lvl: number
}