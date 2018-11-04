import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class EpicRelatedUserStory extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`epics/{epicId}/related_userstories`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`epics/{epicId}/related_userstories`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`epics/{epicId}/related_userstories/{userStoryId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`epics/{epicId}/related_userstories/{userStoryId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`epics/{epicId}/related_userstories/{userStoryId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`epics/{epicId}/related_userstories/{userStoryId}`);
    }

    bulkCreate(): AxiosPromise<>
    {
        return axios.post(`epics/{epicId}/related_userstories/bulk_create`);
    }
}