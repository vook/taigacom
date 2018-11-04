import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Jira extends AbstractService{
    getAuthorizationUrl(): AxiosPromise<>
    {
        return axios.get(`importers/jira/auth_url`);
    }

    getAuthorizationToken(): AxiosPromise<>
    {
        return axios.post(`importers/jira/authorize`);
    }

    getBoards(): AxiosPromise<>
    {
        return axios.post(`importers/jira/list_projects`);
    }

    listUsersRelatedToBoard(): AxiosPromise<>
    {
        return axios.post(`importers/jira/list_users`);
    }

    importProject(): AxiosPromise<>
    {
        return axios.post(`importers/jira/import_project`);
    }
}