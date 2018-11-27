import {AbstractService} from "../Abstracts/AbstractService";

export class WikiAttachment extends AbstractService
{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`wiki/attachments`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`wiki/attachments`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`wiki/attachments/{wikiPageAttachmentId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`wiki/attachments/{wikiPageAttachmentId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`wiki/attachments/{wikiPageAttachmentId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`wiki/attachments/{wikiPageAttachmentId}`, this.request);
    }
}