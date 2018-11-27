export interface IIssueFilterData {
    assigned_to?: (AssignedToEntity)[] | null;
    owners?: (OwnersEntity)[] | null;
    priorities?: (PrioritiesEntityOrSeveritiesEntityOrStatusesEntityOrTypesEntity)[] | null;
    severities?: (PrioritiesEntityOrSeveritiesEntityOrStatusesEntityOrTypesEntity)[] | null;
    statuses?: (PrioritiesEntityOrSeveritiesEntityOrStatusesEntityOrTypesEntity)[] | null;
    tags?: (TagsEntity)[] | null;
    types?: (PrioritiesEntityOrSeveritiesEntityOrStatusesEntityOrTypesEntity)[] | null;
}
export interface AssignedToEntity {
    count: number;
    full_name: string;
    id?: number | null;
}
export interface OwnersEntity {
    count: number;
    full_name: string;
    id: number;
}
export interface PrioritiesEntityOrSeveritiesEntityOrStatusesEntityOrTypesEntity {
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
