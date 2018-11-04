import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class User extends AbstractService{
    list(): AxiosPromise<>
    {
        return axios.get(`users`);
    }

    get(): AxiosPromise<>
    {
        return axios.get(`/api/v1/users/{userId}`);
    }

    getMe(): AxiosPromise<>
    {
        return axios.get(`users/me`);
    }

    modify(): AxiosPromise<>
    {
        return axios.put(`users/{userId}`);
    }

    modifyPartially(): AxiosPromise<>
    {
        return axios.patch(`users/{userId}`);
    }

    delete(): AxiosPromise<>
    {
        return axios.delete(`users/{userId}`);
    }

    getStats(): AxiosPromise<>
    {
        return axios.get(`users/{userId}/stats`);
    }

    getWatched(): AxiosPromise<>
    {
        return axios.get(`users/{userId}/watched`);
    }

    getLiked(): AxiosPromise<>
    {
        return axios.get(`users/{userId}/liked`);
    }

    getVoted(): AxiosPromise<>
    {
        return axios.get(`users/{userId}/voted`);
    }

    getContacts(): AxiosPromise<>
    {
        return axios.get(`users/{userId}/contacts`);
    }

    cancel(): AxiosPromise<>
    {
        return axios.post(`users/cancel`);
    }

    changeAvatar(): AxiosPromise<>
    {
        return axios.post(`users/change_avatar`);
    }

    removeAvatar(): AxiosPromise<>
    {
        return axios.post(`users/remove_avatar`);
    }

    changeEmail(): AxiosPromise<>
    {
        return axios.post(`users/change_email`);
    }

    changePassword(): AxiosPromise<>
    {
        return axios.post(`users/change_password`);
    }

    recoverPassword(): AxiosPromise<>
    {
        return axios.post(`users/password_recovery`);
    }

    changePasswordFromRecovery(): AxiosPromise<>
    {
        return axios.post(`users/change_password_from_recovery`);
    }
}