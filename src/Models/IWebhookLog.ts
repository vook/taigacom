export interface IXXX {
    created: string;
    duration: number;
    id: number;
    request_data: RequestData;
    request_headers: RequestHeaders;
    response_data: string;
    response_headers: ResponseHeaders;
    status: number;
    url: string;
    webhook: number;
}
export interface RequestData {
    action: string;
    by: By;
    data: Data;
    date: string;
    type: string;
}
export interface By {
    full_name: string;
    gravatar_id: string;
    id: number;
    permalink: string;
    photo?: null;
    username: string;
}
export interface Data {
    test: string;
}
export interface RequestHeaders {
    Content-Length: string;
    Content-Type: string;
    X-Hub-Signature: string;
    X-TAIGA-WEBHOOK-SIGNATURE: string;
}
export interface ResponseHeaders {
}
