export interface IXXX {
    assigned_to: number;
    assigned_to_extra_info: AssignedToExtraInfoOrOwnerExtraInfo;
    attachments?: (null)[] | null;
    blocked_note: string;
    blocked_note_html: string;
    comment: string;
    created_date: string;
    description: string;
    description_html: string;
    external_reference?: null;
    finished_date: string;
    id: number;
    is_blocked: boolean;
    is_closed: boolean;
    is_iocaine: boolean;
    is_voter: boolean;
    is_watcher: boolean;
    milestone: number;
    milestone_slug: string;
    modified_date: string;
    neighbors: Neighbors;
    owner: number;
    owner_extra_info: AssignedToExtraInfoOrOwnerExtraInfo;
    project: number;
    project_extra_info: ProjectExtraInfo;
    ref: number;
    status: number;
    status_extra_info: StatusExtraInfo;
    subject: string;
    tags?: ((string | null)[] | null)[] | null;
    taskboard_order: number;
    total_comments: number;
    total_voters: number;
    total_watchers: number;
    us_order: number;
    user_story: number;
    user_story_extra_info: UserStoryExtraInfo;
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
    next: Next;
    previous?: null;
}
export interface Next {
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
export interface UserStoryExtraInfo {
    epics?: (EpicsEntity)[] | null;
    id: number;
    ref: number;
    subject: string;
}
export interface EpicsEntity {
    color: string;
    id: number;
    project: Project;
    ref: number;
    subject: string;
}
export interface Project {
    id: number;
    name: string;
    slug: string;
}
