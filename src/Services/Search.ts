import {AbstractService} from "../Abstracts/AbstractService";
import {ISearchResult} from "../Models/ISearchResult";

export class Search extends AbstractService
{

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#searches-search
     *
     * @param projectId
     * @param text
     */
    async searchInProject(projectId: number, text: string): Promise<ISearchResult>
    {
        return await this.http.get<any>(`search`, this.request
            .addParam('project', projectId)
            .addParam('text', text)
        );
    }
}