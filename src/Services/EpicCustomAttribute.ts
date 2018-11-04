import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class EpicCustomAttribute extends AbstractService{
    list()
    {
        return axios.get(`epic-custom-attributes`);
    }

    create()
    {
        return axios.post(`epic-custom-attributes`);
    }

    get()
    {
        return axios.get(`epic-custom-attributes/{epicCustomAttributeId}`);
    }

    modify()
    {
        return axios.put(`epic-custom-attributes/{epicCustomAttributeId}`);
    }

    modifyPartially()
    {
        return axios.patch(`epic-custom-attributes/{epicCustomAttributeId}`);
    }

    delete()
    {
        return axios.delete(`epic-custom-attributes/{epicCustomAttributeId}`);
    }

    bulkUpdateOrder()
    {
        return axios.post(`epic-custom-attributes/bulk_update_order`);
    }
}