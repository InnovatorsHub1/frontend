import { type PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { LS_KEY_THEME } from '../../utils/constants';
import { DarkThemeContext } from './DarkThemeContext';
import { useLocalStorage } from '@src/hooks/useLocalStorage';

const THEME_OPTIONS = { dark: 'dark', light: 'light' };

type DarkThemeProviderProps = PropsWithChildren;

export default function DarkThemeProvider(props: DarkThemeProviderProps) {
  const { children } = props;

  const [localStorageTheme, setLocalStorageTheme] = useLocalStorage(LS_KEY_THEME);

  // all useStates:
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? THEME_OPTIONS.dark
      : THEME_OPTIONS.light;

    const currentTheme = localStorageTheme || deviceTheme;

    const [htmlElement] = document.getElementsByTagName('html');
    htmlElement!.setAttribute('data-theme', currentTheme);
    document.body.setAttribute('class', currentTheme);

    return currentTheme === THEME_OPTIONS.dark;
  });

  // all functions:
  const toggleDarkMode = useCallback(() => {
    const themeToBe = isDarkMode ? THEME_OPTIONS.light : THEME_OPTIONS.dark;
    setLocalStorageTheme(themeToBe);

    // @ts-ignore
    const [htmlElement] = document.getElementsByTagName('html');
    htmlElement!.setAttribute('data-theme', themeToBe);
    document.body.setAttribute('class', themeToBe);

    setIsDarkMode(!isDarkMode);
  }, [isDarkMode, setIsDarkMode, setLocalStorageTheme]);

  const value = useMemo(() => ({ isDarkMode, toggleDarkMode }), [isDarkMode, toggleDarkMode]);

  return <DarkThemeContext.Provider value={value}>{children}</DarkThemeContext.Provider>;
}
