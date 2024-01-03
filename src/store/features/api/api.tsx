import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const HttpApiQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    prepareHeaders: (headers: any) => {
        const token = Cookies.get("token");
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        // headers.set('Content-Type', 'application/json');
        return headers;

    }
})

export const apiSlice = createApi({
    reducerPath: 'resturent_pos',
    baseQuery: HttpApiQuery,
    tagTypes: [],
    endpoints: () => ({}),
})