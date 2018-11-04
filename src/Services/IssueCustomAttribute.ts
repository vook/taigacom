import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class IssueCustomAttribute extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`issue-custom-attributes`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`issue-custom-attributes`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`issue-custom-attributes/{issueCustomAttributeId`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`issue-custom-attributes/{issueCustomAttributeId`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`issue-custom-attributes/{issueCustomAttributeId`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`issue-custom-attributes/{issueCustomAttributeId`);
    }

    bulkUpdateOrder(): AxiosPromise<>
    {
        return axios.post(`issue-custom-attributes/bulk_update_order`);
    }
}