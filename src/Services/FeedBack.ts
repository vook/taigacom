import {AbstractService} from "../Abstracts/AbstractService";

export class FeedBack extends AbstractService{
    async sendFeedback(): Promise<any>
    {
        return await this.http.post<any>(`feedback`, {}, this.request);
    }
}