import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class EpicAttachment extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`epics/attachments`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`epics/attachments`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`epics/attachments/{epicAttachmentId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`epics/attachments/{epicAttachmentId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`epics/attachments/{epicAttachmentId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`epics/attachments/{epicAttachmentId}`);
    }
}