import { useDarkTheme } from '../../providers/DarkThemeProvider/DarkThemeContext';
import { ToggleButtonProps, ToggleButton } from '../ToggleButton/ToggleButton';

type DarkModeToggleProps = Omit<ToggleButtonProps, 'value' | 'setValue'>;

export default function DarkModeToggle(props: DarkModeToggleProps) {
  const { size, className } = props;

  const { isDarkMode, toggleDarkMode, theme } = useDarkTheme();

  return <ToggleButton value={isDarkMode} setValue={toggleDarkMode} theme={theme} size={size} className={className} />;
}
