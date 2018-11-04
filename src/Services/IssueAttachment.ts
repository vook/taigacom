import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class IssueAttachment extends AbstractService{
    list()
    {
        return axios.get(`issues/attachments`);
    }

    create()
    {
        return axios.post(`issues/attachments`);
    }

    get()
    {
        return axios.get(`issues/attachments/{issueAttachmentId}`);
    }

    modify()
    {
        return axios.put(`issues/attachments/{issueAttachmentId}`);
    }

    modifyPartially()
    {
        return axios.patch(`issues/attachments/{issueAttachmentId}`);
    }

    delete()
    {
        return axios.delete(`issues/attachments/{issueAttachmentId}`);
    }
}