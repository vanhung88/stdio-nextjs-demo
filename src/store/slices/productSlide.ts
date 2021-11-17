import {
  createSlice,
  Draft,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import productApi from "../../services/apis/product";

//API
// [GET] : list product
export const productList: any = createAsyncThunk(
  "api/products",
  async ({}, { rejectWithValue }) => {
    try {
      const { data } = await productApi.listProduct();
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

//API
// [GET] : list product by id
export const productDetail: any = createAsyncThunk(
  "api/product/id",
  async (params: string, { rejectWithValue }) => {
    try {
      const { data } = await productApi.productDetail(params);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

const initialState = {
  getProducts: [],
} as const;

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    test: () => {
      return;
    },
  },
  extraReducers: {
    // get list products
    [productList.pending]: (state: any) => {
      state.loading = true;
    },
    [productList.fulfilled]: (state: any, action: any) => {
      state.loading = false;
      state.getProducts = action.payload;
    },
    [productList.rejected]: (state: any, action: any) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// // Selectors
// export const getUser = state => state.user;

// Reducers and actions
export const { test } = productSlice.actions;

export default productSlice.reducer;
