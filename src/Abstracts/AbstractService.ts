import {AxiosRequestConfig} from "axios";


export abstract class AbstractService {

    constructor(private request: AxiosRequestConfig)
    {}

    protected cloneRequest()
    {
        return Object.create(this.request);
    }

    protected globalRequest()
    {
        return this.request;
    }
}