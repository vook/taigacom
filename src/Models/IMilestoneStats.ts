export interface IXXX {
    completed_points?: (number)[] | null;
    completed_tasks: number;
    completed_userstories: number;
    days?: (DaysEntity)[] | null;
    estimated_finish: string;
    estimated_start: string;
    iocaine_doses: number;
    name: string;
    total_points: TotalPoints;
    total_tasks: number;
    total_userstories: number;
}
export interface DaysEntity {
    day: string;
    name: number;
    open_points: number;
    optimal_points: number;
}
export interface TotalPoints {
    1: number;
    2: number;
    3: number;
    4: number;
}
