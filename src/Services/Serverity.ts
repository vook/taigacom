import {AbstractService} from "../Abstracts/AbstractService";

export class Serverity extends AbstractService
{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`severities`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`severities`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`severities/{severityId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`severities/{severityId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`severities/{severityId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`severities/{severityId}`, this.request);
    }

    async bulkUpdateOrder(): Promise<any>
    {
        return await this.http.post<any>(`severities/bulk_update_order`, {}, this.request);
    }
}