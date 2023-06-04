import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderState {
  isFixed: boolean;
  isMenuOpen: boolean;
  isSearchOpen: boolean;
  isDropdownOpen: boolean;
}

const initialState: HeaderState = {
  isFixed: false,
  isMenuOpen: false,
  isSearchOpen: false,
  isDropdownOpen: false,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setFixed: (state, action: PayloadAction<boolean>) => {
      state.isFixed = action.payload;
    },
    setMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
    setSearchOpen: (state, action: PayloadAction<boolean>) => {
      state.isSearchOpen = action.payload;
    },
    setDropdownOpen: (state, action: PayloadAction<boolean>) => {
      state.isDropdownOpen = action.payload;
    },
  },
});

export const {
  setFixed,
  setMenuOpen,
  setSearchOpen,
  setDropdownOpen,
} = headerSlice.actions;

export default headerSlice.reducer;