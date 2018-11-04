import {AbstractService} from "../Abstracts/AbstractService";
import axios from "axios";

export class FeedBack extends AbstractService{
    sendFeedback()
    {
        return axios.post(`feedback`);
    }
}