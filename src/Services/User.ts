import {AbstractService} from "../Abstracts/AbstractService";

export class User extends AbstractService
{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`users`, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`/api/v1/users/{userId}`, this.request);
    }

    async getMe(): Promise<any>
    {
        return await this.http.get<any>(`users/me`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`users/{userId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`users/{userId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`users/{userId}`, this.request);
    }

    async getStats(): Promise<any>
    {
        return await this.http.get<any>(`users/{userId}/stats`, this.request);
    }

    async getWatched(): Promise<any>
    {
        return await this.http.get<any>(`users/{userId}/watched`, this.request);
    }

    async getLiked(): Promise<any>
    {
        return await this.http.get<any>(`users/{userId}/liked`, this.request);
    }

    async getVoted(): Promise<any>
    {
        return await this.http.get<any>(`users/{userId}/voted`, this.request);
    }

    async getContacts(): Promise<any>
    {
        return await this.http.get<any>(`users/{userId}/contacts`, this.request);
    }

    async cancel(): Promise<any>
    {
        return await this.http.post<any>(`users/cancel`, {}, this.request);
    }

    async changeAvatar(): Promise<any>
    {
        return await this.http.post<any>(`users/change_avatar`, {}, this.request);
    }

    async removeAvatar(): Promise<any>
    {
        return await this.http.post<any>(`users/remove_avatar`, {}, this.request);
    }

    async changeEmail(): Promise<any>
    {
        return await this.http.post<any>(`users/change_email`, {}, this.request);
    }

    async changePassword(): Promise<any>
    {
        return await this.http.post<any>(`users/change_password`, {}, this.request);
    }

    async recoverPassword(): Promise<any>
    {
        return await this.http.post<any>(`users/password_recovery`, {}, this.request);
    }

    async changePasswordFromRecovery(): Promise<any>
    {
        return await this.http.post<any>(`users/change_password_from_recovery`, {}, this.request);
    }
}