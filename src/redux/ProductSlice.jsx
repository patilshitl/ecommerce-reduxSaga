import { createSlice } from "@reduxjs/toolkit";

const saveProducts = JSON.parse(localStorage.getItem("ProductsForEcommerce")) || [];

const saveProductsInCart = JSON.parse(localStorage.getItem("CartProducts")) || [];


const ProductSlice = createSlice({
  name: "products",

  initialState: {
    allProducts: saveProducts,   // <-- added this
    items: saveProducts,
    // cart: saveProductsInCart,
    cart: Array.isArray(saveProductsInCart) ? saveProductsInCart : [],
    loading: false,
    error: null,
    category: ""
  },

  reducers: {
    fetchProductRequest: (state) => {
      state.loading = true;
    },

    fetchProductSucess: (state, action) => {
      state.loading = false;
        state.allProducts = action.payload;  // keep master copy
      state.items = action.payload;        // show all at first
      localStorage.setItem("ProductsForEcommerce", JSON.stringify(action.payload));
    },

    fetchProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    fetchProductByCategory: (state, action) => {
      const category = action.payload;
      if (category === "" || category === "all") {
        state.items = state.allProducts;
      } else {
        state.items = state.allProducts.filter(
          (product) => product.category === category
        );
      }
      state.category = category;
    },

    // addProductToCart: (state, action) => {
    //     const product = action.payload;   // <-- get product from payload


    //     // check if already in cart
    //     const existCartProduct = state.cart.find((item) => item.id === product.id);

    //     console.log("Adding product to cart:", product);  // <--- check here

    //     if (existCartProduct) {
    //         // increase quantity if exists
    //         existCartProduct.quantity += 1;
    //     } else {
    //         // add new with quantity 1
    //         state.cart.push({ ...product, quantity: 1 });
    //     }

    //     // save updated cart to localStorage
    //     localStorage.setItem("CartProducts", JSON.stringify(state.cart));
    // },

    addProductToCart: (state, action) => {
        const product = action.payload;

        if (!Array.isArray(state.cart)) {
            state.cart = [];
        }

        // check if product already exists in cart
        const existCartProduct = state.cart.find((item) => item.id === product.id);

        if (existCartProduct) {
            // increase quantity if exists
            existCartProduct.quantity += 1;
        } else {
            // add new with quantity 1
            state.cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("CartProducts", JSON.stringify(state.cart));
        },

    fetchCartProductSucess: (state, action) => {
      state.loading = false;
        state.cart = JSON.parse(localStorage.getItem("CartProducts")) || [];
    },

    // countOffCartProduct: (state, action) => {
    //     state.loading = false;
    //     const cartProCount = JSON.parse(localStorage.getItem("CartProducts")) || [];
    // }


  },
});

export const {
  fetchProductRequest,
  fetchProductSucess,
  fetchProductFailure,
  fetchProductByCategory,
  addProductToCart,
  fetchCartProductSucess,
} = ProductSlice.actions;

export default ProductSlice.reducer;
