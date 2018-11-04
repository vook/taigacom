import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class UserStoryCustomAttributeValue extends AbstractService{

    get()
    {
        return axios.get(`userstories/custom-attributes-values/{userStoryId}`);
    }

    modify()
    {
        return axios.put(`userstories/custom-attributes-values/{userStoryId}`);
    }

    modifyPartially()
    {
        return axios.patch(`userstories/custom-attributes-values/{userStoryId}`);
    }
}