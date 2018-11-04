import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Search extends AbstractService{
    searchInProject(): AxiosPromise<>
    {
        return axios.get(`search`);
    }
}