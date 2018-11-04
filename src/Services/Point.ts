import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Point extends AbstractService{
    list()
    {
        return axios.get(`points`);
    }

    create()
    {
        return axios.post(`points`);
    }

    get()
    {
        return axios.get(`points/{pointId}`);
    }

    modify()
    {
        return axios.put(`points/{pointId}`);
    }

    modifyPartially()
    {
        return axios.patch(`points/{pointId}`);
    }

    delete()
    {
        return axios.delete(`points/{pointId}`);
    }

    bulkUpdateOrder()
    {
        return axios.post(`points/bulk_update_order`);
    }
}