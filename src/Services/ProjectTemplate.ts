import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class ProjectTemplate extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`project-templates`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`project-templates`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`project-templates/{projectTemplateId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`project-templates/{projectTemplateId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`project-templates/{projectTemplateId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`project-templates/{projectTemplateId}`);
    }
}