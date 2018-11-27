import {AbstractService} from "../Abstracts/AbstractService";

export class EpicStatus extends AbstractService{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`epic-statuses`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`epic-statuses`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`epic-statuses/{epicStatusId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`epic-statuses/{epicStatusId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`epic-statuses/{epicStatusId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`epic-statuses/{epicStatusId}`, this.request);
    }

    async bulkUpdateOrder(): Promise<any>
    {
        return await this.http.post<any>(`epic-statuses/bulk_update_order`, {}, this.request);
    }
}