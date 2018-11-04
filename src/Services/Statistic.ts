import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Statistic extends AbstractService{
    discover(): AxiosPromise<>
    {
        return axios.get(`stats/discover`);
    }

    system(): AxiosPromise<>
    {
        return axios.get(`stats/system`);
    }
}