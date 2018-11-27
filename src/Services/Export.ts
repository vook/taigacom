import {AbstractService} from "../Abstracts/AbstractService";

export class Export extends AbstractService{
    async ProjectDump(): Promise<any>
    {
        return await this.http.get<any>(`exporter/{projectId}`, this.request);
    }
}