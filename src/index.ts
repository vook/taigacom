import {
    AxiosAdapter,
    AxiosBasicCredentials,
    AxiosProxyConfig,
    AxiosRequestConfig,
    AxiosTransformer,
    CancelToken
} from "axios";
import {Authentication} from "./Services/Authentication";

export class Config {

    private globalRequest: RequestOptions;

    private authentication: Promise<any>;

    constructor(baseUrl: string, username: string, password: string)
    {
        this.globalRequest = new RequestOptions(
            baseUrl,
            (new Headers()).add('Content-Type', 'application/json')
        );
        this.authentication = (new Authentication(this.globalRequest)).auth(username, password);
    }

    waitAuth(func: () => any)
    {
        this.authentication.then(value => {
                this.globalRequest.headers.add('Authorization', `Bearer ${value.auth_token}`)
        });
    }
}

export class RequestOptions implements AxiosRequestConfig
{
    adapter: AxiosAdapter;
    auth: AxiosBasicCredentials;
    baseURL: string;
    cancelToken: CancelToken;
    data: any;
    headers: Headers;
    httpAgent: any;
    httpsAgent: any;
    maxContentLength: number;
    maxRedirects: number;
    onDownloadProgress: (progressEvent: any) => void;
    onUploadProgress: (progressEvent: any) => void;
    params: any;
    paramsSerializer: (params: any) => string;
    proxy: AxiosProxyConfig | false;
    responseType: string;
    timeout: number;
    transformRequest: AxiosTransformer | AxiosTransformer[];
    transformResponse: AxiosTransformer | AxiosTransformer[];
    url: string;
    validateStatus: (status: number) => boolean;
    withCredentials: boolean;
    xsrfCookieName: string;
    xsrfHeaderName: string;

    constructor(baseUrl: string, headers: Headers)
    {
        this.baseURL = baseUrl;
        this.headers = headers;
    }
}

class Headers
{
    [key: string]: any;

    add(key: string, value: string): Headers
    {
        this[key] = value;
        return this;
    }

    remove(key: string): Headers
    {
        delete this[key];
        return this;
    }

    has(key: string): boolean
    {
        return Object.keys(this).indexOf(key) > -1;
    }
}