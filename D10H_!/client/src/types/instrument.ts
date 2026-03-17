export type InstrumentType = "guitare" | "batterie" | "piano" | "basse" | "chant" | "ukulele" | "saxo"

export interface IInstrument {
    id: number
    name: InstrumentType,
    imgSrc: string,
    linkToSearch: string,
}

export interface IInstrumentLvl {
    instrument: IInstrument,
    lvl: number
}