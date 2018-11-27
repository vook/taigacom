import {AbstractService} from "../Abstracts/AbstractService";

export class EpicCustomAttributeValue extends AbstractService{
    async get(): Promise<any>
    {
        return await this.http.get<any>(`epics/custom-attributes-values/{epicId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`epics/custom-attributes-values/{epicId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`epics/custom-attributes-values/{epicId}`, {}, this.request);
    }
}