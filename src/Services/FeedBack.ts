import {AbstractService} from "../Abstracts/AbstractService";
import axios, {AxiosPromise} from "axios";

export class FeedBack extends AbstractService{
    sendFeedback(): AxiosPromise<>
    {
        return axios.post(`feedback`);
    }
}