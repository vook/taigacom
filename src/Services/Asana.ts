import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Asana extends AbstractService{
    getAuthorizationUrl(): AxiosPromise<>
    {
        return axios.get(`importers/asana/auth_url`);
    }

    getAuthorizationToken(): AxiosPromise<>
    {
        return axios.post(`importers/asana/authorize`);
    }

    getBoards(): AxiosPromise<>
    {
        return axios.post(`importers/asana/list_projects`);
    }

    listUsersRelatedToBoard(): AxiosPromise<>
    {
        return axios.post(`importers/asana/list_users`);
    }

    importProject(): AxiosPromise<>
    {
        return axios.post(`importers/asana/import_project`);
    }
}