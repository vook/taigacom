import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class TaskCustomAttribute extends AbstractService{
    list()
    {
        return axios.get(`task-custom-attributes`);
    }

    create()
    {
        return axios.post(`task-custom-attributes`);
    }

    get()
    {
        return axios.get(`task-custom-attributes/{taskCustomAttributeId}`);
    }

    modify()
    {
        return axios.put(`task-custom-attributes/{taskCustomAttributeId}`);
    }

    modifyPartially()
    {
        return axios.patch(`task-custom-attributes/{taskCustomAttributeId}`);
    }

    delete()
    {
        return axios.delete(`task-custom-attributes/{taskCustomAttributeId}`);
    }

    bulkUpdateOrder()
    {
        return axios.post(`task-custom-attributes/bulk_update_order`);
    }
}