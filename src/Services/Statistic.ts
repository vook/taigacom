import {AbstractService} from "../Abstracts/AbstractService";

export class Statistic extends AbstractService
{
    async discover(): Promise<any>
    {
        return await this.http.get<any>(`stats/discover`, this.request);
    }

    async system(): Promise<any>
    {
        return await this.http.get<any>(`stats/system`, this.request);
    }
}