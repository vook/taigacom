import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Webhook extends AbstractService{
    list()
    {
        return axios.get(`webhooks`);
    }

    create()
    {
        return axios.post(`webhooks`);
    }

    get()
    {
        return axios.get(`webhooks/{webhookId}`);
    }

    modify()
    {
        return axios.put(`webhooks/{webhookId}`);
    }

    modifyPartially()
    {
        return axios.patch(`webhooks/{webhookId}`);
    }

    delete()
    {
        return axios.delete(`webhooks/{webhookId}`);
    }

    test()
    {
        return axios.post(`webhooks/{webhookId}/test`);
    }

    listLogs()
    {
        return axios.get(`webhooklogs`);
    }

    getLog()
    {
        return axios.get(`webhooklogs/{webhookLogId}`);
    }

    resendLogRequest()
    {
        return axios.post(`webhooklogs/{webhookLogId}/resend`);
    }
}