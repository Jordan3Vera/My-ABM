export interface IUser {
    id: number,
    user: string,
    email: string,
    password: string,
}


export interface AddUser{
    id?: number,
    username: string,
    email: string,
    password: string,
    token?: string
}