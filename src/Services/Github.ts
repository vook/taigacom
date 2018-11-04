import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Github extends AbstractService{
    getAuthorizationUrl()
    {
        return axios.get(`importers/github/auth_url`);
    }

    getAuthorizationToken()
    {
        return axios.post(`importers/github/authorize`);
    }

    getBoards()
    {
        return axios.post(`importers/github/list_projects`);
    }

    listUsersRelatedToBoard()
    {
        return axios.post(`importers/github/list_users`);
    }

    importProject()
    {
        return axios.post(`importers/github/import_project`);
    }
}