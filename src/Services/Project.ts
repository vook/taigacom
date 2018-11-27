import {AbstractService} from "../Abstracts/AbstractService";
import {IProject} from "../Models/IProject";

export class Project extends AbstractService
{
    async list(): Promise<IProject[]>
    {
        return await this.http.get<any>(`projects`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`projects`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`projects/{projectId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`projects/{projectId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`projects/{projectId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`projects/{projectId}`, this.request);
    }

    async bulkUpdateOrder(): Promise<any>
    {
        return await this.http.post<any>(`projects/bulk_update_order`, {}, this.request);
    }

    async getModules(): Promise<any>
    {
        return await this.http.get<any>(`projects/{projectId}/modules`, this.request);
    }

    async modifyPartiallyModules(): Promise<any>
    {
        return await this.http.patch<any>(`projects/{projectId}/modules`, {}, this.request);
    }

    async getStats(): Promise<any>
    {
        return await this.http.get<any>(`projects/{projectId}/stats`, this.request);
    }

    async getIssueStats(): Promise<any>
    {
        return await this.http.get<any>(`projects/{projectId}/issues_stats`, this.request);
    }

    async getTagsColors(): Promise<any>
    {
        return await this.http.get<any>(`projects/{projectId}/tags_colors`, this.request);
    }

    async createTag(): Promise<any>
    {
        return await this.http.post<any>(`projects/{projectId}/create_tag`, {}, this.request);
    }

    async editTag(): Promise<any>
    {
        return await this.http.post<any>(`projects/{projectId}/edit_tag`, {}, this.request);
    }

    async deleteTag(): Promise<any>
    {
        return await this.http.post<any>(`projects/{projectId}/delete_tag`, {}, this.request);
    }

    async mixTags(): Promise<any>
    {
        return await this.http.post<any>(`projects/{projectId}/mix_tags`, {}, this.request);
    }

    async like(): Promise<any>
    {
        return await this.http.post<any>(`projects/{projectId}/like`, {}, this.request);
    }

    async unlike(): Promise<any>
    {
        return await this.http.post<any>(`projects/{projectId}/unlike`, {}, this.request);
    }

    async getFans(): Promise<any>
    {
        return await this.http.get<any>(`projects/{projectId}/fans`, this.request);
    }

    async watch(): Promise<any>
    {
        return await this.http.post<any>(`projects/{projectId}/watch`, {}, this.request);
    }

    async unwatch(): Promise<any>
    {
        return await this.http.post<any>(`projects/{projectId}/unwatch`, {}, this.request);
    }

    async getWatchers(): Promise<any>
    {
        return await this.http.get<any>(`projects/{projectId}/watchers`, this.request);
    }

    async createTemplate(): Promise<any>
    {
        return await this.http.post<any>(`projects/{projectId}/create_template`, {}, this.request);
    }

    async leave(): Promise<any>
    {
        return await this.http.post<any>(`projects/{projectId}/leave`, {}, this.request);
    }

    async changeLogo(): Promise<any>
    {
        return await this.http.post<any>(`projects/{projectId}/change_logo`, {}, this.request);
    }

    async removeLogo(): Promise<any>
    {
        return await this.http.post<any>(`projects/{projectId}/remove_logo`, {}, this.request);
    }

    async transferValidateToken(): Promise<any>
    {
        return await this.http.post<any>(`projects/{projectId}/transfer_validate_token`, {}, this.request);
    }

    async transferRequest(): Promise<any>
    {
        return await this.http.post<any>(`projects/{projectId}/transfer_request`, {}, this.request);
    }

    async transferStart(): Promise<any>
    {
        return await this.http.post<any>(`projects/{projectId}/transfer_start`, {}, this.request);
    }

    async transferAccept(): Promise<any>
    {
        return await this.http.post<any>(`projects/{projectId}/transfer_accept`, {}, this.request);
    }

    async transferReject(): Promise<any>
    {
        return await this.http.post<any>(`projects/{projectId}/transfer_reject`, {}, this.request);
    }

    async duplicateProject(): Promise<any>
    {
        return await this.http.post<any>(`projects/{projectId}/duplicate`, {}, this.request);
    }
}