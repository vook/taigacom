import {AbstractService} from "../Abstracts/AbstractService";

export class IssueHistory extends AbstractService{
    async get(): Promise<any>
    {
        return await this.http.get<any>(`history/issue/{issueId}`, this.request);
    }

    async getCommentVersions(): Promise<any>
    {
        return await this.http.post<any>(`history/issue/{issueId}/commentVersions?id={commentId}`, {}, this.request);
    }

    async editComment(): Promise<any>
    {
        return await this.http.post<any>(`history/issue/{issueId}/edit_comment?id={commentId}`, {}, this.request);
    }

    async deleteComment(): Promise<any>
    {
        return await this.http.post<any>(`history/issue/{issueId}/delete_comment?id={commentId}`, {}, this.request);
    }

    async recoverComment(): Promise<any>
    {
        return await this.http.post<any>(`history/issue/{issueId}/undelete_comment?id={commentId}`, {}, this.request);
    }
}