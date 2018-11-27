import {AbstractService} from "../Abstracts/AbstractService";

export class Wiki extends AbstractService
{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`wiki`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`wiki`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`wiki/{wikiId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`wiki/{wikiPageId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`wiki/{wikiPageId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`wiki/{wikiPageId}`, this.request);
    }

    async watch(): Promise<any>
    {
        return await this.http.post<any>(`wiki/{wikiPageId}/watch`, {}, this.request);
    }

    async unwatch(): Promise<any>
    {
        return await this.http.post<any>(`v1/wiki/{wikiPageId}/unwatch`, {}, this.request);
    }

    async getWatchers(): Promise<any>
    {
        return await this.http.get<any>(`wiki/{wikiPageId}/watchers`, this.request);
    }
}