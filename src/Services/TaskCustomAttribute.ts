import {AbstractService} from "../Abstracts/AbstractService";

export class TaskCustomAttribute extends AbstractService
{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`task-custom-attributes`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`task-custom-attributes`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`task-custom-attributes/{taskCustomAttributeId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`task-custom-attributes/{taskCustomAttributeId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`task-custom-attributes/{taskCustomAttributeId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`task-custom-attributes/{taskCustomAttributeId}`, this.request);
    }

    async bulkUpdateOrder(): Promise<any>
    {
        return await this.http.post<any>(`task-custom-attributes/bulk_update_order`, {}, this.request);
    }
}