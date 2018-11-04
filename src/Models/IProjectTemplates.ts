export interface IXXX {
    created_date: string;
    default_options: DefaultOptions;
    default_owner_role: string;
    description: string;
    epic_statuses?: IEpicStatus[];
    id: number;
    is_backlog_activated: boolean;
    is_contact_activated: boolean;
    is_epics_activated: boolean;
    is_issues_activated: boolean;
    is_kanban_activated: boolean;
    is_wiki_activated: boolean;
    issue_statuses?: IIssueStatus[];
    issue_types?: IIssueType[];
    modified_date: string;
    name: string;
    order: number;
    points?: IPoint[];
    priorities?: IPriority[];
    roles?: IRole[];
    severities?: ISeverity[];
    slug: string;
    task_statuses?: ITaskStats[];
    us_statuses?: IStatus[];
    videoconferences?: null;
    videoconferences_extra_data: string;
}
export interface DefaultOptions {
    epic_status: string;
    issue_status: string;
    issue_type: string;
    points: string;
    priority: string;
    severity: string;
    task_status: string;
    us_status: string;
}
