export interface IAsanaImportProject {
    is_backlog_activated: boolean;
    is_kanban_activated: boolean;
    my_permissions?: (string)[] | null;
    slug: string;
}
