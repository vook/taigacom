import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Locale extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`locales`);
    }
}