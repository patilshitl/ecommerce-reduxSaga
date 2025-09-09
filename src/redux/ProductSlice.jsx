import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({

    name:"products",
    initialState:{
        items:[],
        loading: "false",
        error: "null"
    },
    
    reducers:{

        fetchProductRequest: (state) => {
            state.loading = "true";
        },

        fetchProductSucess: (state, action) => {
            state.loading = "false";
            state.items = action.payload;
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