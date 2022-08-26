
/*
** 请求参数
*** 第一个参数
{
    method: 请求方法
    params: 查询参数
    body: 请求正文 - 自动字符串化（如果传递了一个对象）。
    headers: 请求头
    baseURL: 请求的基本 URL
}
*** 第二个参数
{
    key: 一个唯一的key，确保数据获取可以跨请求正确去重，如果没有提供，它将根据url和fetch选项 生成
    lazy: 加载路由后是否解析异步函数，而不是阻塞导航（默认为false）。
    server: 是否获取服务器上的数据（默认为true）。
    default：在异步函数解析之前设置数据默认值的工厂函数 - 对于该lazy: true选项特别有用。
    pick：仅从handler函数结果中选择此数组中的指定键。
    transformhandler:解析后 可用于改变函数结果的函数。
}
** 返回参数
***  data : 传入的异步函数的结果
***  pending : 一个布尔值，指示是否仍在获取数据
***  refresh : 一个函数，可以用来刷新handler函数 返回的数据
***  error : 数据获取失败时的错误对象
*/
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
            baseURL: 'https://api.fbit.com',
            server: true,
            lazy: false,
            // default: () => ({}),
            // transform: (input: any) => input,
            // pick: [],
            ...options
        }
        const { data, pending, error, refresh } = useFetch(url, opts)
        resolve({ data, pending, error, refresh })
    })
}

    
