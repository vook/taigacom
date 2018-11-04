import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Task extends AbstractService{
    list()
    {
        return axios.get(`tasks`);
    }

    create()
    {
        return axios.post(`tasks`);
    }

    get()
    {
        return axios.get(`tasks/{taskId}`);
    }

    modify()
    {
        return axios.put(`tasks/{taskId}`);
    }

    modifyPartially()
    {
        return axios.patch(`tasks/{taskId}`);
    }

    delete()
    {
        return axios.delete(`tasks/{taskId}`);
    }

    bulkCreate()
    {
        return axios.post(`tasks/bulk_create`);
    }

    getFiltersData()
    {
        return axios.get(`tasks/filters_data?project={projectId}`);
    }

    addStar()
    {
        return axios.post(`tasks/{taskId}/upvote`);
    }

    removeStar()
    {
        return axios.post(`tasks/{taskId}/downvote`);
    }

    getVoters()
    {
        return axios.get(`tasks/{taskId}/voters`);
    }

    watch()
    {
        return axios.post(`tasks/{taskId}/watch`);
    }

    unwatch()
    {
        return axios.post(`tasks/{taskId}/unwatch`);
    }

    getWatchers()
    {
        return axios.get(`tasks/{taskId}/watchers`);
    }
}