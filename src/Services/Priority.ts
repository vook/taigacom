import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Priority extends AbstractService{
    list()
    {
        return axios.get(`priorities`);
    }

    create()
    {
        return axios.post(`priorities`);
    }

    get()
    {
        return axios.get(`priorities/{priorityId}`);
    }

    modify()
    {
        return axios.put(`priorities/{priorityId}`);
    }

    modifyPartially()
    {
        return axios.patch(`priorities/{priorityId}`);
    }

    delete()
    {
        return axios.delete(`priorities/{priorityId}`);
    }

    bulkUpdateOrder()
    {
        return axios.post(`priorities/bulk_update_order`);
    }
}