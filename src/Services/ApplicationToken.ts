import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class ApplicationToken extends AbstractService{
    list()
    {
        return axios.get(`application-tokens`);
    }

    get()
    {
        return axios.get(`application-tokens/{applicationTokenId}`);
    }

    delete()
    {
        return axios.delete(`application-tokens/{applicationTokenId}`);
    }

    authorize()
    {
        return axios.post(`application-tokens/authorize`);
    }

    validate()
    {
        return axios.post(`application-tokens/validate`);
    }
}