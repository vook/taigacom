import {HttpInterface} from "../Interfaces/HttpInterface";
import {clone} from "lodash";
import axios from "axios";
import {RequestInterface} from "../Interfaces/RequestInterface";

class AxiosHttpProvider<R extends RequestInterface> implements HttpInterface<R>
{
    constructor(private request: R)
    {}

    async delete(uri: string, request: R): Promise<void> {
        await axios.delete(uri, request);
    }

    async get<T>(uri: string, request: R): Promise<T> {
         const response = await axios.get(uri, request);
         return response.data;
    }

    async patch<T>(uri: string, data: object, request: R): Promise<T> {
        const response = await axios.patch(uri, data, request);
        return response.data;
    }

    async post<T>(uri: string, data: object, request: R): Promise<T> {
        const response = await axios.post(uri, data, request);
        return response.data;
    }

    async put<T>(uri: string, data: object, request: R): Promise<T> {
        const response = await axios.put(uri, data, request);
        return response.data;
    }

    getClonedRequest(): R {
        return clone<R>(this.request);
    }

    getOriginalRequest(): R {
        return this.request;
    }
}
