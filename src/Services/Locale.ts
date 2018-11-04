import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Locale extends AbstractService{
    list()
    {
        return axios.get(`locales`);
    }
}