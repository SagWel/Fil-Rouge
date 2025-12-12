export type InstrumentType = "guitare" | "batterie" | "piano" | "basse" | "chant" | "ukulele" | "saxo"

export interface IPartitions {
    title: string;
    artist: string;
    difficulty: number;
    instrument: InstrumentType;
    preview: any;
    audioPreviewUrl: string;
    id: string;
}