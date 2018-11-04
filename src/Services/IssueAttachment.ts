import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class IssueAttachment extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`issues/attachments`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`issues/attachments`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`issues/attachments/{issueAttachmentId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`issues/attachments/{issueAttachmentId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`issues/attachments/{issueAttachmentId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`issues/attachments/{issueAttachmentId}`);
    }
}