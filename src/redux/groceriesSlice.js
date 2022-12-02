import { createSlice } from '@reduxjs/toolkit'


export const groseriesSlice = createSlice ({
    name: 'grocery',
    initialState: {
    selectedCategory: 'FRUITS'
    },
    reducers: {
    filterCategory: (state, action) => {
        state.selectedCategory = action.payload;
    }
    }
})

export const getSelectedCategory = state => state.grocery.selectedCategory;
export const { filterCategory } = groseriesSlice.actions;
export default groseriesSlice.reducer