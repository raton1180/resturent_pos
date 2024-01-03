import { apiSlice } from "../api/api"


export const userApiSlice = apiSlice
    .enhanceEndpoints({
        addTagTypes: [],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            addStaff: builder.mutation({
                query: (data) => ({
                    url: "/auth/registrations",
                    method: "POST",
                    body: data,
                }),
            }),
            getAllStaff: builder.query<any, { page?: number; pageSize?: number }>({
                query: ({ page = 1, pageSize = 10 }) => {
                    return {
                        url: `/user/staffs`,
                        params: { page, pageSize },
                    };
                },
            }),
        }),

        overrideExisting: true,
    })

export const {
    useAddStaffMutation,
    useGetAllStaffQuery
} = userApiSlice
