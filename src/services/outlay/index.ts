import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  GetRowsResponse,
  IActionRowResponse,
  ICreateRowRequest,
  IUpdateRowRequest,
} from './types';

const eID = process.env.REACT_APP_ENTITY_ID;

export const outlayApi = createApi({
  reducerPath: 'outlayApi',
  tagTypes: ['Rows'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://185.244.172.108:8081/' }),
  endpoints: (builder) => ({
    getRows: builder.query<GetRowsResponse[], void>({
      query: () => `/v1/outlay-rows/entity/${eID}/row/list`,
      providesTags: (result) =>
        result
          ? [
            ...result.map((row) => ({ type: 'Rows' as const, id: row.id })),
            { type: 'Rows', id: 'LIST' },
          ]
          : [{ type: 'Rows', id: 'LIST' }],
    }),
    createRow: builder.mutation<IActionRowResponse, ICreateRowRequest>({
      query: (body) => ({
        url: `/v1/outlay-rows/entity/${eID}/row/create`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Rows', id: 'LIST' }],
      transformResponse: (response: { current: IActionRowResponse }) =>
        response.current,
    }),
    updateRow: builder.mutation<
      IActionRowResponse,
      { rID: number | null; body: IUpdateRowRequest }
    >({
      query: ({ rID, body }) => ({
        url: `/v1/outlay-rows/entity/${eID}/row/${rID}/update`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Rows', id: 'LIST' }],
      transformResponse: (response: { current: IActionRowResponse }) =>
        response.current,
    }),
    deleteRow: builder.mutation<IActionRowResponse, number>({
      query: (rID) => ({
        url: `/v1/outlay-rows/entity/${eID}/row/${rID}/delete`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Rows'],
    }),
  }),
});

export const {
  useGetRowsQuery,
  useCreateRowMutation,
  useUpdateRowMutation,
  useDeleteRowMutation,
} = outlayApi;
