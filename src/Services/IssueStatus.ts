import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class IssueStatus extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`issue-statuses`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`issue-statuses`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`issue-statuses/{issueStatusId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`issue-statuses/{issueStatusId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.post(`issue-statuses/{issueStatusId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`issue-statuses/{issueStatusId}`);
    }

    bulkUpdateOrder(): AxiosPromise<>
    {
        return axios.post(`issue-statuses/bulk_update_order`);
    }
}