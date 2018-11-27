import {AbstractService} from "../Abstracts/AbstractService";
import {IAuthentication} from "../Models/IAuthentication";
import {IUser} from "../Models/IUser";

export class Authentication extends AbstractService
{
    /**
     *
     * @param username
     * @param password
     */
    async normalAuth(username: string, password: string): Promise<IAuthentication>
    {
        return await this.http.post<any>('auth', {
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
    async githubAuth(code: string, token: string): Promise<IAuthentication>
    {
        return await this.http.post<any>('auth', {
                type: 'github',
                code: code,
                token: token
            }, this.request
        );
    }

    /**
     *
     * @param username
     * @param password
     * @param email
     * @param fullName
     */
    async publicRegister(
        username: string,
        password: string,
        email: string,
        fullName: string
    ): Promise<IUser>
    {
        return await this.http.post<IUser>('register', {
                type: 'public',
                username: username,
                password: password,
                email: email,
                full_name: fullName
            }, this.request
        );
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
    async privateRegister(
        username: string,
        password: string,
        token: string,
        exist: boolean,
        email?: string,
        fullName?: string
    ): Promise<IUser>
    {
        return await this.http.post<IUser>('register', {
                type: 'private',
                username: username,
                password: password,
                token: token,
                existing: exist,
                email: email,
                full_name: fullName
            }, this.request
        );
    }
}