import { createSlice } from '@reduxjs/toolkit'

const basicSlice = createSlice({
  name: 'basic',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    basicAction(state, action) {
      return {
        ...state,
        ...action.payload
      };
    },
    login(state, action) {
      return {
        ...state,
        isLoggedIn: true
      };
    },
    logout(state, action) {
      return {
        ...state,
        isLoggedIn: false
      };
    }
  }
});


export const { basicAction, login, logout, loadingUsers, setUsers } = basicSlice.actions;

export const thunkAction = data => dispatch => dispatch(basicAction({ someData: data }));


export default basicSlice.reducer;
