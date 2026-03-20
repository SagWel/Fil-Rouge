export type InstrumentType = "guitare" | "batterie" | "piano" | "basse" | "chant" | "ukulele" | "saxo"

export interface IInstrument {
    id: number,
    name: InstrumentType,
    role?: string
    imgSrc: string,
    linkToSearch: string,
}

export interface IOtherInstrument {
    instrument : IInstrument,
    partitionId: number
}

export interface IInstrumentLvl {
    instrument: IInstrument,
    lvl: number
}