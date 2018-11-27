import {AbstractService} from "../Abstracts/AbstractService";

export class TaskAttachment extends AbstractService
{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`tasks/attachments`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`tasks/attachments`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`tasks/attachments/{taskAttachmentId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`tasks/attachments/{taskAttachmentId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`tasks/attachments/{taskAttachmentId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`tasks/attachments/{taskAttachmentId}`, this.request);
    }
}