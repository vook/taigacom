import {IEpic} from "./IEpic";
import {IIssue} from "./IIssue";
import {ITask} from "./ITask";
import {IUserStory} from "./IUserStory";
import {IWiki} from "./IWiki";

export interface ISearchResult {
    count: number;
    epics?: IEpic[];
    issues?: IIssue[];
    tasks?: ITask[];
    userstories?: IUserStory[];
    wikipages?: IWiki[];
}
