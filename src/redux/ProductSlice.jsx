import { createSlice } from "@reduxjs/toolkit";

const saveProducts = JSON.parse(localStorage.getItem ("ProductsForEcommerce")) || [];

const ProductSlice = createSlice({

    name:"products",

    initialState:{
        items:saveProducts,
        loading: false,
        error: null,
        category: ""
    },
    
    reducers:{

        fetchProductRequest: (state) => {
            state.loading = true;
            
        },

        fetchProductSucess: (state, action) => {
            state.loading = false;
            state.items = action.payload;   // ✅ keep everything
            localStorage.setItem("ProductsForEcommerce", JSON.stringify(state.items));
        },


        fetchProductFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        fetchProductByCategory: (state, action) => {
            state.category = action.payload;
        }
    },

})

export const {
        fetchProductRequest,
        fetchProductSucess,
        fetchProductFailure,
        fetchProductByCategory,
    } = ProductSlice.actions

    
export default ProductSlice.reducer;