import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class TaskCustomAttributeValue extends AbstractService{
    get(): AxiosPromise<>
    {
        return axios.get(`custom-attributes-values/{taskId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`tasks/custom-attributes-values/{taskId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`tasks/custom-attributes-values/{taskId}`);
    }
}