import {AbstractService} from "../Abstracts/AbstractService";

export class WikiLink extends AbstractService
{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`wiki-links`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`wiki-links`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`wiki-links/{wikiLinkId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`wiki-links/{wikiLinkId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`wiki-links/{wikiLinkId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`wiki-links/{wikiLinkId}`, this.request);
    }
}