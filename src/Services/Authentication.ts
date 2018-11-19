import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";
import {IAuthentication} from "../Models/IAuthentication";
import {IUser} from "../Models/IUser";

export class Authentication extends AbstractService{
    /**
     *
     * @param username
     * @param password
     */
    normalAuth(username: string, password: string): AxiosPromise<IAuthentication>
    {
        return axios.post('auth', {
            type: 'normal',
            username: username,
            password: password
        }, this.request);
    }

    /**
     *
     * @param code
     * @param token
     */
    githubAuth(code: string, token: string): AxiosPromise<IAuthentication>
    {
        return axios.post('auth', {
            type: 'github',
            code: code,
            token: token
        }, this.request);
    }

    /**
     *
     * @param username
     * @param password
     * @param email
     * @param fullName
     */
    publicRegister(
        username: string,
        password: string,
        email: string,
        fullName: string
    ): AxiosPromise<IUserDetail> {
        return axios.post<IUserDetail>('register', {
            type: 'public',
            username: username,
            password: password,
            email: email,
            full_name: fullName
        }, this.request);
    }

    /**
     *
     * @param username
     * @param password
     * @param token
     * @param exist
     * @param email
     * @param fullName
     */
    privateRegister(
        username: string,
        password: string,
        token: string,
        exist: boolean,
        email?: string,
        fullName?: string
    ): AxiosPromise<IUser> {
        return axios.post<IUser>('register', {
            type: 'private',
            username: username,
            password: password,
            token: token,
            existing: exist,
            email: email,
            full_name: fullName
        }, this.request);
    }
}