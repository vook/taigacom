import {AbstractService} from "../Abstracts/AbstractService";
import {IProjectTemplate} from "../Models/IProjectTemplate";

export class ProjectTemplate extends AbstractService
{
    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#project-templates-list
     */
    async list(): Promise<IProjectTemplate[]>
    {
        return await this.http.get<any>(`project-templates`, this.request);
    }

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#project-templates-create
     *
     * @param data
     */
    async create(data: IProjectTemplate): Promise<IProjectTemplate>
    {
        return await this.http.post<any>(`project-templates`, data, this.request);
    }

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#project-templates-get
     *
     * @param id
     */
    async get(id: number): Promise<IProjectTemplate>
    {
        return await this.http.get<any>(`project-templates/${id}`, this.request);
    }

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#project-templates-edit
     *
     * @param id
     * @param data
     */
    async modify(id: number, data: IProjectTemplate): Promise<IProjectTemplate>
    {
        return await this.http.put<any>(`project-templates/${id}`, data, this.request);
    }

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#project-templates-edit
     *
     * @param id
     * @param data
     */
    async modifyPartially(id: number, data: IProjectTemplate): Promise<IProjectTemplate>
    {
        return await this.http.patch<any>(`project-templates/${id}`, data, this.request);
    }

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#project-templates-delete
     *
     * @param id
     */
    async delete(id: number): Promise<void>
    {
        return await this.http.delete(`project-templates/${id}`, this.request);
    }
}