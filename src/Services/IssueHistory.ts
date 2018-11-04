import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class IssueHistory extends AbstractService{
    get(): AxiosPromise<>
    {
        return axios.get(`history/issue/{issueId}`);
    }

    getCommentVersions(): AxiosPromise<>
    {
        return axios.post(`history/issue/{issueId}/commentVersions?id={commentId}`);
    }

    editComment(): AxiosPromise<>
    {
        return axios.post(`history/issue/{issueId}/edit_comment?id={commentId}`);
    }

    deleteComment(): AxiosPromise<>
    {
        return axios.post(`history/issue/{issueId}/delete_comment?id={commentId}`);
    }

    recoverComment(): AxiosPromise<>
    {
        return axios.post(`history/issue/{issueId}/undelete_comment?id={commentId}`);
    }
}