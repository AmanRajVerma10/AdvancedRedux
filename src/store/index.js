import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState={showCart:false}
const cartSlice= createSlice({
    name:'cart',
    initialState: initialCartState,
    reducers:{
        hideCart(state){
            state.showCart=false;
        },
        showCart(state){
            state.showCart=true;
        }

    }
})

const store=configureStore(
    {
        reducer:{cart: cartSlice.reducer}
    }
)

export const cartActions= cartSlice.actions;

export default store;