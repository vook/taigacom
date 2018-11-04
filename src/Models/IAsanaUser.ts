export interface IXXX {
    full_name: string;
    id: number;
    user?: User | null;
}
export interface User {
    full_name: string;
    gravatar_id: string;
    id: number;
    photo: string;
}
