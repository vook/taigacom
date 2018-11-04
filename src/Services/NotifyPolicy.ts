import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class NotifyPolicy extends AbstractService{
    list()
    {
        return axios.get(`notify-policies`);
    }

    get()
    {
        return axios.get(`notify-policies/{policyId}`);
    }

    modify()
    {
        return axios.put(`notify-policies/{policyId}`);
    }

    modifyPartially()
    {
        return axios.patch(`notify-policies/{policyId}`);
    }
}