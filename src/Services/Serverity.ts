import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Serverity extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`severities`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`severities`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`severities/{severityId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`severities/{severityId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`severities/{severityId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`severities/{severityId}`);
    }

    bulkUpdateOrder(): AxiosPromise<>
    {
        return axios.post(`severities/bulk_update_order`);
    }
}