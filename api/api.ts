import { api } from './request'

enum Api {
    test = '/api/hn/feeds',
}

interface TestModel {
    feed: string,
    page: number,
}

export const testApi = (params: TestModel) => api( Api.test, { method: 'GET', params: params } );
