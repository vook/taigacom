import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class Project extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`projects`);
    }

    create(): AxiosPromise<>
    {
        return axios.post(`projects`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`projects/{projectId}`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`projects/{projectId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`projects/{projectId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`projects/{projectId}`);
    }

    bulkUpdateOrder(): AxiosPromise<>
    {
        return axios.post(`projects/bulk_update_order`);
    }

    getModules(): AxiosPromise<>
    {
        return axios.get(`projects/{projectId}/modules`);
    }

    modifyPartiallyModules(): AxiosPromise<>
    {
        return axios.patch(`projects/{projectId}/modules`);
    }

    getStats(): AxiosPromise<>
    {
        return axios.get(`projects/{projectId}/stats`);
    }

    getIssueStats(): AxiosPromise<>
    {
        return axios.get(`projects/{projectId}/issues_stats`);
    }

    getTagsColors(): AxiosPromise<>
    {
        return axios.get(`projects/{projectId}/tags_colors`);
    }

    createTag(): AxiosPromise<>
    {
        return axios.post(`projects/{projectId}/create_tag`);
    }

    editTag(): AxiosPromise<>
    {
        return axios.post(`projects/{projectId}/edit_tag`);
    }

    deleteTag(): AxiosPromise<>
    {
        return axios.post(`projects/{projectId}/delete_tag`);
    }

    mixTags(): AxiosPromise<>
    {
        return axios.post(`projects/{projectId}/mix_tags`);
    }

    like(): AxiosPromise<>
    {
        return axios.post(`projects/{projectId}/like`);
    }

    unlike(): AxiosPromise<>
    {
        return axios.post(`projects/{projectId}/unlike`);
    }

    getFans(): AxiosPromise<>
    {
        return axios.get(`projects/{projectId}/fans`);
    }

    watch(): AxiosPromise<>
    {
        return axios.post(`projects/{projectId}/watch`);
    }

    unwatch(): AxiosPromise<>
    {
        return axios.post(`projects/{projectId}/unwatch`);
    }

    getWatchers(): AxiosPromise<>
    {
        return axios.get(`projects/{projectId}/watchers`);
    }

    createTemplate(): AxiosPromise<>
    {
        return axios.post(`projects/{projectId}/create_template`);
    }

    leave(): AxiosPromise<>
    {
        return axios.post(`projects/{projectId}/leave`);
    }

    changeLogo(): AxiosPromise<>
    {
        return axios.post(`projects/{projectId}/change_logo`);
    }

    removeLogo(): AxiosPromise<>
    {
        return axios.post(`projects/{projectId}/remove_logo`);
    }

    transferValidateToken(): AxiosPromise<>
    {
        return axios.post(`projects/{projectId}/transfer_validate_token`);
    }

    transferRequest(): AxiosPromise<>
    {
        return axios.post(`projects/{projectId}/transfer_request`);
    }

    transferStart(): AxiosPromise<>
    {
        return axios.post(`projects/{projectId}/transfer_start`);
    }

    transferAccept(): AxiosPromise<>
    {
        return axios.post(`projects/{projectId}/transfer_accept`);
    }

    transferReject(): AxiosPromise<>
    {
        return axios.post(`projects/{projectId}/transfer_reject`);
    }

    duplicateProject(): AxiosPromise<>
    {
        return axios.post(`projects/{projectId}/duplicate`);
    }
}