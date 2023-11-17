import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiCars = createApi({
  reducerPath: 'сars',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://655625da84b36e3a431f36b2.mockapi.io',
  }),
  tagTypes: ['Advert'],
  endpoints: builder => ({
    getCarsByPage: builder.query({
      query: (page = 1) => `adverts1?page=${page}&limit=12`,
    }),
    getAdverts: builder.query({
      query: () => '/adverts1',
      providesTags: ['Advert'],
    }),
  }),
});

export const { useGetCarsByPageQuery, useGetAdvertsQuery } = apiCars;






// import axios from 'axios';
// import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'https://655625da84b36e3a431f36b2.mockapi.io';

// export const fetchCars = createAsyncThunk('adverts1/fetchAll', async (_, thunkAPI) => {
//     try {
//         const response = await axios.get('/adverts1');
//         console.log(response.data);
//   return response.data;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//   }
      
// });

// export const addCar = createAsyncThunk(
//     'adverts1/addCar',
//     async (car, thunkAPI) => {
//         try {
//             const response = await axios.post('/adverts1', car);
//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

// // /adverts1/:id
// export const deleteCar = createAsyncThunk(
//     'adverts1/deleteCar',
//     async (Id, thunkAPI) => {
//         try {
//             const response = await axios.delete(`/adverts1/${Id}`);
//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );