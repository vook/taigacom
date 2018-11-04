import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Jira extends AbstractService{
    getAuthorizationUrl()
    {
        return axios.get(`importers/jira/auth_url`);
    }

    getAuthorizationToken()
    {
        return axios.post(`importers/jira/authorize`);
    }

    getBoards()
    {
        return axios.post(`importers/jira/list_projects`);
    }

    listUsersRelatedToBoard()
    {
        return axios.post(`importers/jira/list_users`);
    }

    importProject()
    {
        return axios.post(`importers/jira/import_project`);
    }
}