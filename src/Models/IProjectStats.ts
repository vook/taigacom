export interface IProjectStats {
    assigned_points: number;
    assigned_points_per_role: AssignedPointsPerRoleOrClosedPointsPerRoleOrDefinedPointsPerRole;
    closed_points: number;
    closed_points_per_role: AssignedPointsPerRoleOrClosedPointsPerRoleOrDefinedPointsPerRole;
    defined_points: number;
    defined_points_per_role: AssignedPointsPerRoleOrClosedPointsPerRoleOrDefinedPointsPerRole;
    milestones?: (MilestonesEntity)[] | null;
    name: string;
    speed: number;
    total_milestones: number;
    total_points: number;
}
export interface AssignedPointsPerRoleOrClosedPointsPerRoleOrDefinedPointsPerRole {
    1: number;
    2: number;
    3: number;
    4: number;
}
export interface MilestonesEntity {
    client-increment: number;
    evolution?: number | null;
    name: string;
    optimal: number;
    team-increment: number;
}
