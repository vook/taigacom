export interface IStatus {
    id: number;
    color: string;
    is_archived: boolean;
    is_closed: boolean;
    name: string;
    order: number;
    project_id: number;
    slug: string;
    wip_limit: any
}
