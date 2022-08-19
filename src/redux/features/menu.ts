// types
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
export interface MenuState {
  openItem: any;
  openComponent: string;
  drawerOpen: boolean;
  componentDrawerOpen: boolean;
}
const initialState: MenuState = {
  openItem: ['dashboard'],
  openComponent: 'buttons',
  drawerOpen: true,
  componentDrawerOpen: true,
};

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    activeItem(state, action) {
      state.openItem = action.payload.openItem;
    },

    activeComponent(state, action) {
      state.openComponent = action.payload.openComponent;
    },

    openDrawer(state, action) {
      state.drawerOpen = action.payload.drawerOpen;
    },

    openComponentDrawer(state, action) {
      state.componentDrawerOpen = action.payload.componentDrawerOpen;
    },
  },
});

export const { activeItem, activeComponent, openDrawer, openComponentDrawer } = menu.actions;

export const openMenu = (state: RootState) => state.reducers.menu;

export default menu.reducer;
