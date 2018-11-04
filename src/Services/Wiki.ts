import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Wiki extends AbstractService{
    list()
    {
        return axios.get(`wiki`);
    }

    create()
    {
        return axios.post(`wiki`);
    }

    get()
    {
        return axios.get(`wiki/{wikiId}`);
    }

    modify()
    {
        return axios.put(`wiki/{wikiPageId}`);
    }

    modifyPartially()
    {
        return axios.patch(`wiki/{wikiPageId}`);
    }

    delete()
    {
        return axios.delete(`wiki/{wikiPageId}`);
    }

    watch()
    {
        return axios.post(`wiki/{wikiPageId}/watch`);
    }

    unwatch()
    {
        return axios.post(`v1/wiki/{wikiPageId}/unwatch`);
    }

    getWatchers()
    {
        return axios.get(`wiki/{wikiPageId}/watchers`);
    }
}