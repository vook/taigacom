import {IApplication} from "../Models/IApplication";
import {IApplicationToken} from "../Models/IApplicationToken";
import {AbstractLoggedService} from "../Abstracts/AbstractLoggedService";

export class Application extends AbstractLoggedService
{
    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#applications-get
     *
     * @param id
     */
    async get(id: number): Promise<IApplication[]>
    {
        await this.resolveToken();
        return await this.http.get<IApplication[]>(`applications/${id}`, this.request);
    }

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#applications-get-token
     *
     * @param id
     */
    async getToken(id: number): Promise<IApplicationToken>
    {
        await this.resolveToken();
        return await this.http.get<IApplicationToken>(`applications/${id}/token`, this.request);
    }
}