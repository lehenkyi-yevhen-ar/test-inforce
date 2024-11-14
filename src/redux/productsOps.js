import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL =
    "https://6735cd715995834c8a9425d4.mockapi.io"
  
export const fetchProducts = createAsyncThunk('fetchData', async (_, thunkApi) => {
    try { 
        const { data } = await axios.get("/products")
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

// export const fetchProduct = createAsyncThunk('fetchProduct', async (id, thunkApi) => {
//     try {
//         const { data } = await axios.get(`/products/${id}`)
//         return data
//     } catch (error) {
//         return thunkApi.rejectWithValue(error.message)
//     }
// })

export const deleteProduct = createAsyncThunk('deleteData', async (id, thunkApi) => {
    try {
        const { data } = await axios.delete(`/products/${id}`)
        return data.id
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const addProduct = createAsyncThunk("addData", async (body, thunkApi) => {
    try {
        const { data } = await axios.post("/products", body)
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})
