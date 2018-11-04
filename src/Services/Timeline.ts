import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Timeline extends AbstractService{
    listUser()
    {
        return axios.get(`timeline/user/{userId}`);
    }

    listProfile()
    {
        return axios.get(`timeline/profile/{userId}`);
    }

    listProject()
    {
        return axios.get(`timeline/project/{projectId}`);
    }
}