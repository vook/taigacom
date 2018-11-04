import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class IssueType extends AbstractService{
    list()
    {
        return axios.get(`issue-types`);
    }

    create()
    {
        return axios.post(`issue-types`);
    }

    get()
    {
        return axios.get(`issue-types/{issueTypeId}`);
    }

    modify()
    {
        return axios.put(`issue-types/{issueTypeId}`);
    }

    modifyPartially()
    {
        return axios.patch(`issue-types/{issueTypeId}`);
    }

    delete()
    {
        return axios.delete(`issue-types/{issueTypeId}`);
    }

    bulkUpdateOrder()
    {
        return axios.post(`issue-types/bulk_update_order`);
    }
}