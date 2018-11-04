export interface IXXX {
    assigned_to: number;
    assigned_to_extra_info: AssignedToExtraInfoOrOwnerExtraInfo;
    attachments?: (null)[] | null;
    backlog_order: number;
    blocked_note: string;
    blocked_note_html: string;
    client_requirement: boolean;
    comment: string;
    created_date: string;
    description: string;
    description_html: string;
    epic_order?: null;
    epics?: (EpicsEntity)[] | null;
    external_reference?: null;
    finish_date: string;
    generated_from_issue?: null;
    id: number;
    is_blocked: boolean;
    is_closed: boolean;
    is_voter: boolean;
    is_watcher: boolean;
    kanban_order: number;
    milestone: number;
    milestone_name: string;
    milestone_slug: string;
    modified_date: string;
    neighbors: Neighbors;
    origin_issue?: null;
    owner: number;
    owner_extra_info: AssignedToExtraInfoOrOwnerExtraInfo;
    points: Points;
    project: number;
    project_extra_info: ProjectExtraInfo;
    ref: number;
    sprint_order: number;
    status: number;
    status_extra_info: StatusExtraInfo;
    subject: string;
    tags?: ((string)[] | null)[] | null;
    tasks?: (null)[] | null;
    team_requirement: boolean;
    total_comments: number;
    total_points: number;
    total_voters: number;
    total_watchers: number;
    tribe_gig?: null;
    version: number;
    watchers?: (null)[] | null;
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
export interface Neighbors {
    next: NextOrPrevious;
    previous: NextOrPrevious;
}
export interface NextOrPrevious {
    id: number;
    ref: number;
    subject: string;
}
export interface Points {
    1: number;
    2: number;
    3: number;
    4: number;
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
