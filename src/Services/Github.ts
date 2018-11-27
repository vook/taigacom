import {AbstractService} from "../Abstracts/AbstractService";

export class Github extends AbstractService{
    async getAuthorizationUrl(): Promise<any>
    {
        return await this.http.get<any>(`importers/github/auth_url`, this.request);
    }

    async getAuthorizationToken(): Promise<any>
    {
        return await this.http.post<any>(`importers/github/authorize`, {}, this.request);
    }

    async getBoards(): Promise<any>
    {
        return await this.http.post<any>(`importers/github/list_projects`, {}, this.request);
    }

    async listUsersRelatedToBoard(): Promise<any>
    {
        return await this.http.post<any>(`importers/github/list_users`, {}, this.request);
    }

    async importProject(): Promise<any>
    {
        return await this.http.post<any>(`importers/github/import_project`, {}, this.request);
    }
}