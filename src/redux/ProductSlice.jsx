import { createSlice } from "@reduxjs/toolkit";

const saveProductsFromApi = JSON.parse(localStorage.getItem ("ProductsForEcommerce")) || [];

const ProductSlice = createSlice({

    name:"products",

    initialState:{
        products:saveProductsFromApi,
        loading: false,
        error: null
    },
    
    reducers:{

        fetchProductRequest: (state) => {
            state.loading = "true";
            
        },

        fetchProductSucess: (state, action) => {
            state.loading = "false";
            state.items = action.payload;
            localStorage.setItem("ProductsForEcommerce", JSON.stringify(state.products))
        },

        fetchProductFailure: (state, action) => {
            state.loading = "false";
            state.error = action.payload;
        },
    },

})

export const {
        fetchProductRequest,
        fetchProductSucess,
        fetchProductFailure,
    } = ProductSlice.actions

    
export default ProductSlice.reducer;