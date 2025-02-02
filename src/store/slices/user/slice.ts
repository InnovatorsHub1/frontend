import { createSlice } from '@reduxjs/toolkit';
import { UserState } from './types';

const initialState: UserState = {
  isLogged: false,
  isLoading: false,
  data: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const { user, isLogged } = action.payload;
      state.isLogged = isLogged;
      state.data = user;
    },
    showLoginSpinner: (state) => {
      state.isLoading = true;
    },
    hideLoginSpinner: (state) => {
      state.isLoading = false;
    },
  },
});

export const { updateUser, showLoginSpinner, hideLoginSpinner } = userSlice.actions;
export const userReducer = userSlice.reducer;
