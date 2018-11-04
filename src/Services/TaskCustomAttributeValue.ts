import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class TaskCustomAttributeValue extends AbstractService{
    get()
    {
        return axios.get(`custom-attributes-values/{taskId}`);
    }

    modify()
    {
        return axios.put(`tasks/custom-attributes-values/{taskId}`);
    }

    modifyPartially()
    {
        return axios.patch(`tasks/custom-attributes-values/{taskId}`);
    }
}