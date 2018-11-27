export interface IMembership {
    color: string;
    created_at: string;
    email: string;
    full_name: string;
    gravatar_id: string;
    id: number;
    invitation_extra_text?: null;
    invited_by?: null;
    is_admin: boolean;
    is_owner: boolean;
    is_user_active: boolean;
    photo?: null;
    project: number;
    project_name: string;
    project_slug: string;
    role: number;
    role_name: string;
    user: number;
    user_email: string;
    user_order: number;
}
