import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Github extends AbstractService{
    getAuthorizationUrl(): AxiosPromise<>
    {
        return axios.get(`importers/github/auth_url`);
    }

    getAuthorizationToken(): AxiosPromise<>
    {
        return axios.post(`importers/github/authorize`);
    }

    getBoards(): AxiosPromise<>
    {
        return axios.post(`importers/github/list_projects`);
    }

    listUsersRelatedToBoard(): AxiosPromise<>
    {
        return axios.post(`importers/github/list_users`);
    }

    importProject(): AxiosPromise<>
    {
        return axios.post(`importers/github/import_project`);
    }
}