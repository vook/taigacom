import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class Resolver extends AbstractService{
    resolveReferencesAndSlugs()
    {
        return axios.get(`resolver`);
    }
}