import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Membership extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`memberships`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`memberships`);
    }

    bulkCreate(): AxiosPromise<>
    {
        return axios.post(`memberships/bulk_create`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`memberships/{membershipId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`memberships/{membershipId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`memberships/{membershipId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`memberships/{membershipId}`) ;
    }

    resendInvitation(): AxiosPromise<>
    {
        return axios.post(`memberships/{membershipId}/resend_invitation`);
    }

    getInvitationByAnonymous(): AxiosPromise<>
    {
        return axios.post(`invitations/{invitationUuid}`);
    }
}