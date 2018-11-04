import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Membership extends AbstractService{
    list()
    {
        return axios.get(`memberships`);
    }

    create()
    {
        return axios.post(`memberships`);
    }

    bulkCreate()
    {
        return axios.post(`memberships/bulk_create`);
    }

    get()
    {
        return axios.get(`memberships/{membershipId}`);
    }

    modify()
    {
        return axios.put(`memberships/{membershipId}`);
    }

    modifyPartially()
    {
        return axios.patch(`memberships/{membershipId}`);
    }

    delete()
    {
        return axios.delete(`memberships/{membershipId}`) ;
    }

    resendInvitation()
    {
        return axios.post(`memberships/{membershipId}/resend_invitation`);
    }

    getInvitationByAnonymous()
    {
        return axios.post(`invitations/{invitationUuid}`);
    }
}