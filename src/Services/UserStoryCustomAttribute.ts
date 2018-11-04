import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class UserStoryCustomAttribute extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`userstory-custom-attributes`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`userstory-custom-attributes`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`userstory-custom-attributes/{userStoryCustomAttributeId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`userstory-custom-attributes/{userStoryCustomAttributeId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`userstory-custom-attributes/{userStoryCustomAttributeId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`userstory-custom-attributes/{userStoryCustomAttributeId}`);
    }

    bulkUpdateOrder(): AxiosPromise<>
    {
        return axios.post(`userstory-custom-attributes/bulk_update_order`);
    }
}