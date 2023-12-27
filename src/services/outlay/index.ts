import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { GetRowsResponse, IRowRequest, IRowResponse } from './types';

const eID = process.env.REACT_APP_ENTITY_ID;

export const outlayApi = createApi({
  reducerPath: 'outlayApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://185.244.172.108:8081/' }),
  endpoints: (builder) => ({
    getRows: builder.query<GetRowsResponse[], void>({
      query: () => `/v1/outlay-rows/entity/${eID}/row/list`,
    }),
    createRow: builder.mutation<IRowResponse[], IRowRequest>({
      query: (body) => ({
        url: `/v1/outlay-rows/entity/${eID}/row/create`,
        method: 'POST',
        body,
      }),
    }),
    // updateRow: builder.query<EntityResponse, void>({
    //   query: () => `/v1/outlay-rows/entity/${eID}/row/{rID}/update`,
    // }),
    // deleteRow: builder.query<EntityResponse, void>({
    //   query: () => `/v1/outlay-rows/entity/${eID}/row/{rID}/delete`,
    // }),
  }),
});

export const {
  useGetRowsQuery,
  useCreateRowMutation,
  // useUpdateRowQuery,
  // useDeleteRowQuery,
} = outlayApi;
