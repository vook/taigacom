import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class WikiHistory extends AbstractService{
    get()
    {
        return axios.get(`history/wiki/{wikiId}`);
    }

    getCommentVersions()
    {
        return axios.post(`history/wiki/{wikiId}/commentVersions?id={commentId}`);
    }

    editComment()
    {
        return axios.post(`history/wiki/{wikiId}/edit_comment?id={commentId}`);
    }

    deleteComment()
    {
        return axios.post(`history/wiki/{wikiId}/delete_comment?id={commentId}`);
    }

    recoverComment()
    {
        return axios.post(`history/wiki/{wikiId}/undelete_comment?id={commentId}`);
    }
}