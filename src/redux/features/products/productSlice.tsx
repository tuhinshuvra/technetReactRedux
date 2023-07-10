import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';

interface IProduct {
    status: boolean;
    priceRange: number;
}

const initialState: IProduct = {
    status: false,
    priceRange: 150,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        toggleState: (state) => {
            state.status = !state.status;
        },
        setPriceRange: (state, action: PayloadAction<number>) => {
            state.priceRange = action.payload;
        }
<<<<<<< HEAD
    },
});

export const { toggleState, setPriceRange } = productSlice.actions;
export default productSlice.reducer;

=======
    }
});

export const { toggleState, setPriceRange } = productSlice.actions;
export default productSlice.reducer;
>>>>>>> d2f53499c7dd6ce99af11714d764a5e8336af7be
