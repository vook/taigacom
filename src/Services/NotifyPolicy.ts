import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class NotifyPolicy extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`notify-policies`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`notify-policies/{policyId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`notify-policies/{policyId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`notify-policies/{policyId}`);
    }
}