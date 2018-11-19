import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";
import {IApplication} from "../Models/IApplication";
import {IApplicationToken} from "../Models/IApplicationToken";

export class Application extends AbstractService
{
    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#applications-get
     *
     * @param id
     */
    get(id: number): AxiosPromise<IApplication[]>
    {
        return axios.get(`applications/${id}`, this.request);
    }

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#applications-get-token
     *
     * @param id
     */
    getToken(id: number): AxiosPromise<IApplicationToken>
    {
        return axios.get(`applications/${id}/token`, this.request);
    }
}