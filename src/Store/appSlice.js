import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'app',
  initialState: {
    theme: 'light',
  },
  reducers: {
    setDarkMode: (state) => {
      state.theme = 'dark';
    },
    setLightMode: (state) => {
      state.theme = 'light';
    },
  },
});

export const {setDarkMode, setLightMode} = slice.actions;

export const selectTheme = (state) => state.app.theme;

export default slice.reducer;
