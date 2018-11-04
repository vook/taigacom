export interface IXXX {
    assigned_to: number;
    assigned_to_extra_info: AssignedToExtraInfoOrOwnerExtraInfo;
    blocked_note: string;
    blocked_note_html: string;
    comment: string;
    created_date: string;
    description: string;
    description_html: string;
    external_reference?: null;
    finished_date?: null;
    generated_user_stories?: null;
    id: number;
    is_blocked: boolean;
    is_closed: boolean;
    is_voter: boolean;
    is_watcher: boolean;
    milestone?: null;
    modified_date: string;
    neighbors: Neighbors;
    owner: number;
    owner_extra_info: AssignedToExtraInfoOrOwnerExtraInfo;
    priority: number;
    project: number;
    project_extra_info: ProjectExtraInfo;
    ref: number;
    severity: number;
    status: number;
    status_extra_info: StatusExtraInfo;
    subject: string;
    tags?: ((string | null)[] | null)[] | null;
    total_voters: number;
    total_watchers: number;
    type: number;
    version: number;
    watchers?: (number)[] | null;
}
export interface AssignedToExtraInfoOrOwnerExtraInfo {
    big_photo?: null;
    full_name_display: string;
    gravatar_id: string;
    id: number;
    is_active: boolean;
    photo?: null;
    username: string;
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
