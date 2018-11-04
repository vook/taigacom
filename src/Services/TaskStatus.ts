import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class TaskStatus extends AbstractService{
    list()
    {
        return axios.get(`task-statuses`);
    }

    create()
    {
        return axios.post(`task-statuses`);
    }

    get()
    {
        return axios.get(`task-statuses/{taskStatusId}`);
    }

    modify()
    {
        return axios.put(`task-statuses/{taskStatusId}`);
    }

    modifyPartially()
    {
        return axios.patch(`task-statuses/{taskStatusId}`);
    }

    delete()
    {
        return axios.delete(`task-statuses/{taskStatusId}`);
    }

    bulkUpdateOrder()
    {
        return axios.post(`task-statuses/bulk_update_order`);
    }
}