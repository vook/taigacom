import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Export extends AbstractService{
    ProjectDump(): AxiosPromise<>
    {
        return axios.get(`exporter/{projectId}`);
    }
}