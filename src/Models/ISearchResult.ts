export interface ISearchResult {
    count: number;
    epics?: IEpic[];
    issues?: IIssue[];
    tasks?: ITask[];
    userstories?: IUserStory[];
    wikipages?: IWiki[];
}
