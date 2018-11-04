export interface IXXX {
    assigned_to: number;
    assigned_to_extra_info: AssignedToExtraInfo;
    created_date: string;
    description?: null;
    id: number;
    is_private?: null;
    is_voter: boolean;
    is_watcher: boolean;
    logo_small_url?: null;
    name?: null;
    project: number;
    project_blocked_code: string;
    project_is_private: boolean;
    project_name: string;
    project_slug: string;
    ref: number;
    slug?: null;
    status: string;
    status_color: string;
    subject: string;
    tags_colors?: (TagsColorsEntity)[] | null;
    total_voters: number;
    total_watchers: number;
    type: string;
}
export interface AssignedToExtraInfo {
    big_photo?: null;
    full_name_display: string;
    gravatar_id: string;
    id: number;
    is_active: boolean;
    photo?: null;
    username: string;
}
export interface TagsColorsEntity {
    color: string;
    name: string;
}
