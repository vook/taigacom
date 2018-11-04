export interface IProject {
    anon_permissions?: (null)[] | null;
    blocked_code?: null;
    created_date: string;
    creation_template?: null;
    default_epic_status?: null;
    default_issue_status?: null;
    default_issue_type?: null;
    default_points?: null;
    default_priority?: null;
    default_severity?: null;
    default_task_status?: null;
    default_us_status?: null;
    description: string;
    epic_custom_attributes?: (EpicCustomAttributesEntityOrIssueCustomAttributesEntityOrTaskCustomAttributesEntityOrUserstoryCustomAttributesEntity)[] | null;
    epic_statuses?: (EpicStatusesEntityOrIssueStatusesEntityOrTaskStatusesEntity)[] | null;
    epics_csv_uuid?: null;
    i_am_admin: boolean;
    i_am_member: boolean;
    i_am_owner: boolean;
    id: number;
    is_backlog_activated: boolean;
    is_contact_activated: boolean;
    is_epics_activated: boolean;
    is_fan: boolean;
    is_featured: boolean;
    is_issues_activated: boolean;
    is_kanban_activated: boolean;
    is_looking_for_people: boolean;
    is_out_of_owner_limits: boolean;
    is_private: boolean;
    is_private_extra_info: IsPrivateExtraInfo;
    is_watcher: boolean;
    is_wiki_activated: boolean;
    issue_custom_attributes?: (EpicCustomAttributesEntityOrIssueCustomAttributesEntityOrTaskCustomAttributesEntityOrUserstoryCustomAttributesEntity)[] | null;
    issue_statuses?: (EpicStatusesEntityOrIssueStatusesEntityOrTaskStatusesEntity)[] | null;
    issue_types?: (IssueTypesEntityOrPrioritiesEntityOrSeveritiesEntity)[] | null;
    issues_csv_uuid?: null;
    logo_big_url: string;
    logo_small_url: string;
    looking_for_people_note: string;
    max_memberships?: null;
    members?: (MembersEntity)[] | null;
    milestones?: (MilestonesEntity)[] | null;
    modified_date: string;
    my_permissions?: (string)[] | null;
    name: string;
    notify_level: number;
    owner: Owner;
    points?: (PointsEntity)[] | null;
    priorities?: (IssueTypesEntityOrPrioritiesEntityOrSeveritiesEntity)[] | null;
    public_permissions?: (null)[] | null;
    roles?: (RolesEntity)[] | null;
    severities?: (IssueTypesEntityOrPrioritiesEntityOrSeveritiesEntity)[] | null;
    slug: string;
    tags?: (null)[] | null;
    tags_colors: TagsColors;
    task_custom_attributes?: (EpicCustomAttributesEntityOrIssueCustomAttributesEntityOrTaskCustomAttributesEntityOrUserstoryCustomAttributesEntity)[] | null;
    task_statuses?: (EpicStatusesEntityOrIssueStatusesEntityOrTaskStatusesEntity)[] | null;
    tasks_csv_uuid?: null;
    total_activity: number;
    total_activity_last_month: number;
    total_activity_last_week: number;
    total_activity_last_year: number;
    total_closed_milestones: number;
    total_fans: number;
    total_fans_last_month: number;
    total_fans_last_week: number;
    total_fans_last_year: number;
    total_memberships: number;
    total_milestones: number;
    total_story_points: number;
    total_watchers: number;
    totals_updated_datetime: string;
    transfer_token: string;
    us_statuses?: (UsStatusesEntity)[] | null;
    userstories_csv_uuid?: null;
    userstory_custom_attributes?: (EpicCustomAttributesEntityOrIssueCustomAttributesEntityOrTaskCustomAttributesEntityOrUserstoryCustomAttributesEntity)[] | null;
    videoconferences?: null;
    videoconferences_extra_data?: null;
}
export interface EpicCustomAttributesEntityOrIssueCustomAttributesEntityOrTaskCustomAttributesEntityOrUserstoryCustomAttributesEntity {
    created_date: string;
    description: string;
    id: number;
    modified_date: string;
    name: string;
    order: number;
    project_id: number;
    type: string;
}
export interface EpicStatusesEntityOrIssueStatusesEntityOrTaskStatusesEntity {
    color: string;
    id: number;
    is_closed: boolean;
    name: string;
    order: number;
    project_id: number;
    slug: string;
}
export interface IsPrivateExtraInfo {
    can_be_updated: boolean;
    reason?: null;
}
export interface IssueTypesEntityOrPrioritiesEntityOrSeveritiesEntity {
    color: string;
    id: number;
    name: string;
    order: number;
    project_id: number;
}
export interface MembersEntity {
    color: string;
    full_name: string;
    full_name_display: string;
    gravatar_id: string;
    id: number;
    is_active: boolean;
    photo?: null;
    role: number;
    role_name: string;
    username: string;
}
export interface MilestonesEntity {
    closed: boolean;
    id: number;
    name: string;
    slug: string;
}
export interface Owner {
    big_photo?: null;
    full_name_display: string;
    gravatar_id: string;
    id: number;
    is_active: boolean;
    photo?: null;
    username: string;
}
export interface PointsEntity {
    id: number;
    name: string;
    order: number;
    project_id: number;
    value?: number | null;
}
export interface RolesEntity {
    computable: boolean;
    id: number;
    name: string;
    order: number;
    permissions?: (string)[] | null;
    project_id: number;
    slug: string;
}
export interface TagsColors {
}
export interface UsStatusesEntity {
    color: string;
    id: number;
    is_archived: boolean;
    is_closed: boolean;
    name: string;
    order: number;
    project_id: number;
    slug: string;
    wip_limit?: null;
}
