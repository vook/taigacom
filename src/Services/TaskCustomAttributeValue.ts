import {AbstractService} from "../Abstracts/AbstractService";

export class TaskCustomAttributeValue extends AbstractService
{
    async get(): Promise<any>
    {
        return await this.http.get<any>(`custom-attributes-values/{taskId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`tasks/custom-attributes-values/{taskId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`tasks/custom-attributes-values/{taskId}`, {}, this.request);
    }
}