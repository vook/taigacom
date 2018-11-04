import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class UserStory extends AbstractService{
    list()
    {
        return axios.get(`userstories`);
    }

    create()
    {
        return axios.post(`userstories`);
    }

    get()
    {
        return axios.get(`userstories/{userStoryId}`);
    }

    modify()
    {
        return axios.put(`userstories/{userStoryId}`);
    }

    modifyPartially()
    {
        return axios.patch(`userstories/{userStoryId}`);
    }

    delete()
    {
        return axios.delete(`userstories/{userStoryId}`);
    }

    bulkCreate()
    {
        return axios.post(`userstories/bulk_create`);
    }

    bulkUpdateBacklogOrder()
    {
        return axios.post(`userstories/bulk_update_backlog_order`);
    }

    bulkUpdateKanbanOrder()
    {
        return axios.post(`userstories/bulk_update_kanban_order`);
    }

    bulkUpdateSprintOrder()
    {
        return axios.post(`userstories/bulk_update_sprint_order`);
    }

    bulkUpdateMilestone()
    {
        return axios.post(`userstories/bulk_update_milestone`);
    }

    getFiltersData()
    {
        return axios.get(`userstories/filters_data?project={projectId}`);
    }

    addStar()
    {
        return axios.post(`userstories/{userStoryId}/upvote`);
    }

    removeStar()
    {
        return axios.post(`userstories/{userStoryId}/downvote`);
    }

    getVoters()
    {
        return axios.get(`userstories/{userStoryId}/voters`);
    }

    watch()
    {
        return axios.post(`userstories/{userStoryId}/watch`);
    }

    unwatch()
    {
        return axios.post(`userstories/{userStoryId}/unwatch`);
    }

    getWatchers()
    {
        return axios.get(`userstories/{userStoryId}/watchers`);
    }
}