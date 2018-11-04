import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";
import {IApplication} from "../Models/IApplication";
import {IApplicationToken} from "../Models/IApplicationToken";

export class Application extends AbstractService {
    get(id: number): AxiosPromise<IApplication[]>
    {
        return axios.get(`applications/${id}`, this.cloneRequest());
    }

    getToken(id: number): AxiosPromise<IApplicationToken>
    {
        return axios.get(`applications/${id}/token`, this.cloneRequest());
    }
}