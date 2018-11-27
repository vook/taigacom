export interface ILiked {
    assigned_to?: null;
    assigned_to_extra_info?: null;
    created_date: string;
    description: string;
    id: number;
    is_fan: boolean;
    is_private: boolean;
    is_watcher: boolean;
    logo_small_url?: null;
    name: string;
    project?: null;
    project_blocked_code?: string | null;
    project_is_private?: null;
    project_name?: null;
    project_slug?: null;
    ref?: null;
    slug: string;
    status?: null;
    status_color?: null;
    subject?: null;
    tags_colors?: (TagsColorsEntity | null)[] | null;
    total_fans: number;
    total_watchers: number;
    type: string;
}
export interface TagsColorsEntity {
    color?: string | null;
    name: string;
}
