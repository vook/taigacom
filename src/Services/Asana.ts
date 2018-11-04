import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Asana extends AbstractService{
    getAuthorizationUrl()
    {
        return axios.get(`importers/asana/auth_url`);
    }

    getAuthorizationToken()
    {
        return axios.post(`importers/asana/authorize`);
    }

    getBoards()
    {
        return axios.post(`importers/asana/list_projects`);
    }

    listUsersRelatedToBoard()
    {
        return axios.post(`importers/asana/list_users`);
    }

    importProject()
    {
        return axios.post(`importers/asana/import_project`);
    }
}