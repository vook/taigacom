import {
    AxiosAdapter,
    AxiosBasicCredentials,
    AxiosProxyConfig,
    AxiosRequestConfig,
    AxiosTransformer,
    CancelToken
} from "axios";
import {stringify} from 'qs';
import {index} from "../types";
import {clone} from "lodash";


export abstract class AbstractService {

    constructor(private _request: Request)
    {}

    get request(): Request
    {
        return this._request.clone();
    }

    get global(): Request
    {
        return this._request;
    }
}

class Request implements AxiosRequestConfig
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

    addHeader(key: string, value: any): Request
    {
        this.headers[key] = value;
        return this;
    }

    removeHeader(key: string): Request
    {
        delete this.headers[key];
        return this;
    }

    hasHeader(key: string)
    {
        return Object.keys(this.headers).indexOf(key) > -1;
    }

    addParam(key: string, value: any): Request
    {
        this.params[key] = value;
        return this;
    }

    removeParam(key: string): Request
    {
        delete this.params[key];
        return this;
    }

    hasParam(key: string)
    {
        return Object.keys(this.params).indexOf(key) > -1;
    }

    clone(): Request
    {
        return clone(this);
    }
}

