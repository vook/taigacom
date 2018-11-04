import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Timeline extends AbstractService{
    listUser(): AxiosPromise<>
    {
        return axios.get(`timeline/user/{userId}`);
    }

    listProfile(): AxiosPromise<>
    {
        return axios.get(`timeline/profile/{userId}`);
    }

    listProject(): AxiosPromise<>
    {
        return axios.get(`timeline/project/{projectId}`);
    }
}