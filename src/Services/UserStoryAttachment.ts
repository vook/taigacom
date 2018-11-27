import {AbstractService} from "../Abstracts/AbstractService";

export class UserStoryAttachment extends AbstractService
{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`userstories/attachments`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`userstories/attachments`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`userstories/attachments/{userStoryAttachmentId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`userstories/attachments/{userStoryAttachmentId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`userstories/attachments/{userStoryAttachmentId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`userstories/attachments/{userStoryAttachmentId}`, this.request);
    }

}