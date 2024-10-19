import { apiSlice } from "../slice/apiSlice";

const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query: () => ({
        url: "/users/allusers",
      }),
      providesTags: ["users"],
    }),
    // getUserInfo: builder.query<any, void>({
    //   query: ({ id }) => ({
    //     url: `/users/getUser/${id}`,
    //   }),
    //   providesTags: ["users"],
    // }),

    getUserInfo: builder.query({
      query: ({ id }) => ({
        url: `/users/getUser/${id}`,
      }),
      providesTags: ["users"],
    }),

    updateProfile: builder.mutation<void, { formData: any; id: string }>({
      query: ({ formData, id }) => ({
        url: `/users/update-user/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["users"],
    }),
    changePassword: builder.mutation<void, { formData: any; id: string }>({
      query: ({ formData, id }) => ({
        url: `/users/change-password/${id}`,
        method: "PUT",
        body: JSON.stringify(formData?.password),
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserInfoQuery, useUpdateProfileMutation, useChangePasswordMutation } = usersApi;
