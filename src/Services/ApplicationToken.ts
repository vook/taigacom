import {AbstractService} from "../Abstracts/AbstractService";
import {IApplicationToken} from "../Models/IApplicationToken";
import {IAuthorizationCode} from "../Models/IAutorizationCode";
import {ICypheredToken} from "../Models/ICypheredToken";

export class ApplicationToken extends AbstractService
{

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#application-tokens-list
     */
    async list(): Promise<IApplicationToken[]>
    {
        return await this.http.get<any>(`application-tokens`, this.request);
    }

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#application-tokens-get
     *
     * @param applicationTokenId
     */
    async get(applicationTokenId: number): Promise<IApplicationToken>
    {
        return await this.http.get<any>(`application-tokens/${applicationTokenId}`, this.request);
    }

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#application-tokens-delete
     *
     * @param applicationTokenId
     */
    async delete(applicationTokenId: number): Promise<void>
    {
        return await this.http.delete(`application-tokens/${applicationTokenId}`, this.request);
    }

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#application-tokens-authorize
     *
     * @param applicationId
     * @param state
     */
    async authorize(applicationId: number, state: string): Promise<IAuthorizationCode>
    {
        return await this.http.post<any>(`application-tokens/authorize`,{
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
    async validate(applicationId: number, state: string): Promise<ICypheredToken>
    {
        return await this.http.post<any>(`application-tokens/validate`, {
                application: applicationId,
                state: state
            }, this.request
        );
    }
}