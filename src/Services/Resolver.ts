import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Resolver extends AbstractService{
    resolveReferencesAndSlugs(): AxiosPromise<>
    {
        return axios.get(`resolver`);
    }
}