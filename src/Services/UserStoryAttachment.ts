import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class UserStoryAttachment extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`userstories/attachments`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`userstories/attachments`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`userstories/attachments/{userStoryAttachmentId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`userstories/attachments/{userStoryAttachmentId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`userstories/attachments/{userStoryAttachmentId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`userstories/attachments/{userStoryAttachmentId}`);
    }

}