import {AbstractService} from "../Abstracts/AbstractService";

export class EpicAttachment extends AbstractService
{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`epics/attachments`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`epics/attachments`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`epics/attachments/{epicAttachmentId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`epics/attachments/{epicAttachmentId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`epics/attachments/{epicAttachmentId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`epics/attachments/{epicAttachmentId}`, this.request);
    }
}