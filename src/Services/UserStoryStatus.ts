import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class UserStoryStatus extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`userstory-statuses`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`userstory-statuses`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`userstory-statuses/{userStoryStatusId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`userstory-statuses/{userStoryStatusId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`userstory-statuses/{userStoryStatusId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`userstory-statuses/{userStoryStatusId}`);
    }

    bulkUpdateOrder(): AxiosPromise<>
    {
        return axios.post(`userstory-statuses/bulk_update_order`);
    }
}