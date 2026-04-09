export type GenderType = "M" | "F" | "NB" | "Private"

export interface IUsers {
    id: number,
    email: string,
    username: string,
    avatarUrl: string,
    age: number,
    birthday: Date,
    gender: GenderType,
    visibility: "public" | "private"
}