import {AbstractService} from "../Abstracts/AbstractService";

export class Webhook extends AbstractService
{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`webhooks`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`webhooks`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`webhooks/{webhookId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`webhooks/{webhookId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`webhooks/{webhookId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`webhooks/{webhookId}`, this.request);
    }

    async test(): Promise<any>
    {
        return await this.http.post<any>(`webhooks/{webhookId}/test`, {}, this.request);
    }

    async listLogs(): Promise<any>
    {
        return await this.http.get<any>(`webhooklogs`, this.request);
    }

    async getLog(): Promise<any>
    {
        return await this.http.get<any>(`webhooklogs/{webhookLogId}`, this.request);
    }

    async resendLogRequest(): Promise<any>
    {
        return await this.http.post<any>(`webhooklogs/{webhookLogId}/resend`, {}, this.request);
    }
}