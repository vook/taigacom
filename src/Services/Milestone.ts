import {AbstractService} from "../Abstracts/AbstractService";

export class Milestone extends AbstractService{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`milestones`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`milestones`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`milestones/{milestoneId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`milestones/{milestoneId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`milestones/{milestoneId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`milestones/{milestoneId}`, this.request);
    }

    async getStats(): Promise<any>
    {
        return await this.http.get<any>(`milestones/{milestoneId}/stats`, this.request);
    }

    async watch(): Promise<any>
    {
        return await this.http.post<any>(`milestones/{milestoneId}/watch`, {}, this.request);
    }

    async unwatch(): Promise<any>
    {
        return await this.http.post<any>(`milestones/{milestoneId}/unwatch`, {}, this.request);
    }

    async getWatchers(): Promise<any>
    {
        return await this.http.get<any>(`milestones/{milestoneId}/watchers`, this.request);
    }
}