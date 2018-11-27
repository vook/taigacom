import {AbstractService} from "../Abstracts/AbstractService";

export class Asana extends AbstractService
{
    async getAuthorizationUrl(): Promise<any>
    {
        return await this.http.get<any>(`importers/asana/auth_url`, this.request);
    }

    async getAuthorizationToken(): Promise<any>
    {
        return await this.http.post<any>(`importers/asana/authorize`, {}, this.request);
    }

    async getBoards(): Promise<any>
    {
        return await this.http.post<any>(`importers/asana/list_projects`, {}, this.request);
    }

    async listUsersRelatedToBoard(): Promise<any>
    {
        return await this.http.post<any>(`importers/asana/list_users`, {}, this.request);
    }

    async importProject(): Promise<any>
    {
        return await this.http.post<any>(`importers/asana/import_project`, {}, this.request);
    }
}