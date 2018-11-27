export interface ITimeline {
    content_type: number;
    created: string;
    data: Data;
    data_content_type: number;
    event_type: string;
    id: number;
    namespace: string;
    object_id: number;
    project: number;
}
export interface Data {
    comment: string;
    comment_html: string;
    milestone: Milestone;
    project: Project;
    user: User;
    userstory: Userstory;
    values_diff: ValuesDiff;
}
export interface Milestone {
    id: number;
    name: string;
    slug: string;
}
export interface Project {
    description: string;
    id: number;
    name: string;
    slug: string;
}
export interface User {
    big_photo?: null;
    date_joined: string;
    gravatar_id: string;
    id: number;
    is_profile_visible: boolean;
    name: string;
    photo?: null;
    username: string;
}
export interface Userstory {
    id: number;
    ref: number;
    subject: string;
}
export interface ValuesDiff {
    attachments: Attachments;
}
export interface Attachments {
    changed?: (ChangedEntity)[] | null;
    deleted?: (null)[] | null;
    new?: (null)[] | null;
}
export interface ChangedEntity {
    changes: Changes;
    filename: string;
    thumb_url?: null;
    url: string;
}
export interface Changes {
    description?: (string)[] | null;
}
