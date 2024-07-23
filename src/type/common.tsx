export type httpClientType = {
    baseURL: string,
    params: { key: string },
    get: (id: string, payload: object) => Promise<any>
}