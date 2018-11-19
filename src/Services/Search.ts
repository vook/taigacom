import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";
import {ISearchResult} from "../Models/ISearchResult";

export class Search extends AbstractService
{

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#searches-search
     *
     * @param projectId
     * @param text
     */
    searchInProject(projectId: number, text: string): AxiosPromise<ISearchResult>
    {
        return axios.get(`search`, this.request
            .addParam('project', projectId)
            .addParam('text', text)
        );
    }
}