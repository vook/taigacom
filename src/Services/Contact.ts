import {AbstractService} from "../Abstracts/AbstractService";

export class Contact extends AbstractService
{
    async contactProject(): Promise<any>
    {
        return await this.http.post<any>(`contact`, {}, this.request);
    }
}