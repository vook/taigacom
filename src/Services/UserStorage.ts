import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class UserStorage extends AbstractService{
    list()
    {
        return axios.get(`user-storage`);
    }

    create()
    {
        return axios.post(`user-storage`);
    }

    get()
    {
        return axios.get(`user-storage/{key}`);
    }

    modify()
    {
        return axios.put(`user-storage/{key}`);
    }

    modifyPartially()
    {
        return axios.patch(`user-storage/{key}`);
    }

    delete()
    {
        return axios.delete(`user-storage/{key}`);
    }
}