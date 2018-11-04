import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class UserStoryCustomAttributeValue extends AbstractService{
    get(): AxiosPromise<>
    {
        return axios.get(`userstories/custom-attributes-values/{userStoryId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`userstories/custom-attributes-values/{userStoryId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`userstories/custom-attributes-values/{userStoryId}`);
    }
}