import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class EpicStatus extends AbstractService{
    list()
    {
        return axios.get(`epic-statuses`);
    }

    create()
    {
        return axios.post(`epic-statuses`);
    }

    get()
    {
        return axios.get(`epic-statuses/{epicStatusId}`);
    }

    modify()
    {
        return axios.put(`epic-statuses/{epicStatusId}`);
    }

    modifyPartially()
    {
        return axios.patch(`epic-statuses/{epicStatusId}`);
    }

    delete()
    {
        return axios.delete(`epic-statuses/{epicStatusId}`);
    }

    bulkUpdateOrder()
    {
        return axios.post(`epic-statuses/bulk_update_order`);
    }
}