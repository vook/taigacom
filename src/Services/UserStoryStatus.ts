import {AbstractService} from "../Abstracts/AbstractService";

export class UserStoryStatus extends AbstractService
{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`userstory-statuses`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`userstory-statuses`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`userstory-statuses/{userStoryStatusId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`userstory-statuses/{userStoryStatusId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`userstory-statuses/{userStoryStatusId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`userstory-statuses/{userStoryStatusId}`, this.request);
    }

    async bulkUpdateOrder(): Promise<any>
    {
        return await this.http.post<any>(`userstory-statuses/bulk_update_order`, {}, this.request);
    }
}