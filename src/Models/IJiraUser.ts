export interface IXXX {
    email?: string | null;
    full_name: string;
    id: string;
    user?: User | null;
}
export interface User {
    full_name: string;
    gravatar_id: string;
    id: number;
    photo: string;
}
