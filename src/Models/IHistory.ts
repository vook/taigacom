export interface IXXX {
    comment: string;
    comment_html: string;
    created_at: string;
    delete_comment_date?: null;
    delete_comment_user?: null;
    diff: Diff;
    edit_comment_date?: null;
    id: string;
    is_hidden: boolean;
    is_snapshot: boolean;
    key: string;
    snapshot?: null;
    type: number;
    user: User;
    values: Values;
    values_diff: ValuesDiff;
}
export interface Diff {
    status?: (number)[] | null;
}
export interface User {
    gravatar_id: string;
    is_active: boolean;
    name: string;
    photo?: null;
    pk: number;
    username: string;
}
export interface Values {
    status: Status;
}
export interface Status {
    1: string;
    2: string;
}
export interface ValuesDiff {
    status?: (string)[] | null;
}
