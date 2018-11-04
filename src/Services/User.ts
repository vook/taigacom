import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class User extends AbstractService{
    list()
    {
        return axios.get(`users`);
    }

    get()
    {
        return axios.get(`/api/v1/users/{userId}`);
    }

    getMe()
    {
        return axios.get(`users/me`);
    }

    modify()
    {
        return axios.put(`users/{userId}`);
    }

    modifyPartially()
    {
        return axios.patch(`users/{userId}`);
    }

    delete()
    {
        return axios.delete(`users/{userId}`);
    }

    getStats()
    {
        return axios.get(`users/{userId}/stats`);
    }

    getWatched()
    {
        return axios.get(`users/{userId}/watched`);
    }

    getLiked()
    {
        return axios.get(`users/{userId}/liked`);
    }

    getVoted()
    {
        return axios.get(`users/{userId}/voted`);
    }

    getContacts()
    {
        return axios.get(`users/{userId}/contacts`);
    }

    cancel()
    {
        return axios.post(`users/cancel`);
    }

    changeAvatar()
    {
        return axios.post(`users/change_avatar`);
    }

    removeAvatar()
    {
        return axios.post(`users/remove_avatar`);
    }

    changeEmail()
    {
        return axios.post(`users/change_email`);
    }

    changePassword()
    {
        return axios.post(`users/change_password`);
    }

    recoverPassword()
    {
        return axios.post(`users/password_recovery`);
    }

    changePasswordFromRecovery()
    {
        return axios.post(`users/change_password_from_recovery`);
    }
}