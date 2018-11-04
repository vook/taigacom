import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class EpicAttachment extends AbstractService{
    list()
    {
        return axios.get(`epics/attachments`);
    }

    create()
    {
        return axios.post(`epics/attachments`);
    }

    get()
    {
        return axios.get(`epics/attachments/{epicAttachmentId}`);
    }

    modify()
    {
        return axios.put(`epics/attachments/{epicAttachmentId}`);
    }

    modifyPartially()
    {
        return axios.patch(`epics/attachments/{epicAttachmentId}`);
    }

    delete()
    {
        return axios.delete(`epics/attachments/{epicAttachmentId}`);
    }
}