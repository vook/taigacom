import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class TaskStatus extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`task-statuses`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`task-statuses`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`task-statuses/{taskStatusId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`task-statuses/{taskStatusId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`task-statuses/{taskStatusId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`task-statuses/{taskStatusId}`);
    }

    bulkUpdateOrder(): AxiosPromise<>
    {
        return axios.post(`task-statuses/bulk_update_order`);
    }
}