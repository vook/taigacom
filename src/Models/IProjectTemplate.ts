import {IEpicStatus} from "./IEpicStatus";
import {IIssueStatus} from "./IIssueStatus";
import {IIssueType} from "./IIssueType";
import {IPoint} from "./IPoint";
import {IPriority} from "./IPriority";
import {IRole} from "./IRole";
import {ISeverity} from "./ISeverity";
import {ITaskStats} from "./ITaskStats";
import {IStatus} from "./IStatus";
import {IDefaultOptions} from "./IDefaultOptions";

export interface IProjectTemplate {
    created_date: string;
    default_options: IDefaultOptions;
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
