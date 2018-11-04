import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class EpicCustomAttribute extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`epic-custom-attributes`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`epic-custom-attributes`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`epic-custom-attributes/{epicCustomAttributeId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`epic-custom-attributes/{epicCustomAttributeId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`epic-custom-attributes/{epicCustomAttributeId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`epic-custom-attributes/{epicCustomAttributeId}`);
    }

    bulkUpdateOrder(): AxiosPromise<>
    {
        return axios.post(`epic-custom-attributes/bulk_update_order`);
    }
}