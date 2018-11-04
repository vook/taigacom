export interface IXXX {
    token: Token;
}
export interface Token {
    access_token: string;
    data: Data;
    expires_in: number;
    refresh_token: string;
    token_type: string;
}
export interface Data {
    email: string;
    id: number;
    name: string;
}
