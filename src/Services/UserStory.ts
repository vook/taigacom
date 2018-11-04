import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class UserStory extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`userstories`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`userstories`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`userstories/{userStoryId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`userstories/{userStoryId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`userstories/{userStoryId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`userstories/{userStoryId}`);
    }

    bulkCreate(): AxiosPromise<>
    {
        return axios.post(`userstories/bulk_create`);
    }

    bulkUpdateBacklogOrder(): AxiosPromise<>
    {
        return axios.post(`userstories/bulk_update_backlog_order`);
    }

    bulkUpdateKanbanOrder(): AxiosPromise<>
    {
        return axios.post(`userstories/bulk_update_kanban_order`);
    }

    bulkUpdateSprintOrder(): AxiosPromise<>
    {
        return axios.post(`userstories/bulk_update_sprint_order`);
    }

    bulkUpdateMilestone(): AxiosPromise<>
    {
        return axios.post(`userstories/bulk_update_milestone`);
    }

    getFiltersData(): AxiosPromise<>
    {
        return axios.get(`userstories/filters_data?project={projectId}`);
    }

    addStar(): AxiosPromise<>
    {
        return axios.post(`userstories/{userStoryId}/upvote`);
    }

    removeStar(): AxiosPromise<>
    {
        return axios.post(`userstories/{userStoryId}/downvote`);
    }

    getVoters(): AxiosPromise<>
    {
        return axios.get(`userstories/{userStoryId}/voters`);
    }

    watch(): AxiosPromise<>
    {
        return axios.post(`userstories/{userStoryId}/watch`);
    }

    unwatch(): AxiosPromise<>
    {
        return axios.post(`userstories/{userStoryId}/unwatch`);
    }

    getWatchers(): AxiosPromise<>
    {
        return axios.get(`userstories/{userStoryId}/watchers`);
    }
}