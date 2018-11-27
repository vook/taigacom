import {AbstractService} from "../Abstracts/AbstractService";

export class IssueType extends AbstractService{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`issue-types`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`issue-types`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`issue-types/{issueTypeId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`issue-types/{issueTypeId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`issue-types/{issueTypeId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`issue-types/{issueTypeId}`, this.request);
    }

    async bulkUpdateOrder(): Promise<any>
    {
        return await this.http.post<any>(`issue-types/bulk_update_order`, {}, this.request);
    }
}