import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class EpicStatus extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`epic-statuses`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`epic-statuses`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`epic-statuses/{epicStatusId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`epic-statuses/{epicStatusId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`epic-statuses/{epicStatusId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`epic-statuses/{epicStatusId}`);
    }

    bulkUpdateOrder(): AxiosPromise<>
    {
        return axios.post(`epic-statuses/bulk_update_order`);
    }
}