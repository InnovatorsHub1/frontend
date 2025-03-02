import { type PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { LS_KEY_THEME } from '../../utils/constants';
import { DarkThemeContext, Theme } from './DarkThemeContext';
import { useLocalStorage } from '@src/hooks/useLocalStorage';

type DarkThemeProviderProps = PropsWithChildren;

export default function DarkThemeProvider(props: DarkThemeProviderProps) {
  const { children } = props;

  const [localStorageTheme, setLocalStorageTheme] = useLocalStorage(LS_KEY_THEME);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.DARK : Theme.LIGHT;

    const currentTheme = localStorageTheme || deviceTheme;

    const [htmlElement] = document.getElementsByTagName('html');
    htmlElement!.setAttribute('data-theme', currentTheme);
    document.body.setAttribute('class', currentTheme);

    return currentTheme === Theme.DARK;
  });

  const toggleDarkMode = useCallback(() => {
    const currentTheme = isDarkMode ? Theme.LIGHT : Theme.DARK;
    setLocalStorageTheme(currentTheme);

    const [htmlElement] = document.getElementsByTagName('html');
    htmlElement!.setAttribute('data-theme', currentTheme);
    document.body.setAttribute('class', currentTheme);

    setIsDarkMode(!isDarkMode);
  }, [isDarkMode, setIsDarkMode, setLocalStorageTheme]);

  const value = useMemo(
    () => ({ isDarkMode, toggleDarkMode, theme: isDarkMode ? Theme.DARK : Theme.LIGHT }),
    [isDarkMode, toggleDarkMode],
  );

  return <DarkThemeContext.Provider value={value}>{children}</DarkThemeContext.Provider>;
}
