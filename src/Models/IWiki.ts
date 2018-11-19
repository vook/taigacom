export interface IWiki {
    content: string;
    created_date: string;
    editions: number;
    html: string;
    id: number;
    is_watcher: boolean;
    last_modifier: number;
    modified_date: string;
    owner: number;
    project: number;
    project_extra_info: ProjectExtraInfo;
    slug: string;
    total_watchers: number;
    version: number;
}
