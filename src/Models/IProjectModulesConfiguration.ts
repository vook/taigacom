export interface IProjectModulesConfiguration {
    bitbucket: Bitbucket;
    github: GithubOrGogs;
    gitlab: Gitlab;
    gogs: GithubOrGogs;
}
export interface Bitbucket {
    secret: string;
    valid_origin_ips?: (string)[] | null;
    webhooks_url: string;
}
export interface GithubOrGogs {
    secret: string;
    webhooks_url: string;
}
export interface Gitlab {
    secret: string;
    valid_origin_ips?: (null)[] | null;
    webhooks_url: string;
}
