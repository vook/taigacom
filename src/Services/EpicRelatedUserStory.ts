import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class EpicRelatedUserStory extends AbstractService{
    list()
    {
        return axios.get(`epics/{epicId}/related_userstories`);
    }

    create()
    {
        return axios.post(`epics/{epicId}/related_userstories`);
    }

    get()
    {
        return axios.get(`epics/{epicId}/related_userstories/{userStoryId}`);
    }

    modify()
    {
        return axios.put(`epics/{epicId}/related_userstories/{userStoryId}`);
    }

    modifyPartially()
    {
        return axios.patch(`epics/{epicId}/related_userstories/{userStoryId}`);
    }

    delete()
    {
        return axios.delete(`epics/{epicId}/related_userstories/{userStoryId}`);
    }

    bulkCreate()
    {
        return axios.post(`epics/{epicId}/related_userstories/bulk_create`);
    }
}