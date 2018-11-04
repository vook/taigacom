import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Epic extends AbstractService{
    list()
    {
        return axios.get(`epics`);
    }

    create()
    {
        return axios.post(`epics`);
    }

    get()
    {
        return axios.get(`epics/{epicId}`);
    }

    modify()
    {
        return axios.put(`epics/{epicId}`);
    }

    modifyPartially()
    {
        return axios.patch(`epics/{epicId}`);
    }

    delete()
    {
        return axios.delete(`epics/{epicId}`);
    }


    bulkCreate()
    {
        return axios.post(`epics/bulk_create`);
    }

    getFiltersData()
    {
        return axios.get(`epics/filters_data?project={projectId}`);
    }

    addStar()
    {
        return axios.post(`epics/{epicId}/upvote`);
    }

    removeStar()
    {
        return axios.post(`epics/{epicId}/downvote`);
    }

    getVoters()
    {
        return axios.get(`epics/{epicId}/voters`);
    }

    watch()
    {
        return axios.post(`epics/{epicId}/watch`);
    }

    unwatch()
    {
        return axios.post(`epics/{epicId}/unwatch`);
    }

    getWatchers()
    {
        return axios.get(`epics/{epicId}/watchers`);
    }
}