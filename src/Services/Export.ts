import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Export extends AbstractService{
    ProjectDump()
    {
        return axios.get(`exporter/{projectId}`);
    }
}