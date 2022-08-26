import { Ref } from '@vue/runtime-dom'
import type { NitroFetchRequest } from 'nitropack'
import { KeyOfRes } from 'nuxt/dist/app/composables/asyncData'

type UseFetchOptions = {
    key?: string,
    method?: string,
    params?: any,
    body?: RequestInit['body'] | Record<string, any>
    headers?: {key: string, value: string},
    baseURL?: string,
    server?: boolean
    lazy?: boolean
    default?: () => DataT
    transform?: (input: DataT) => DataT
    pick?: KeyOfRes<(input: DataT) => DataT>
}

type DataT = {
    data: Ref<DataT>
    pending: Ref<boolean>
    refresh: () => Promise<void>
    error: Ref<Error | boolean>
}

export const api = function (url: NitroFetchRequest | Ref<NitroFetchRequest> | (() => NitroFetchRequest), options?: UseFetchOptions): Promise<DataT>{
    return new Promise(resolve => {
        // 对象合并
        const opts = {
            // key: `${new Date().getTime()}`,
            // method: 'GET',
            // params: {},
            // body: {},
            // headers: {},
            baseURL: 'https://hn.nuxtjs.org',
            server: true,
            lazy: false,
            // default: () => ({}),
            // transform: (input: any) => input,
            // pick: [],
            ...options
        }
        const { data, pending, error, refresh } = useFetch(url, opts)
        // @ts-ignore
        resolve({ data, pending, error, refresh })
    })
}

    
