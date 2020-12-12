import { createSlice } from '@reduxjs/toolkit'

const basicSlice = createSlice({
  name: 'basic',
  initialState: {},
  reducers: {
    basicAction(state, action) {
      return state;
    }
  }
});

export const { basicAction } = basicSlice.actions;

export default basicSlice.reducer;
