import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Epic extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`epics`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`epics`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`epics/{epicId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`epics/{epicId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`epics/{epicId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`epics/{epicId}`);
    }


    bulkCreate(): AxiosPromise<>
    {
        return axios.post(`epics/bulk_create`);
    }

    getFiltersData(): AxiosPromise<>
    {
        return axios.get(`epics/filters_data?project={projectId}`);
    }

    addStar(): AxiosPromise<>
    {
        return axios.post(`epics/{epicId}/upvote`);
    }

    removeStar(): AxiosPromise<>
    {
        return axios.post(`epics/{epicId}/downvote`);
    }

    getVoters(): AxiosPromise<>
    {
        return axios.get(`epics/{epicId}/voters`);
    }

    watch(): AxiosPromise<>
    {
        return axios.post(`epics/{epicId}/watch`);
    }

    unwatch(): AxiosPromise<>
    {
        return axios.post(`epics/{epicId}/unwatch`);
    }

    getWatchers(): AxiosPromise<>
    {
        return axios.get(`epics/{epicId}/watchers`);
    }
}