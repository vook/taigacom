import {IProjectExtraInfo} from "./IProjectExtraInfo";
import {IUserStory} from "./IUserStory";

export interface IMilestone {
    closed: boolean;
    closed_points: number;
    created_date: string;
    disponibility: number;
    estimated_finish: string;
    estimated_start: string;
    id: number;
    is_watcher: boolean;
    modified_date: string;
    name: string;
    order: number;
    owner: number;
    project: number;
    project_extra_info: IProjectExtraInfo;
    slug: string;
    total_points: number;
    total_watchers: number;
    user_stories?: IUserStory[];
    watchers?: any[] | null;
}
