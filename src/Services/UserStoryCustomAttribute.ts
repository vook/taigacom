import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class UserStoryCustomAttribute extends AbstractService{
    list()
    {
        return axios.get(`userstory-custom-attributes`);
    }

    create()
    {
        return axios.post(`userstory-custom-attributes`);
    }

    get()
    {
        return axios.get(`userstory-custom-attributes/{userStoryCustomAttributeId}`);
    }

    modify()
    {
        return axios.put(`userstory-custom-attributes/{userStoryCustomAttributeId}`);
    }

    modifyPartially()
    {
        return axios.patch(`userstory-custom-attributes/{userStoryCustomAttributeId}`);
    }

    delete()
    {
        return axios.delete(`userstory-custom-attributes/{userStoryCustomAttributeId}`);
    }

    bulkUpdateOrder()
    {
        return axios.post(`userstory-custom-attributes/bulk_update_order`);
    }
}