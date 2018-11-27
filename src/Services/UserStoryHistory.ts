import {AbstractService} from "../Abstracts/AbstractService";

export class UserStoryHistory extends AbstractService
{
    async get(): Promise<any>
    {
        return await this.http.get<any>(`history/userstory/{usId}`, this.request);
    }

    async getCommentVersions(): Promise<any>
    {
        return await this.http.get<any>(`history/userstory/{usId}/commentVersions?id={commentId}`, this.request);
    }

    async editComment(): Promise<any>
    {
        return await this.http.post<any>(`history/userstory/{usId}/edit_comment?id={commentId}`, {}, this.request);
    }

    async deleteComment(): Promise<any>
    {
        return await this.http.post<any>(`history/userstory/{usId}/delete_comment?id={commentId}`, {}, this.request);
    }

    async recoverComment(): Promise<any>
    {
        return await this.http.post<any>(`history/userstory/{usId}/undelete_comment?id={commentId}`, {}, this.request);
    }
}