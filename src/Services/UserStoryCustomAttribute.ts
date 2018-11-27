import {AbstractService} from "../Abstracts/AbstractService";

export class UserStoryCustomAttribute extends AbstractService
{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`userstory-custom-attributes`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`userstory-custom-attributes`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`userstory-custom-attributes/{userStoryCustomAttributeId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`userstory-custom-attributes/{userStoryCustomAttributeId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`userstory-custom-attributes/{userStoryCustomAttributeId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`userstory-custom-attributes/{userStoryCustomAttributeId}`, this.request);
    }

    async bulkUpdateOrder(): Promise<any>
    {
        return await this.http.post<any>(`userstory-custom-attributes/bulk_update_order`, {}, this.request);
    }
}