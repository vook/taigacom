import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class UserStoryAttachment extends AbstractService{
    list()
    {
        return axios.get(`userstories/attachments`);
    }

    create()
    {
        return axios.post(`userstories/attachments`);
    }

    get()
    {
        return axios.get(`userstories/attachments/{userStoryAttachmentId}`);
    }

    modify()
    {
        return axios.put(`userstories/attachments/{userStoryAttachmentId}`);
    }

    modifyPartially()
    {
        return axios.patch(`userstories/attachments/{userStoryAttachmentId}`);
    }

    delete()
    {
        return axios.delete(`userstories/attachments/{userStoryAttachmentId}`);
    }

}