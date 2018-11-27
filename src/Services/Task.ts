import {AbstractService} from "../Abstracts/AbstractService";

export class Task extends AbstractService
{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`tasks`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`tasks`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`tasks/{taskId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`tasks/{taskId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`tasks/{taskId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`tasks/{taskId}`, this.request);
    }

    async bulkCreate(): Promise<any>
    {
        return await this.http.post<any>(`tasks/bulk_create`, {}, this.request);
    }

    async getFiltersData(): Promise<any>
    {
        return await this.http.get<any>(`tasks/filters_data?project={projectId}`, this.request);
    }

    async addStar(): Promise<any>
    {
        return await this.http.post<any>(`tasks/{taskId}/upvote`, {}, this.request);
    }

    async removeStar(): Promise<any>
    {
        return await this.http.post<any>(`tasks/{taskId}/downvote`, {}, this.request);
    }

    async getVoters(): Promise<any>
    {
        return await this.http.get<any>(`tasks/{taskId}/voters`, this.request);
    }

    async watch(): Promise<any>
    {
        return await this.http.post<any>(`tasks/{taskId}/watch`, {}, this.request);
    }

    async unwatch(): Promise<any>
    {
        return await this.http.post<any>(`tasks/{taskId}/unwatch`, {}, this.request);
    }

    async getWatchers(): Promise<any>
    {
        return await this.http.get<any>(`tasks/{taskId}/watchers`, this.request);
    }
}