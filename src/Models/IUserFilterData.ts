export interface IUserFilterData {
    assigned_to?: (AssignedToEntity)[] | null;
    epics?: (EpicsEntity)[] | null;
    owners?: (OwnersEntity)[] | null;
    statuses?: (StatusesEntity)[] | null;
    tags?: (TagsEntity)[] | null;
}
export interface AssignedToEntity {
    count: number;
    full_name: string;
    id?: number | null;
}
export interface EpicsEntity {
    count: number;
    id?: number | null;
    order: number;
    ref?: number | null;
    subject?: string | null;
}
export interface OwnersEntity {
    count: number;
    full_name: string;
    id: number;
}
export interface StatusesEntity {
    color: string;
    count: number;
    id: number;
    name: string;
    order: number;
}
export interface TagsEntity {
    color?: string | null;
    count: number;
    name: string;
}
