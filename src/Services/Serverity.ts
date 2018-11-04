import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Serverity extends AbstractService{
    list()
    {
        return axios.get(`severities`);
    }

    create()
    {
        return axios.post(`severities`);
    }

    get()
    {
        return axios.get(`severities/{severityId}`);
    }

    modify()
    {
        return axios.put(`severities/{severityId}`);
    }

    modifyPartially()
    {
        return axios.patch(`severities/{severityId}`);
    }

    delete()
    {
        return axios.delete(`severities/{severityId}`);
    }

    bulkUpdateOrder()
    {
        return axios.post(`severities/bulk_update_order`);
    }
}