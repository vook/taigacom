export interface HttpInterface<Request>
{
    get<T>(uri: string, request: Request): Promise<T>;

    post<T>(uri: string, data: object, request: Request): Promise<T>;

    put<T>(uri: string, data: object, request: Request): Promise<T>;

    patch<T>(uri: string, data: object, request: Request): Promise<T>;

    delete(uri: string, request: Request): Promise<void>;

    getOriginalRequest(): Request;

    getClonedRequest(): Request;
}