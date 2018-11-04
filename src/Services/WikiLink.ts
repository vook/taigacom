import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class WikiLink extends AbstractService{
    list()
    {
        return axios.get(`wiki-links`);
    }

    create()
    {
        return axios.post(`wiki-links`);
    }

    get()
    {
        return axios.get(`wiki-links/{wikiLinkId}`);
    }

    modify()
    {
        return axios.put(`wiki-links/{wikiLinkId}`);
    }

    modifyPartially()
    {
        return axios.patch(`wiki-links/{wikiLinkId}`);
    }

    delete()
    {
        return axios.delete(`wiki-links/{wikiLinkId}`);
    }
}