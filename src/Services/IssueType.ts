import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class IssueType extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`issue-types`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`issue-types`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`issue-types/{issueTypeId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`issue-types/{issueTypeId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`issue-types/{issueTypeId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`issue-types/{issueTypeId}`);
    }

    bulkUpdateOrder(): AxiosPromise<>
    {
        return axios.post(`issue-types/bulk_update_order`);
    }
}