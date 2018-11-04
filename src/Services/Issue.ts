import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Issue extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`issues`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`issues`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`issues/{issueId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`issues/{issueId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`issues/{issueId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`issues/{issueId}`);
    }

    bulkCreate(): AxiosPromise<>
    {
        return axios.post(`issues/bulk_create`);
    }

    getFiltersData(): AxiosPromise<>
    {
        return axios.get(`issues/filters_data?project={projectId}`);
    }

    addStar(): AxiosPromise<>
    {
        return axios.post(`issues/{issueId}/upvote`);
    }

    removeStar(): AxiosPromise<>
    {
        return axios.post(`issues/{issueId}/downvote`);
    }

    getVoters(): AxiosPromise<>
    {
        return axios.get(`issues/{issueId}/voters`);
    }

    watch(): AxiosPromise<>
    {
        return axios.post(`issues/{issueId}/watch`);
    }

    unwatch(): AxiosPromise<>
    {
        return axios.post(`issues/{issueId}/unwatch`);
    }

    getWatchers(): AxiosPromise<>
    {
        return axios.get(`issues/{issueId}/watchers`);
    }
}