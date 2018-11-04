import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class UserStoryHistory extends AbstractService{
    get(): AxiosPromise<>
    {
        return axios.get(`history/userstory/{usId}`);
    }

    getCommentVersions(): AxiosPromise<>
    {
        return axios.get(`history/userstory/{usId}/commentVersions?id={commentId}`);
    }

    editComment(): AxiosPromise<>
    {
        return axios.post(`history/userstory/{usId}/edit_comment?id={commentId}`);
    }

    deleteComment(): AxiosPromise<>
    {
        return axios.post(`history/userstory/{usId}/delete_comment?id={commentId}`);
    }

    recoverComment(): AxiosPromise<>
    {
        return axios.post(`history/userstory/{usId}/undelete_comment?id={commentId}`);
    }
}