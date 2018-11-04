import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class UserStoryStatus extends AbstractService{
    list()
    {
        return axios.get(`userstory-statuses`);
    }

    create()
    {
        return axios.post(`userstory-statuses`);
    }

    get()
    {
        return axios.get(`userstory-statuses/{userStoryStatusId}`);
    }

    modify()
    {
        return axios.put(`userstory-statuses/{userStoryStatusId}`);
    }

    modifyPartially()
    {
        return axios.patch(`userstory-statuses/{userStoryStatusId}`);
    }

    delete()
    {
        return axios.delete(`userstory-statuses/{userStoryStatusId}`);
    }

    bulkUpdateOrder()
    {
        return axios.post(`userstory-statuses/bulk_update_order`);
    }
}