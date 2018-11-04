import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Trello extends AbstractService{
    getAuthorizationUrl(): AxiosPromise<>
    {
        return axios.get(`importers/trello/auth_url`);
    }

    getAuthorizationToken(): AxiosPromise<>
    {
        return axios.post(`importers/trello/authorize`);
    }

    getBoards(): AxiosPromise<>
    {
        return axios.post(`importers/trello/list_projects`);
    }

    listUsersRelatedToBoard(): AxiosPromise<>
    {
        return axios.post(`importers/trello/list_users`);
    }

    importProject(): AxiosPromise<>
    {
        return axios.post(`importers/trello/import_project`);
    }
}