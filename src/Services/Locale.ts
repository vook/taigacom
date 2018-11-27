import {AbstractService} from "../Abstracts/AbstractService";

export class Locale extends AbstractService{
    async list(): Promise<any>
    {
        return await this.http.get<any>(`locales`, this.request);
    }
}