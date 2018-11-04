import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Project extends AbstractService{
    list()
    {
        return axios.get(`projects`);
    }

    create()
    {
        return axios.post(`projects`);
    }

    get()
    {
        return axios.get(`projects/{projectId}`);
    }

    modify()
    {
        return axios.put(`projects/{projectId}`);
    }

    modifyPartially()
    {
        return axios.patch(`projects/{projectId}`);
    }

    delete()
    {
        return axios.delete(`projects/{projectId}`);
    }

    bulkUpdateOrder()
    {
        return axios.post(`projects/bulk_update_order`);
    }

    getModules()
    {
        return axios.get(`projects/{projectId}/modules`);
    }

    modifyPartiallyModules()
    {
        return axios.patch(`projects/{projectId}/modules`);
    }

    getStats()
    {
        return axios.get(`projects/{projectId}/stats`);
    }

    getIssueStats()
    {
        return axios.get(`projects/{projectId}/issues_stats`);
    }

    getTagsColors()
    {
        return axios.get(`projects/{projectId}/tags_colors`);
    }

    createTag()
    {
        return axios.post(`projects/{projectId}/create_tag`);
    }

    editTag()
    {
        return axios.post(`projects/{projectId}/edit_tag`);
    }

    deleteTag()
    {
        return axios.post(`projects/{projectId}/delete_tag`);
    }

    mixTags()
    {
        return axios.post(`projects/{projectId}/mix_tags`);
    }

    like()
    {
        return axios.post(`projects/{projectId}/like`);
    }

    unlike()
    {
        return axios.post(`projects/{projectId}/unlike`);
    }

    getFans()
    {
        return axios.get(`projects/{projectId}/fans`);
    }

    watch()
    {
        return axios.post(`projects/{projectId}/watch`);
    }

    unwatch()
    {
        return axios.post(`projects/{projectId}/unwatch`);
    }

    getWatchers()
    {
        return axios.get(`projects/{projectId}/watchers`);
    }

    createTemplate()
    {
        return axios.post(`projects/{projectId}/create_template`);
    }

    leave()
    {
        return axios.post(`projects/{projectId}/leave`);
    }

    changeLogo()
    {
        return axios.post(`projects/{projectId}/change_logo`);
    }

    removeLogo()
    {
        return axios.post(`projects/{projectId}/remove_logo`);
    }

    transferValidateToken()
    {
        return axios.post(`projects/{projectId}/transfer_validate_token`);
    }

    transferRequest()
    {
        return axios.post(`projects/{projectId}/transfer_request`);
    }

    transferStart()
    {
        return axios.post(`projects/{projectId}/transfer_start`);
    }

    transferAccept()
    {
        return axios.post(`projects/{projectId}/transfer_accept`);
    }

    transferReject()
    {
        return axios.post(`projects/{projectId}/transfer_reject`);
    }

    duplicateProject()
    {
        return axios.post(`projects/{projectId}/duplicate`);
    }
}