import {TokenInterface} from "../Interfaces/TokenInterface";
import {AbstractService} from "./AbstractService";
import {HttpInterface} from "../Interfaces/HttpInterface";

export abstract class AbstractLoggedService extends AbstractService implements TokenInterface
{
    constructor(http: HttpInterface<any>, private tokenPromise: Promise<void>)
    {
        super(http);
    }

    resolveToken(): Promise<void>
    {
        return this.tokenPromise;
    }
}



