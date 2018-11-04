import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class WikiLink extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`wiki-links`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`wiki-links`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`wiki-links/{wikiLinkId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`wiki-links/{wikiLinkId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`wiki-links/{wikiLinkId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`wiki-links/{wikiLinkId}`);
    }
}