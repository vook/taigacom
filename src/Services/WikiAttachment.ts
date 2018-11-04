import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class WikiAttachment extends AbstractService{
    list()
    {
        return axios.get(`wiki/attachments`);
    }

    create()
    {
        return axios.post(`wiki/attachments`);
    }

    get()
    {
        return axios.get(`wiki/attachments/{wikiPageAttachmentId}`);
    }

    modify()
    {
        return axios.put(`wiki/attachments/{wikiPageAttachmentId}`);
    }

    modifyPartially()
    {
        return axios.patch(`wiki/attachments/{wikiPageAttachmentId}`);
    }

    delete()
    {
        return axios.delete(`wiki/attachments/{wikiPageAttachmentId}`);
    }
}