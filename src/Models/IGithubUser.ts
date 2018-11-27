export interface IGithubUser {
    full_name: string;
    id: number;
    user?: User | null;
    username: string;
}
export interface User {
    full_name: string;
    gravatar_id: string;
    id: number;
    photo: string;
}
