export type InstrumentType = "guitare" | "batterie" | "piano" | "basse" | "chant" | "ukulele" | "saxo"

export interface IInstrument {
    id: string
    name: InstrumentType,
    imgSrc: string,
    linkToSearch?: string,
    linkToPartition?: string,
}