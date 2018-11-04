export interface IXXX {
    comment: string;
    comment_html: string;
    date: string;
    user: User;
}
export interface User {
    big_photo?: null;
    bio: string;
    color: string;
    full_name: string;
    full_name_display: string;
    gravatar_id: string;
    id: number;
    is_active: boolean;
    lang: string;
    photo?: null;
    roles?: (string)[] | null;
    theme: string;
    timezone: string;
    username: string;
}
