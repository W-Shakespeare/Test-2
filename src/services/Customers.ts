import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICustomer } from "../models/ICustomers";

export const customersApi = createApi({
  reducerPath: "customers",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://62322c9ac5ec1188ad2c7333.mockapi.io/customers`,
  }),
  refetchOnFocus: true,
  tagTypes: ["ICustomerList"],
  endpoints: (builder) => ({
    getCustomerList: builder.query<ICustomer[], unknown>({
      query: () => "",
      providesTags: () => ["ICustomerList"],
    }),
  }),
});

export const { useGetCustomerListQuery } = customersApi;
