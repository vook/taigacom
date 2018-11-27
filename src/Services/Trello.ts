import {AbstractService} from "../Abstracts/AbstractService";

export class Trello extends AbstractService
{
    async getAuthorizationUrl(): Promise<any>
    {
        return await this.http.get<any>(`importers/trello/auth_url`, this.request);
    }

    async getAuthorizationToken(): Promise<any>
    {
        return await this.http.post<any>(`importers/trello/authorize`, {}, this.request);
    }

    async getBoards(): Promise<any>
    {
        return await this.http.post<any>(`importers/trello/list_projects`, {}, this.request);
    }

    async listUsersRelatedToBoard(): Promise<any>
    {
        return await this.http.post<any>(`importers/trello/list_users`, {}, this.request);
    }

    async importProject(): Promise<any>
    {
        return await this.http.post<any>(`importers/trello/import_project`, {}, this.request);
    }
}