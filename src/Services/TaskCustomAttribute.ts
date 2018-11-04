import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class TaskCustomAttribute extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`task-custom-attributes`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`task-custom-attributes`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`task-custom-attributes/{taskCustomAttributeId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`task-custom-attributes/{taskCustomAttributeId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`task-custom-attributes/{taskCustomAttributeId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`task-custom-attributes/{taskCustomAttributeId}`);
    }

    bulkUpdateOrder(): AxiosPromise<>
    {
        return axios.post(`task-custom-attributes/bulk_update_order`);
    }
}