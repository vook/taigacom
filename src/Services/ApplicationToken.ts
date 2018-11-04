import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";
import {IApplicationToken} from "../Models/IApplicationToken";
import {IAuthorizationCode} from "../Models/IAutorizationCode";

export class ApplicationToken extends AbstractService{
    list(): AxiosPromise<IApplicationToken[]>
    {
        return axios.get(`application-tokens`);
    }

    get(): AxiosPromise<IApplicationToken>
    {
        return axios.get(`application-tokens/{applicationTokenId}`);
    }

    delete(): AxiosPromise<void>
    {
        return axios.delete(`application-tokens/{applicationTokenId}`);
    }

    authorize(): AxiosPromise<IAuthorizationCode>
    {
        return axios.post(`application-tokens/authorize`);
    }

    validate(): AxiosPromise<>
    {
        return axios.post(`application-tokens/validate`);
    }
}