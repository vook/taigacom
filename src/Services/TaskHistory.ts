import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class TaskHistory extends AbstractService{
    get(): AxiosPromise<>
    {
        return axios.get(`history/task/{taskId}`);
    }

    getCommentVersions(): AxiosPromise<>
    {
        return axios.post(`history/task/{taskId}/commentVersions?id={commentId}`);
    }

    editComment(): AxiosPromise<>
    {
        return axios.post(`history/task/{taskId}/edit_comment?id={commentId}`);
    }

    deleteComment(): AxiosPromise<>
    {
        return axios.post(`history/task/{taskId}/delete_comment?id={commentId}`);
    }

    recoverComment(): AxiosPromise<>
    {
        return axios.post(`history/task/{taskId}/undelete_comment?id={commentId}`);
    }
}