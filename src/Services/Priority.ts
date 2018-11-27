import {AbstractService} from "../Abstracts/AbstractService";

export class Priority extends AbstractService{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`priorities`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`priorities`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`priorities/{priorityId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`priorities/{priorityId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`priorities/{priorityId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`priorities/{priorityId}`, this.request);
    }

    async bulkUpdateOrder(): Promise<any>
    {
        return await this.http.post<any>(`priorities/bulk_update_order`, {}, this.request);
    }
}