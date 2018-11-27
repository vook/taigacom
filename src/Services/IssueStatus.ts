import {AbstractService} from "../Abstracts/AbstractService";

export class IssueStatus extends AbstractService{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`issue-statuses`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`issue-statuses`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`issue-statuses/{issueStatusId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`issue-statuses/{issueStatusId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.post<any>(`issue-statuses/{issueStatusId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`issue-statuses/{issueStatusId}`, this.request);
    }

    async bulkUpdateOrder(): Promise<any>
    {
        return await this.http.post<any>(`issue-statuses/bulk_update_order`, {}, this.request);
    }
}