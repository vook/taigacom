import {AbstractService} from "../Abstracts/AbstractService";

export class EpicRelatedUserStory extends AbstractService{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`epics/{epicId}/related_userstories`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`epics/{epicId}/related_userstories`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`epics/{epicId}/related_userstories/{userStoryId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`epics/{epicId}/related_userstories/{userStoryId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`epics/{epicId}/related_userstories/{userStoryId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`epics/{epicId}/related_userstories/{userStoryId}`, this.request);
    }

    async bulkCreate(): Promise<any>
    {
        return await this.http.post<any>(`epics/{epicId}/related_userstories/bulk_create`, {}, this.request);
    }
}