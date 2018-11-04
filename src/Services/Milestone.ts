import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Milestone extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`milestones`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`milestones`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`milestones/{milestoneId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`milestones/{milestoneId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`milestones/{milestoneId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`milestones/{milestoneId}`);
    }

    getStats(): AxiosPromise<>
    {
        return axios.get(`milestones/{milestoneId}/stats`);
    }

    watch(): AxiosPromise<>
    {
        return axios.post(`milestones/{milestoneId}/watch`);
    }

    unwatch(): AxiosPromise<>
    {
        return axios.post(`milestones/{milestoneId}/unwatch`);
    }

    getWatchers(): AxiosPromise<>
    {
        return axios.get(`milestones/{milestoneId}/watchers`);
    }
}