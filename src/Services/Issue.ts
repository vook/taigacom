import {AbstractService} from "../Abstracts/AbstractService";

export class Issue extends AbstractService{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`issues`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`issues`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`issues/{issueId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`issues/{issueId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`issues/{issueId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`issues/{issueId}`, this.request);
    }

    async bulkCreate(): Promise<any>
    {
        return await this.http.post<any>(`issues/bulk_create`, {}, this.request);
    }

    async getFiltersData(): Promise<any>
    {
        return await this.http.get<any>(`issues/filters_data?project={projectId}`, this.request);
    }

    async addStar(): Promise<any>
    {
        return await this.http.post<any>(`issues/{issueId}/upvote`, {}, this.request);
    }

    async removeStar(): Promise<any>
    {
        return axios.post<any>(`issues/{issueId}/downvote`, {}, this.request);
    }

    async getVoters(): Promise<any>
    {
        return await this.http.get<any>(`issues/{issueId}/voters`, this.request);
    }

    async watch(): Promise<any>
    {
        return await this.http.post<any>(`issues/{issueId}/watch`, {}, this.request);
    }

    async unwatch(): Promise<any>
    {
        return await this.http.post<any>(`issues/{issueId}/unwatch`, {}, this.request);
    }

    async getWatchers(): Promise<any>
    {
        return await this.http.get<any>(`issues/{issueId}/watchers`, this.request);
    }
}