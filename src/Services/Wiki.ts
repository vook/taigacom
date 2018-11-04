import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Wiki extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`wiki`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`wiki`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`wiki/{wikiId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`wiki/{wikiPageId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`wiki/{wikiPageId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`wiki/{wikiPageId}`);
    }

    watch(): AxiosPromise<>
    {
        return axios.post(`wiki/{wikiPageId}/watch`);
    }

    unwatch(): AxiosPromise<>
    {
        return axios.post(`v1/wiki/{wikiPageId}/unwatch`);
    }

    getWatchers(): AxiosPromise<>
    {
        return axios.get(`wiki/{wikiPageId}/watchers`);
    }
}