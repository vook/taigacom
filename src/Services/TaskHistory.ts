import {AbstractService} from "../Abstracts/AbstractService";

export class TaskHistory extends AbstractService
{
    async get(): Promise<any>
    {
        return await this.http.get<any>(`history/task/{taskId}`, this.request);
    }

    async getCommentVersions(): Promise<any>
    {
        return await this.http.post<any>(`history/task/{taskId}/commentVersions?id={commentId}`, {}, this.request);
    }

    async editComment(): Promise<any>
    {
        return await this.http.post<any>(`history/task/{taskId}/edit_comment?id={commentId}`, {}, this.request);
    }

    async deleteComment(): Promise<any>
    {
        return await this.http.post<any>(`history/task/{taskId}/delete_comment?id={commentId}`, {}, this.request);
    }

    async recoverComment(): Promise<any>
    {
        return await this.http.post<any>(`history/task/{taskId}/undelete_comment?id={commentId}`, {}, this.request);
    }
}