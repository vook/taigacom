import {AbstractService} from "../Abstracts/AbstractService";

export class IssueCustomAttributeValue extends AbstractService{
    async get(): Promise<any>
    {
        return await this.http.get<any>(`issues/custom-attributes-values/{issueId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`issues/custom-attributes-values/{issueId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`issues/custom-attributes-values/{issueId}`, {}, this.request);
    }
}