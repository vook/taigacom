export interface IXXX {
    projects: Projects;
    users: Users;
    userstories: Userstories;
}
export interface Projects {
    average_last_five_working_days: number;
    average_last_seven_days: number;
    percent_with_backlog: number;
    percent_with_backlog_and_kanban: number;
    percent_with_kanban: number;
    today: number;
    total: number;
    total_with_backlog: number;
    total_with_backlog_and_kanban: number;
    total_with_kanban: number;
}
export interface Users {
    average_last_five_working_days: number;
    average_last_seven_days: number;
    counts_last_year_per_week: CountsLastYearPerWeek;
    today: number;
    total: number;
}
export interface CountsLastYearPerWeek {
    2017-06-26: number;
}
export interface Userstories {
    average_last_five_working_days: number;
    average_last_seven_days: number;
    today: number;
    total: number;
}
