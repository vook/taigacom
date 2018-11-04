import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";
import {UserDetail} from "../Models/UserDetail";

export class Authentication extends AbstractService{
    auth(username: string, password: string): Promise<any>
    {
        return axios.post('auth', {
            type: 'normal',
            username: username,
            password: password
        }, this.cloneRequest());
    }

    register(params: {
        type: 'public'
        username: string,
        password: string,
        email: string,
        full_name: string,
        existing?: boolean,
        token?: string
    }): AxiosPromise<UserDetail> {
        return axios.post<UserDetail>('register', params, this.cloneRequest());
    }
}