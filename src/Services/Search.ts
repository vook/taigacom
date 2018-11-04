import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Search extends AbstractService{
    searchInProject()
    {
        return axios.get(`search`);
    }
}