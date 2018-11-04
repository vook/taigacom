import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class UserStorage extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`user-storage`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`user-storage`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`user-storage/{key}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`user-storage/{key}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`user-storage/{key}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`user-storage/{key}`);
    }
}