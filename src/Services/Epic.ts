import {AbstractService} from "../Abstracts/AbstractService";

export class Epic extends AbstractService
{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`epics`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`epics`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`epics/{epicId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`epics/{epicId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`epics/{epicId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`epics/{epicId}`, this.request);
    }

    async bulkCreate(): Promise<any>
    {
        return await this.http.post<any>(`epics/bulk_create`, {}, this.request);
    }

    async getFiltersData(): Promise<any>
    {
        return await this.http.get<any>(`epics/filters_data?project={projectId}`, this.request);
    }

    async addStar(): Promise<any>
    {
        return await this.http.post<any>(`epics/{epicId}/upvote`, {}, this.request);
    }

    async removeStar(): Promise<any>
    {
        return await this.http.post<any>(`epics/{epicId}/downvote`, {}, this.request);
    }

    async getVoters(): Promise<any>
    {
        return await this.http.get<any>(`epics/{epicId}/voters`, this.request);
    }

    async watch(): Promise<any>
    {
        return await this.http.post<any>(`epics/{epicId}/watch`, {}, this.request);
    }

    async unwatch(): Promise<any>
    {
        return await this.http.post<any>(`epics/{epicId}/unwatch`, {}, this.request);
    }

    async getWatchers(): Promise<any>
    {
        return await this.http.get<any>(`epics/{epicId}/watchers`, this.request);
    }
}