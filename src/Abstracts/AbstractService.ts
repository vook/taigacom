import {RequestInterface} from '../Interfaces/RequestInterface';
import {HttpInterface} from "../Interfaces/HttpInterface";

export abstract class AbstractService {

    constructor(protected http: HttpInterface<any>)
    {}

    get request(): RequestInterface
    {
        return this.http.getClonedRequest();
    }

    get global(): RequestInterface
    {
        return this.http.getOriginalRequest();
    }
}