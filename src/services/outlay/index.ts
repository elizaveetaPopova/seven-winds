import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { EntityResponse } from './types';

export const outlayApi = createApi({
  reducerPath: 'outlayApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://185.244.172.108:8081/' }),
  endpoints: (builder) => ({
    getRows: builder.query<EntityResponse, void>({
      query: () => 'v1/outlay-rows/entity/{eID}/row/list',
    }),
  }),
});

export const {useGetRowsQuery} = outlayApi;