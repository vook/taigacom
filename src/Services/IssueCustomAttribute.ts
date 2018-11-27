import {AbstractService} from "../Abstracts/AbstractService";

export class IssueCustomAttribute extends AbstractService{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`issue-custom-attributes`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`issue-custom-attributes`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`issue-custom-attributes/{issueCustomAttributeId`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`issue-custom-attributes/{issueCustomAttributeId`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`issue-custom-attributes/{issueCustomAttributeId`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`issue-custom-attributes/{issueCustomAttributeId`, this.request);
    }

    async bulkUpdateOrder(): Promise<any>
    {
        return await this.http.post<any>(`issue-custom-attributes/bulk_update_order`, {}, this.request);
    }
}