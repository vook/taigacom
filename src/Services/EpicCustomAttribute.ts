import {AbstractService} from "../Abstracts/AbstractService";

export class EpicCustomAttribute extends AbstractService{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`epic-custom-attributes`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`epic-custom-attributes`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`epic-custom-attributes/{epicCustomAttributeId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`epic-custom-attributes/{epicCustomAttributeId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`epic-custom-attributes/{epicCustomAttributeId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`epic-custom-attributes/{epicCustomAttributeId}`, this.request);
    }

    async bulkUpdateOrder(): Promise<any>
    {
        return await this.http.post<any>(`epic-custom-attributes/bulk_update_order`, {}, this.request);
    }
}