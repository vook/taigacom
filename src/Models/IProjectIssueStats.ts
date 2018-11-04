export interface IProjectIssueStats {
    closed_issues: number;
    issues_per_assigned_to: IssuesPerAssignedTo;
    issues_per_owner: IssuesPerOwner;
    issues_per_priority: IssuesPerPriorityOrIssuesPerType;
    issues_per_severity: IssuesPerSeverity;
    issues_per_status: IssuesPerStatus;
    issues_per_type: IssuesPerPriorityOrIssuesPerType;
    last_four_weeks_days: LastFourWeeksDays;
    opened_issues: number;
    total_issues: number;
}
export interface IssuesPerAssignedTo {
    0: 0Or5Or6Or8Or11Or12Or13Or14Or15Or7Or10;
    5: 0Or5Or6Or8Or11Or12Or13Or14Or15Or7Or10;
    6: 0Or5Or6Or8Or11Or12Or13Or14Or15Or7Or10;
    8: 0Or5Or6Or8Or11Or12Or13Or14Or15Or7Or10;
    11: 0Or5Or6Or8Or11Or12Or13Or14Or15Or7Or10;
    12: 0Or5Or6Or8Or11Or12Or13Or14Or15Or7Or10;
    13: 0Or5Or6Or8Or11Or12Or13Or14Or15Or7Or10;
    14: 0Or5Or6Or8Or11Or12Or13Or14Or15Or7Or10;
    15: 0Or5Or6Or8Or11Or12Or13Or14Or15Or7Or10;
}
export interface 0Or5Or6Or8Or11Or12Or13Or14Or15Or7Or10 {
    color: string;
    count: number;
    id: number;
    name: string;
    username: string;
}
export interface IssuesPerOwner {
    5: 0Or5Or6Or8Or11Or12Or13Or14Or15Or7Or10;
    6: 0Or5Or6Or8Or11Or12Or13Or14Or15Or7Or10;
    7: 0Or5Or6Or8Or11Or12Or13Or14Or15Or7Or10;
    8: 0Or5Or6Or8Or11Or12Or13Or14Or15Or7Or10;
    10: 0Or5Or6Or8Or11Or12Or13Or14Or15Or7Or10;
    11: 0Or5Or6Or8Or11Or12Or13Or14Or15Or7Or10;
    12: 0Or5Or6Or8Or11Or12Or13Or14Or15Or7Or10;
    13: 0Or5Or6Or8Or11Or12Or13Or14Or15Or7Or10;
    14: 0Or5Or6Or8Or11Or12Or13Or14Or15Or7Or10;
    15: 0Or5Or6Or8Or11Or12Or13Or14Or15Or7Or10;
}
export interface IssuesPerPriorityOrIssuesPerType {
    1: 1Or2Or3Or4Or5Or6Or7;
    2: 1Or2Or3Or4Or5Or6Or7;
    3: 1Or2Or3Or4Or5Or6Or7;
}
export interface 1Or2Or3Or4Or5Or6Or7 {
    color: string;
    count: number;
    id: number;
    name: string;
}
export interface IssuesPerSeverity {
    1: 1Or2Or3Or4Or5Or6Or7;
    2: 1Or2Or3Or4Or5Or6Or7;
    3: 1Or2Or3Or4Or5Or6Or7;
    4: 1Or2Or3Or4Or5Or6Or7;
    5: 1Or2Or3Or4Or5Or6Or7;
}
export interface IssuesPerStatus {
    1: 1Or2Or3Or4Or5Or6Or7;
    2: 1Or2Or3Or4Or5Or6Or7;
    3: 1Or2Or3Or4Or5Or6Or7;
    4: 1Or2Or3Or4Or5Or6Or7;
    5: 1Or2Or3Or4Or5Or6Or7;
    6: 1Or2Or3Or4Or5Or6Or7;
    7: 1Or2Or3Or4Or5Or6Or7;
}
export interface LastFourWeeksDays {
    by_open_closed: ByOpenClosed;
    by_priority: ByPriority;
    by_severity: BySeverity;
    by_status: ByStatus;
}
export interface ByOpenClosed {
    closed?: (number)[] | null;
    open?: (number)[] | null;
}
export interface ByPriority {
    1: 1Or2Or3Or4Or5;
    2: 1Or2Or3Or4Or5;
    3: 1Or2Or3Or4Or5;
}
export interface 1Or2Or3Or4Or5 {
    color: string;
    data?: (number)[] | null;
    id: number;
    name: string;
}
export interface BySeverity {
    1: 1Or2Or3Or4Or5;
    2: 1Or2Or3Or4Or5;
    3: 1Or2Or3Or4Or5;
    4: 1Or2Or3Or4Or5;
    5: 1Or2Or3Or4Or5;
}
export interface ByStatus {
}
