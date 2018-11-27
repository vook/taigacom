import {AbstractService} from "../Abstracts/AbstractService";

export class Import extends AbstractService{
    async projectDump(): Promise<any>
    {
        return await this.http.post<any>(`importer/load_dump`, {}, this.request);
    }
}