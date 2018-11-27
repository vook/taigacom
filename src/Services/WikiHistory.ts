import {AbstractService} from "../Abstracts/AbstractService";

export class WikiHistory extends AbstractService
{
    async get(): Promise<any>
    {
        return await this.http.get<any>(`history/wiki/{wikiId}`, this.request);
    }

    async getCommentVersions(): Promise<any>
    {
        return await this.http.post<any>(`history/wiki/{wikiId}/commentVersions?id={commentId}`, {}, this.request);
    }

    async editComment(): Promise<any>
    {
        return await this.http.post<any>(`history/wiki/{wikiId}/edit_comment?id={commentId}`, {}, this.request);
    }

    async deleteComment(): Promise<any>
    {
        return await this.http.post<any>(`history/wiki/{wikiId}/delete_comment?id={commentId}`, {}, this.request);
    }

    async recoverComment(): Promise<any>
    {
        return await this.http.post<any>(`history/wiki/{wikiId}/undelete_comment?id={commentId}`, {}, this.request);
    }
}