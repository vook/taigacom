import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class WikiHistory extends AbstractService{
    get(): AxiosPromise<>
    {
        return axios.get(`history/wiki/{wikiId}`);
    }

    getCommentVersions(): AxiosPromise<>
    {
        return axios.post(`history/wiki/{wikiId}/commentVersions?id={commentId}`);
    }

    editComment(): AxiosPromise<>
    {
        return axios.post(`history/wiki/{wikiId}/edit_comment?id={commentId}`);
    }

    deleteComment(): AxiosPromise<>
    {
        return axios.post(`history/wiki/{wikiId}/delete_comment?id={commentId}`);
    }

    recoverComment(): AxiosPromise<>
    {
        return axios.post(`history/wiki/{wikiId}/undelete_comment?id={commentId}`);
    }
}