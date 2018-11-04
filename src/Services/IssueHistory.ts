import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class IssueHistory extends AbstractService{
    get()
    {
        return axios.get(`history/issue/{issueId}`);
    }

    getCommentVersions()
    {
        return axios.post(`history/issue/{issueId}/commentVersions?id={commentId}`);
    }

    editComment()
    {
        return axios.post(`history/issue/{issueId}/edit_comment?id={commentId}`);
    }

    deleteComment()
    {
        return axios.post(`history/issue/{issueId}/delete_comment?id={commentId}`);
    }

    recoverComment()
    {
        return axios.post(`history/issue/{issueId}/undelete_comment?id={commentId}`);
    }
}