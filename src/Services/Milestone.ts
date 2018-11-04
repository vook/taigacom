import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Milestone extends AbstractService{
    list()
    {
        return axios.get(`milestones`);
    }

    create()
    {
        return axios.post(`milestones`);
    }

    get()
    {
        return axios.get(`milestones/{milestoneId}`);
    }

    modify()
    {
        return axios.put(`milestones/{milestoneId}`);
    }

    modifyPartially()
    {
        return axios.patch(`milestones/{milestoneId}`);
    }

    delete()
    {
        return axios.delete(`milestones/{milestoneId}`);
    }

    getStats()
    {
        return axios.get(`milestones/{milestoneId}/stats`);
    }

    watch()
    {
        return axios.post(`milestones/{milestoneId}/watch`);
    }

    unwatch()
    {
        return axios.post(`milestones/{milestoneId}/unwatch`);
    }

    getWatchers()
    {
        return axios.get(`milestones/{milestoneId}/watchers`);
    }
}