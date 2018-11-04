import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Application extends AbstractService {
    get(id: number)
    {
        return axios.get(`applications/${id}`, this.cloneRequest());
    }

    getToken(id: number)
    {
        return axios.get(`applications/${id}/token`, this.cloneRequest());
    }
}