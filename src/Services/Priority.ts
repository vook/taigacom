import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Priority extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`priorities`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`priorities`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`priorities/{priorityId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`priorities/{priorityId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`priorities/{priorityId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`priorities/{priorityId}`);
    }

    bulkUpdateOrder(): AxiosPromise<>
    {
        return axios.post(`priorities/bulk_update_order`);
    }
}