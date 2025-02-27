import { createContext, useContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

type DarkThemeContextProps = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  theme: Theme;
};

const INITIAL_STATE = {} as DarkThemeContextProps;

const DarkThemeContext = createContext<DarkThemeContextProps>(INITIAL_STATE);
const useDarkTheme = () => useContext(DarkThemeContext);

export { DarkThemeContext, useDarkTheme };
