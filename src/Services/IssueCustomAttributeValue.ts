import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class IssueCustomAttributeValue extends AbstractService{
    get(): AxiosPromise<>
    {
        return axios.get(`issues/custom-attributes-values/{issueId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`issues/custom-attributes-values/{issueId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`issues/custom-attributes-values/{issueId}`);
    }
}