import {AbstractService} from "../Abstracts/AbstractService";

export class Membership extends AbstractService{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`memberships`, this.request);
    }

    async create(): Promise<any>
    {
        return await this.http.post<any>(`memberships`, {}, this.request);
    }

    async bulkCreate(): Promise<any>
    {
        return await this.http.post<any>(`memberships/bulk_create`, {}, this.request);
    }

    async get(): Promise<any>
    {
        return await this.http.get<any>(`memberships/{membershipId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`memberships/{membershipId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`memberships/{membershipId}`, {}, this.request);
    }

    async delete(): Promise<any>
    {
        return await this.http.delete(`memberships/{membershipId}`, this.request) ;
    }

    async resendInvitation(): Promise<any>
    {
        return await this.http.post<any>(`memberships/{membershipId}/resend_invitation`, {}, this.request);
    }

    async getInvitationByAnonymous(): Promise<any>
    {
        return await this.http.post<any>(`invitations/{invitationUuid}`, {}, this.request);
    }
}