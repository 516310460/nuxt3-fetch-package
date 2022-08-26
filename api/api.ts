import { api } from './request'

enum Api {
    // 我的邀请链接
    invitationPaginateList = '/home/config/list',
}

interface PaginationModel {
    type: number,
    current_page: number,
    per_page: number,
}

// export const invitationPaginateListApi = (params: PaginationModel) => defHttp.get<PaginationDTO>({ url: Api.invitationPaginateList, params });
export const invitationPaginateListApi = (params: PaginationModel) => api( Api.invitationPaginateList, { method: 'GET', params: params, pick: ['data'] } );
// export const invitationPaginateListApi = (params: PaginationModel) => api( Api.invitationPaginateList, { method: 'POST', body: params });
