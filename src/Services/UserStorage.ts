import {AbstractService} from "../Abstracts/AbstractService";
import {IUserStorageData} from "../Models/IUserStorageData";

export class UserStorage extends AbstractService
{
    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#user-storage-list
     */
    async list(): Promise<IUserStorageData[]>
    {
        return await this.http.get<any>(`user-storage`, this.request);
    }

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#user-storage-create
     *
     * @param key
     * @param value
     */
    async create(key: string, value: string): Promise<IUserStorageData>
    {
        return await this.http.post<any>(`user-storage`, {key, value}, this.request);
    }

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#user-storage-get
     *
     * @param key
     */
    async get(key: string): Promise<IUserStorageData>
    {
        return await this.http.get<any>(`user-storage/${key}`, this.request);
    }

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#user-storage-edit
     *
     * @param key
     * @param value
     */
    async modifyPartially(key: string, value: string): Promise<IUserStorageData>
    {
        return await this.http.patch<any>(`user-storage/${key}`, {value}, this.request);
    }

    /**
     * @link https://taigaio.github.io/taiga-doc/dist/api.html#user-storage-delete
     *
     * @param key
     */
    async delete(key: string): Promise<void>
    {
        return await this.http.delete(`user-storage/${key}`, this.request);
    }
}
