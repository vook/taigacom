import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Point extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`points`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`points`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`points/{pointId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`points/{pointId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`points/{pointId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`points/{pointId}`);
    }

    bulkUpdateOrder(): AxiosPromise<>
    {
        return axios.post(`points/bulk_update_order`);
    }
}