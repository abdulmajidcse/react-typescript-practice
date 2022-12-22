import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const themeTypes = { system: "system", dark: "dark", light: "light" };

// Define a type for the slice state
interface ThemeState {
  type: string;
  mode: string;
}

// Define the initial state using that type
const initialState: ThemeState = {
  type: themeTypes.light,
  mode: themeTypes.light,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<string | undefined>) => {
      const THEME_KEY = "theme_type";

      // get theme type from local storage
      let getThemeType = localStorage.getItem(THEME_KEY);

      // set theme type in local storage
      if (action.payload) {
        localStorage.setItem(THEME_KEY, action.payload);
      } else if (!getThemeType) {
        localStorage.setItem(THEME_KEY, themeTypes.system);
      }

      // get theme type for update value
      getThemeType = localStorage.getItem(THEME_KEY) ?? themeTypes.system;
      // set state type (theme type)
      state.type = getThemeType;

      // check system dark color
      const isSystemThemeDark = window.matchMedia(
        `(prefers-color-scheme: ${themeTypes.dark})`
      ).matches;

      if (
        getThemeType === themeTypes.dark ||
        (getThemeType === themeTypes.system && isSystemThemeDark)
      ) {
        // set state mode dark
        state.mode = themeTypes.dark;
        document.documentElement.classList.add("dark");
      } else {
        // set state mode light
        state.mode = themeTypes.light;
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
