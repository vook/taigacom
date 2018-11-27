import {AbstractService} from "../Abstracts/AbstractService";

export class NotifyPolicy extends AbstractService{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`notify-policies`, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`notify-policies/{policyId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`notify-policies/{policyId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`notify-policies/{policyId}`, {}, this.request);
    }
}