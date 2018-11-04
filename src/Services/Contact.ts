import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Contact extends AbstractService{
    contactProject()
    {
        return axios.post(`contact`);
    }
}