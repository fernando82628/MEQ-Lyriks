import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

 
  fetch('https://shazam.p.rapidapi.com/charts/track', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam.p.rapidapi.com',
            prepareHeaders: () => {
                headers.set('X-RapidAPI-Key', 'e4d1d6ebcdmshbc44b89ef25891cp1d4570jsn681c785b8fb7')
            }
        })
    });