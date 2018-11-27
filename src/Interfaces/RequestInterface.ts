export interface RequestInterface
{
    paramsSerializer(params: object): string;

    addHeader(key: string, value: any): RequestInterface;

    removeHeader(key: string): RequestInterface

    hasHeader(key: string): boolean;

    addParam(key: string, value: any): RequestInterface;

    removeParam(key: string): RequestInterface;

    hasParam(key: string): boolean;

    clone(): RequestInterface;
}