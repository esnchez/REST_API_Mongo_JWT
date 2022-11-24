export interface IUser {
    firstName: string,
    lastName?: string,
    email: string,
    password: string,
    role: 'subscriber' | 'creator',
    discordNumber: number
}