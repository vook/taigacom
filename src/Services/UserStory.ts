import {AbstractService} from "../Abstracts/AbstractService";

export class UserStory extends AbstractService
{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`userstories`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`userstories`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`userstories/{userStoryId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`userstories/{userStoryId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`userstories/{userStoryId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`userstories/{userStoryId}`, this.request);
    }

    async bulkCreate(): Promise<any>
    {
        return await this.http.post<any>(`userstories/bulk_create`, {}, this.request);
    }

    async bulkUpdateBacklogOrder(): Promise<any>
    {
        return await this.http.post<any>(`userstories/bulk_update_backlog_order`, {}, this.request);
    }

    async bulkUpdateKanbanOrder(): Promise<any>
    {
        return await this.http.post<any>(`userstories/bulk_update_kanban_order`, {}, this.request);
    }

    async bulkUpdateSprintOrder(): Promise<any>
    {
        return await this.http.post<any>(`userstories/bulk_update_sprint_order`, {}, this.request);
    }

    async bulkUpdateMilestone(): Promise<any>
    {
        return await this.http.post<any>(`userstories/bulk_update_milestone`, {}, this.request);
    }

    async getFiltersData(): Promise<any>
    {
        return await this.http.get<any>(`userstories/filters_data?project={projectId}`, this.request);
    }

    async addStar(): Promise<any>
    {
        return await this.http.post<any>(`userstories/{userStoryId}/upvote`, {}, this.request);
    }

    async removeStar(): Promise<any>
    {
        return await this.http.post<any>(`userstories/{userStoryId}/downvote`, {}, this.request);
    }

    async getVoters(): Promise<any>
    {
        return await this.http.get<any>(`userstories/{userStoryId}/voters`, this.request);
    }

    async watch(): Promise<any>
    {
        return await this.http.post<any>(`userstories/{userStoryId}/watch`, {}, this.request);
    }

    async unwatch(): Promise<any>
    {
        return await this.http.post<any>(`userstories/{userStoryId}/unwatch`, {}, this.request);
    }

    async getWatchers(): Promise<any>
    {
        return await this.http.get<any>(`userstories/{userStoryId}/watchers`, this.request);
    }
}