import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Import extends AbstractService{
    projectDump()
    {
        return axios.post(`importer/load_dump`);
    }
}