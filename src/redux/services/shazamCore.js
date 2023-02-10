import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'e4d1d6ebcdmshbc44b89ef25891cp1d4570jsn681c785b8fb7');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        //Line 15 is 'building' api endpoints we want to call.
        getTopCharts: builder.query({ query: () => '/charts/track' }),
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;