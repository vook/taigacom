import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class UserStoryHistory extends AbstractService{
    get()
    {
        return axios.get(`history/userstory/{usId}`);
    }

    getCommentVersions()
    {
        return axios.get(`history/userstory/{usId}/commentVersions?id={commentId}`);
    }

    editComment()
    {
        return axios.post(`history/userstory/{usId}/edit_comment?id={commentId}`);
    }

    deleteComment()
    {
        return axios.post(`history/userstory/{usId}/delete_comment?id={commentId}`);
    }

    recoverComment()
    {
        return axios.post(`history/userstory/{usId}/undelete_comment?id={commentId}`);
    }
}