import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class TaskAttachment extends AbstractService{
    list()
    {
        return axios.get(`tasks/attachments`);
    }

    create()
    {
        return axios.post(`tasks/attachments`);
    }

    get()
    {
        return axios.get(`tasks/attachments/{taskAttachmentId}`);
    }

    modify()
    {
        return axios.put(`tasks/attachments/{taskAttachmentId}`);
    }

    modifyPartially()
    {
        return axios.patch(`tasks/attachments/{taskAttachmentId}`);
    }

    delete()
    {
        return axios.delete(`tasks/attachments/{taskAttachmentId}`);
    }
}