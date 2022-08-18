import { createSlice } from '@reduxjs/toolkit';
import { User } from 'models';
import { RootState } from 'redux/store';

export interface AuthState {
  currentUser?: User;
}
const initialState: AuthState = {
  currentUser: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const authUser = (state: RootState) => state.reducers.user;

export default userSlice.reducer;
