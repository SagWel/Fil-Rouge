import { type JwtPayload } from "jwt-decode";
import type { IInstrumentLvl } from "./instrument";

export type GenderType = "M" | "F" | "NB" | "Private"

export interface IUsers extends JwtPayload {
    id: number,
    email: string,
    username: string,
    avatarUrl: string,
    age: number,
    birthday: Date,
    gender: GenderType,
    language: string,
    visibility: "public" | "private"
    userInstruments: IInstrumentLvl[]
}

