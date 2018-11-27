import {AbstractService} from "../Abstracts/AbstractService";

export class UserStoryCustomAttributeValue extends AbstractService
{
    async get(): Promise<any>
    {
        return await this.http.get<any>(`userstories/custom-attributes-values/{userStoryId}`, this.request);
    }

    async modify(): Promise<any>
    {
        return await this.http.put<any>(`userstories/custom-attributes-values/{userStoryId}`, {}, this.request);
    }

    async modifyPartially(): Promise<any>
    {
        return await this.http.patch<any>(`userstories/custom-attributes-values/{userStoryId}`, {}, this.request);
    }
}