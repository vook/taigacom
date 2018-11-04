import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class EpicCustomAttributeValue extends AbstractService{
    get()
    {
        return axios.get(`epics/custom-attributes-values/{epicId}`);
    }

    modify()
    {
        return axios.put(`epics/custom-attributes-values/{epicId}`);
    }

    modifyPartially()
    {
        return axios.patch(`epics/custom-attributes-values/{epicId}`);
    }
}