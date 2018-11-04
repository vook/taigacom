export interface IXXX {
    assigned_to?: null;
    assigned_to_extra_info?: null;
    attachments?: (null)[] | null;
    blocked_note: string;
    blocked_note_html: string;
    client_requirement: boolean;
    color: string;
    comment: string;
    created_date: string;
    description: string;
    description_html: string;
    epics_order: number;
    id: number;
    is_blocked: boolean;
    is_closed: boolean;
    is_voter: boolean;
    is_watcher: boolean;
    modified_date: string;
    neighbors: Neighbors;
    owner: number;
    owner_extra_info: OwnerExtraInfo;
    project: number;
    project_extra_info: ProjectExtraInfo;
    ref: number;
    status: number;
    status_extra_info: StatusExtraInfo;
    subject: string;
    tags?: ((string | null)[] | null)[] | null;
    team_requirement: boolean;
    total_voters: number;
    total_watchers: number;
    user_stories_counts: UserStoriesCounts;
    version: number;
    watchers?: (number)[] | null;
}
export interface Neighbors {
    next: NextOrPrevious;
    previous: NextOrPrevious;
}
export interface NextOrPrevious {
    id: number;
    ref: number;
    subject: string;
}
export interface OwnerExtraInfo {
    big_photo?: null;
    full_name_display: string;
    gravatar_id: string;
    id: number;
    is_active: boolean;
    photo?: null;
    username: string;
}
export interface ProjectExtraInfo {
    id: number;
    logo_small_url?: null;
    name: string;
    slug: string;
}
export interface StatusExtraInfo {
    color: string;
    is_closed: boolean;
    name: string;
}
export interface UserStoriesCounts {
    progress: number;
    total: number;
}
