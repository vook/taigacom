import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Statistic extends AbstractService{
    discover()
    {
        return axios.get(`stats/discover`);
    }

    system()
    {
        return axios.get(`stats/system`);
    }
}