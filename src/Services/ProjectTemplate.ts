import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class ProjectTemplate extends AbstractService{
    list()
    {
        return axios.get(`project-templates`);
    }

    create()
    {
        return axios.post(`project-templates`);
    }

    get()
    {
        return axios.get(`project-templates/{projectTemplateId}`);
    }

    modify()
    {
        return axios.put(`project-templates/{projectTemplateId}`);
    }

    modifyPartially()
    {
        return axios.patch(`project-templates/{projectTemplateId}`);
    }

    delete()
    {
        return axios.delete(`project-templates/{projectTemplateId}`);
    }
}