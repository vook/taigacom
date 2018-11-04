import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class IssueCustomAttributeValue extends AbstractService{
    get()
    {
        return axios.get(`issues/custom-attributes-values/{issueId}`);
    }

    modify()
    {
        return axios.put(`issues/custom-attributes-values/{issueId}`);
    }

    modifyPartially()
    {
        return axios.patch(`issues/custom-attributes-values/{issueId}`);
    }
}