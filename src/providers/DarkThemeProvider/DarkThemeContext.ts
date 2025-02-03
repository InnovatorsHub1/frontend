import { createContext, useContext } from 'react';

type DarkThemeContextProps = {
  isDarkMode: boolean;
  toggleDarkMode: (value: any) => void;
};

const INITIAL_STATE = {} as DarkThemeContextProps;

const DarkThemeContext = createContext<DarkThemeContextProps>(INITIAL_STATE);
const useDarkTheme = () => useContext(DarkThemeContext);

export { DarkThemeContext, useDarkTheme };
