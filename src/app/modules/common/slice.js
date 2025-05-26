import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    context: '',
};

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
      setContext(state, action) {
        state.context = action.payload;
      },
    },
  });

  export const {
    setContext,
} = commonSlice.actions;

export default commonSlice.reducer;
