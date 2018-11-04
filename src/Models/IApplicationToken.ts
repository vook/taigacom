import {IApplication} from "./IApplication";

export interface IApplicationToken {
    application: IApplication;
    auth_code: string;
    id: number;
    next_url: string;
    user: number;
}