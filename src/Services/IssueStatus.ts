import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class IssueStatus extends AbstractService{
    list()
    {
        return axios.get(`issue-statuses`);
    }

    create()
    {
        return axios.post(`issue-statuses`);
    }

    get()
    {
        return axios.get(`issue-statuses/{issueStatusId}`);
    }

    modify()
    {
        return axios.put(`issue-statuses/{issueStatusId}`);
    }

    modifyPartially()
    {
        return axios.post(`issue-statuses/{issueStatusId}`);
    }

    delete()
    {
        return axios.delete(`issue-statuses/{issueStatusId}`);
    }

    bulkUpdateOrder()
    {
        return axios.post(`issue-statuses/bulk_update_order`);
    }
}