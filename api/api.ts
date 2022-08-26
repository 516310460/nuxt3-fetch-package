import { api } from './request'

enum Api {
    Feeds = '/api/hn/feeds',
}

interface FeedsModel {
    feed: string,
    page: number,
}

export const FeedsApi = (params: FeedsModel) => api( Api.Feeds, { method: 'GET', params: params } );
