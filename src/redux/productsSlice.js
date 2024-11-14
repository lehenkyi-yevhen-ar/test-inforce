import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit"
import { addProduct, deleteProduct, fetchProducts } from "./productsOps"


const initialState = {
    items: [],
    isLoading: false,
    isError: false,
}

const slice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(
            fetchProducts.fulfilled,
            (state, action) => {
              state.items = action.payload
            }
          )
          .addCase(
            deleteProduct.fulfilled,
            (state, action) => {
              state.items = state.items.filter(
                (item) =>
                  item.id !== action.payload
              )
            }
          )
          .addCase(
            addProduct.fulfilled,
            (state, action) => {
              state.items.push(action.payload)
            }
          )
          .addMatcher(
            isAnyOf(
              fetchProducts.pending,
              deleteProduct.pending,
              addProduct.pending
            ),
            (state) => {
              state.isLoading = true
            }
          )
          .addMatcher(
            isAnyOf(
              fetchProducts.fulfilled,
              deleteProduct.fulfilled,
              addProduct.fulfilled
            ),
            (state) => {
              state.isLoading = false
            }
          )
          .addMatcher(
            isAnyOf(
              fetchProducts.rejected,
              deleteProduct.rejected,
              addProduct.rejected
            ),
            (state, action) => {
              state.isLoading = false
              state.isError = action.payload
            }
          )

    }
})

export const productsReducer = slice.reducer

export const selectProducts = (state) => 
    state.products.items

export const selectProduct = createSelector(
    [selectProducts, (state, id) => id],
    (items, id) => items.find((product) => product.id === id)
)

export const selectIsLoading = (state) => {
    state.products.isLoading
}

export const selectIsError = (state) => {
    state.products.isError
}



