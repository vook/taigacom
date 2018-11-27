import {AbstractService} from "../Abstracts/AbstractService";

export class Jira extends AbstractService{
    async getAuthorizationUrl(): Promise<any>
    {
        return await this.http.get<any>(`importers/jira/auth_url`, this.request);
    }

    async getAuthorizationToken(): Promise<any>
    {
        return await this.http.post<any>(`importers/jira/authorize`, {}, this.request);
    }

    async getBoards(): Promise<any>
    {
        return await this.http.post<any>(`importers/jira/list_projects`, {}, this.request);
    }

    async listUsersRelatedToBoard(): Promise<any>
    {
        return await this.http.post<any>(`importers/jira/list_users`, {}, this.request);
    }

    async importProject(): Promise<any>
    {
        return await this.http.post<any>(`importers/jira/import_project`, {}, this.request);
    }
}