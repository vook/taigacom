import {AbstractService} from "../Abstracts/AbstractService";
import {resolverSlugs} from "../types";
import {IResolver} from "../Models/IResolver";

export class Resolver extends AbstractService
{

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#resolver
     *
     * @param params
     */
    async resolveReferencesAndSlugs(params: resolverSlugs): Promise<IResolver>
    {
        return await this.http.get<any>(`resolver`, this.request
            .addParam('project', params.project)
            .addParam('us', params.userStory)
            .addParam('issue', params.issue)
            .addParam('task', params.task)
            .addParam('milestone', params.task)
            .addParam('wikipage', params.wiki)
            .addParam('ref', params.reference)
        );
    }
}

