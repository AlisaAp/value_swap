import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { API_BASE_URL } from '../../utils/API_CONFIG';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (build) => ({
    getCoinsList: build.query(
      {
        query: () => '/coins/list',
      },
    ),
    getCoinById: build.query(
      {
        query: (id) => `/coins/${id}`,
      },
    ),
  }),
});
export const { useGetCoinsListQuery, useGetCoinByIdQuery } = api;
