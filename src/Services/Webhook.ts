import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Webhook extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`webhooks`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`webhooks`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`webhooks/{webhookId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`webhooks/{webhookId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`webhooks/{webhookId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`webhooks/{webhookId}`);
    }

    test(): AxiosPromise<>
    {
        return axios.post(`webhooks/{webhookId}/test`);
    }

    listLogs(): AxiosPromise<>
    {
        return axios.get(`webhooklogs`);
    }

    getLog(): AxiosPromise<>
    {
        return axios.get(`webhooklogs/{webhookLogId}`);
    }

    resendLogRequest(): AxiosPromise<>
    {
        return axios.post(`webhooklogs/{webhookLogId}/resend`);
    }
}