import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class WikiAttachment extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`wiki/attachments`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`wiki/attachments`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`wiki/attachments/{wikiPageAttachmentId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`wiki/attachments/{wikiPageAttachmentId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`wiki/attachments/{wikiPageAttachmentId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`wiki/attachments/{wikiPageAttachmentId}`);
    }
}