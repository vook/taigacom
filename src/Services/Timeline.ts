import {AbstractService} from "../Abstracts/AbstractService";

export class Timeline extends AbstractService
{
    async listUser(): Promise<any>
    {
        return await this.http.get<any>(`timeline/user/{userId}`, this.request);
    }

    async listProfile(): Promise<any>
    {
        return await this.http.get<any>(`timeline/profile/{userId}`, this.request);
    }

    async listProject(): Promise<any>
    {
        return await this.http.get<any>(`timeline/project/{projectId}`, this.request);
    }
}