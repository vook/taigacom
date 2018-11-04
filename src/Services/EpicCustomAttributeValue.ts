import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class EpicCustomAttributeValue extends AbstractService{
    get(): AxiosPromise<>
    {
        return axios.get(`epics/custom-attributes-values/{epicId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`epics/custom-attributes-values/{epicId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`epics/custom-attributes-values/{epicId}`);
    }
}