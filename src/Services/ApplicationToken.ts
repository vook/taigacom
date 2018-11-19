import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";
import {IApplicationToken} from "../Models/IApplicationToken";
import {IAuthorizationCode} from "../Models/IAutorizationCode";
import {ICypheredToken} from "../Models/ICypheredToken";

export class ApplicationToken extends AbstractService
{

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#application-tokens-list
     */
    list(): AxiosPromise<IApplicationToken[]>
    {
        return axios.get(`application-tokens`, this.request);
    }

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#application-tokens-get
     *
     * @param applicationTokenId
     */
    get(applicationTokenId: number): AxiosPromise<IApplicationToken>
    {
        return axios.get(`application-tokens/${applicationTokenId}`, this.request);
    }

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#application-tokens-delete
     *
     * @param applicationTokenId
     */
    delete(applicationTokenId: number): AxiosPromise<void>
    {
        return axios.delete(`application-tokens/${applicationTokenId}`, this.request);
    }

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#application-tokens-authorize
     *
     * @param applicationId
     * @param state
     */
    authorize(applicationId: number, state: string): AxiosPromise<IAuthorizationCode>
    {
        return axios.post(`application-tokens/authorize`,{
                application: applicationId,
                state: state
            }, this.request
        );
    }

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#application-tokens-validate
     *
     * @param applicationId
     * @param state
     */
    validate(applicationId: number, state: string): AxiosPromise<ICypheredToken>
    {
        return axios.post(`application-tokens/validate`, {
            application: applicationId,
            state: state
        }, this.request
        );
    }
}