import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Contact extends AbstractService{
    contactProject(): AxiosPromise<>
    {
        return axios.post(`contact`);
    }
}