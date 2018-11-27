import {AbstractService} from "../Abstracts/AbstractService";

export class Point extends AbstractService{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`points`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`points`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`points/{pointId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`points/{pointId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`points/{pointId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`points/{pointId}`, this.request);
    }

    async bulkUpdateOrder(): Promise<any>
    {
        return await this.http.post<any>(`points/bulk_update_order`, {}, this.request);
    }
}