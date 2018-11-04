import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class IssueCustomAttribute extends AbstractService{
    list()
    {
        return axios.get(`issue-custom-attributes`);
    }

    create()
    {
        return axios.post(`issue-custom-attributes`);
    }

    get()
    {
        return axios.get(`issue-custom-attributes/{issueCustomAttributeId`);
    }

    modify()
    {
        return axios.put(`issue-custom-attributes/{issueCustomAttributeId`);
    }

    modifyPartially()
    {
        return axios.patch(`issue-custom-attributes/{issueCustomAttributeId`);
    }

    delete()
    {
        return axios.delete(`issue-custom-attributes/{issueCustomAttributeId`);
    }

    bulkUpdateOrder()
    {
        return axios.post(`issue-custom-attributes/bulk_update_order`);
    }
}