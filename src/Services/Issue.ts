import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Issue extends AbstractService{
    list()
    {
        return axios.get(`issues`);
    }

    create()
    {
        return axios.post(`issues`);
    }

    get()
    {
        return axios.get(`issues/{issueId}`);
    }

    modify()
    {
        return axios.put(`issues/{issueId}`);
    }

    modifyPartially()
    {
        return axios.patch(`issues/{issueId}`);
    }

    delete()
    {
        return axios.delete(`issues/{issueId}`);
    }

    bulkCreate()
    {
        return axios.post(`issues/bulk_create`);
    }

    getFiltersData()
    {
        return axios.get(`issues/filters_data?project={projectId}`);
    }

    addStar()
    {
        return axios.post(`issues/{issueId}/upvote`);
    }

    removeStar()
    {
        return axios.post(`issues/{issueId}/downvote`);
    }

    getVoters()
    {
        return axios.get(`issues/{issueId}/voters`);
    }

    watch()
    {
        return axios.post(`issues/{issueId}/watch`);
    }

    unwatch()
    {
        return axios.post(`issues/{issueId}/unwatch`);
    }

    getWatchers()
    {
        return axios.get(`issues/{issueId}/watchers`);
    }
}