import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class TaskHistory extends AbstractService{
    get()
    {
        return axios.get(`history/task/{taskId}`);
    }

    getCommentVersions()
    {
        return axios.post(`history/task/{taskId}/commentVersions?id={commentId}`);
    }

    editComment()
    {
        return axios.post(`history/task/{taskId}/edit_comment?id={commentId}`);
    }

    deleteComment()
    {
        return axios.post(`history/task/{taskId}/delete_comment?id={commentId}`);
    }

    recoverComment()
    {
        return axios.post(`history/task/{taskId}/undelete_comment?id={commentId}`);
    }
}