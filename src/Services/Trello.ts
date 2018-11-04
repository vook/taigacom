import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Trello extends AbstractService{
    getAuthorizationUrl()
    {
        return axios.get(`importers/trello/auth_url`);
    }

    getAuthorizationToken()
    {
        return axios.post(`importers/trello/authorize`);
    }

    getBoards()
    {
        return axios.post(`importers/trello/list_projects`);
    }

    listUsersRelatedToBoard()
    {
        return axios.post(`importers/trello/list_users`);
    }

    importProject()
    {
        return axios.post(`importers/trello/import_project`);
    }
}