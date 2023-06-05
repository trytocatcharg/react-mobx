export interface User {
    firstName: string;
    username: string,
    lastName?: string;
    type: UserType;
    email?: string;

}

export enum UserType {
    ADMIN,
    USER
}