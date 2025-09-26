import { createSlice } from "@reduxjs/toolkit";

// const saveProducts = JSON.parse(localStorage.getItem("ProductsForEcommerce")) || [];

// const saveProductsInCart = JSON.parse(localStorage.getItem("CartProducts")) || [];

// const saveProductsInWishlist = JSON.parse(localStorage.getItem("WishlistProducts")) || [];


const ProductSlice = createSlice({
  name: "products",

  initialState: {
    allProducts: [],   // <-- added this
    items: [],
    cart:[],
    wishlist:[],
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
      // localStorage.setItem("ProductsForEcommerce", JSON.stringify(action.payload));
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

        // localStorage.setItem("CartProducts", JSON.stringify(state.cart));
    },

    fetchCartProductSucess: (state, action) => {
      state.loading = false;
        state.cart = JSON.parse(localStorage.getItem("CartProducts")) || [];
    },

    removeCartProducts: (state, action) => {

      const cartProId = action.payload;
      state.cart = state.cart.filter(items => items.id !== cartProId);

      localStorage.setItem("CartProducts",JSON.stringify(state.cart));
    },


    addProductToWishlist: (state, action) => {
        const product = action.payload;

        if (!Array.isArray(state.wishlist)) {
            state.wishlist = [];
        }

        // check if product already exists in wishlist
        const existWishlistProduct = state.wishlist.find((item) => item.id === product.id);

        if (existWishlistProduct) {
            // increase quantity if exists
            existWishlistProduct.quantity += 1;
        } else {
            // add new with quantity 1
            state.wishlist.push({ ...product, quantity: 1 });
        }

        // localStorage.setItem("WishlistProducts", JSON.stringify(state.wishlist));
        },

        fetchWishlistProductSucess: (state, action) => {
          state.loading = false;
          state.wishlist = action.payload;
        },


  },
});

export const {
  fetchProductRequest,
  fetchProductSucess,
  fetchProductFailure,
  fetchProductByCategory,
  addProductToCart,
  fetchCartProductSucess,
  addProductToWishlist,
  fetchWishlistProductSucess,
  removeCartProducts,
} = ProductSlice.actions;

export default ProductSlice.reducer;
