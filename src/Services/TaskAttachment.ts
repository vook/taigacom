import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class TaskAttachment extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`tasks/attachments`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`tasks/attachments`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`tasks/attachments/{taskAttachmentId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`tasks/attachments/{taskAttachmentId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`tasks/attachments/{taskAttachmentId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`tasks/attachments/{taskAttachmentId}`);
    }
}