import {AxiosRequestConfig, CancelToken} from "axios";
import {index} from "../types";
import {stringify} from "qs";
import {clone} from "lodash";
import {RequestInterface} from "../Interfaces/RequestInterface";

export class AxiosRequest implements AxiosRequestConfig, RequestInterface
{
    baseURL: string;
    cancelToken: CancelToken;
    data: object;
    headers: index<any>;
    params: index<any>;
    timeout: number;
    url: string;

    paramsSerializer(params: object): string
    {
        return stringify(params, {arrayFormat: 'brackets'})
    }

    addHeader(key: string, value: any): AxiosRequest
    {
        this.headers[key] = value;
        return this;
    }

    removeHeader(key: string): AxiosRequest
    {
        delete this.headers[key];
        return this;
    }

    hasHeader(key: string)
    {
        return Object.keys(this.headers).indexOf(key) > -1;
    }

    addParam(key: string, value: any): AxiosRequest
    {
        this.params[key] = value;
        return this;
    }

    removeParam(key: string): AxiosRequest
    {
        delete this.params[key];
        return this;
    }

    hasParam(key: string)
    {
        return Object.keys(this.params).indexOf(key) > -1;
    }

    clone(): AxiosRequest
    {
        return clone<AxiosRequest>(this);
    }
}