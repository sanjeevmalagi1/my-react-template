import { createSlice } from '@reduxjs/toolkit'

const basicSlice = createSlice({
  name: 'basic',
  initialState: {},
  reducers: {
    basicAction(state, action) {
      return {
        ...state,
        ...action.payload
      };
    }
  }
});

export const thunkAction = data => dispatch => dispatch(basicAction({ someData: data }))

export const { basicAction } = basicSlice.actions;

export default basicSlice.reducer;
