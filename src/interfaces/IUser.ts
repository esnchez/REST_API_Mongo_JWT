export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    role: 'subscriber' | 'creator',
    discordNumber: number
}