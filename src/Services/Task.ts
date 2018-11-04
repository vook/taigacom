import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Task extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`tasks`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`tasks`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`tasks/{taskId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`tasks/{taskId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`tasks/{taskId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`tasks/{taskId}`);
    }

    bulkCreate(): AxiosPromise<>
    {
        return axios.post(`tasks/bulk_create`);
    }

    getFiltersData(): AxiosPromise<>
    {
        return axios.get(`tasks/filters_data?project={projectId}`);
    }

    addStar(): AxiosPromise<>
    {
        return axios.post(`tasks/{taskId}/upvote`);
    }

    removeStar(): AxiosPromise<>
    {
        return axios.post(`tasks/{taskId}/downvote`);
    }

    getVoters(): AxiosPromise<>
    {
        return axios.get(`tasks/{taskId}/voters`);
    }

    watch(): AxiosPromise<>
    {
        return axios.post(`tasks/{taskId}/watch`);
    }

    unwatch(): AxiosPromise<>
    {
        return axios.post(`tasks/{taskId}/unwatch`);
    }

    getWatchers(): AxiosPromise<>
    {
        return axios.get(`tasks/{taskId}/watchers`);
    }
}