import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Import extends AbstractService{
    projectDump(): AxiosPromise<>
    {
        return axios.post(`importer/load_dump`);
    }
}