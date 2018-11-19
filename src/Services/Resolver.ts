import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";
import {resolverSlugs} from "../types";
import {IResolver} from "../Models/IResolver";

export class Resolver extends AbstractService
{

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#resolver
     *
     * @param params
     */
    resolveReferencesAndSlugs(params: resolverSlugs): AxiosPromise<IResolver>
    {
        return axios.get(`resolver`, this.request
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

