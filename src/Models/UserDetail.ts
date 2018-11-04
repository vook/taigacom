export interface UserDetail {
    auth_token: string;
    big_photo?: null;
    bio: string;
    color: string;
    email: string;
    full_name: string;
    full_name_display: string;
    gravatar_id: string;
    id: number;
    is_active: boolean;
    lang: string;
    max_memberships_private_projects?: null;
    max_memberships_public_projects?: null;
    max_private_projects?: null;
    max_public_projects?: null;
    photo?: null;
    roles?: (string)[] | null;
    theme: string;
    timezone: string;
    total_private_projects: number;
    total_public_projects: number;
    username: string;
}
