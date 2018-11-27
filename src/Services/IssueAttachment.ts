import {AbstractService} from "../Abstracts/AbstractService";

export class IssueAttachment extends AbstractService{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`issues/attachments`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`issues/attachments`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`issues/attachments/{issueAttachmentId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`issues/attachments/{issueAttachmentId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`issues/attachments/{issueAttachmentId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`issues/attachments/{issueAttachmentId}`, this.request);
    }
}