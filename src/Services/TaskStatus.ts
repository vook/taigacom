import {AbstractService} from "../Abstracts/AbstractService";

export class TaskStatus extends AbstractService
{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`task-statuses`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`task-statuses`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`task-statuses/{taskStatusId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`task-statuses/{taskStatusId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`task-statuses/{taskStatusId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`task-statuses/{taskStatusId}`, this.request);
    }

    async bulkUpdateOrder(): Promise<any>
    {
        return await this.http.post<any>(`task-statuses/bulk_update_order`, {}, this.request);
    }
}