import { useDarkTheme } from '../../providers/DarkThemeProvider/DarkThemeContext';
import { ToggleButtonProps, ToggleButton } from '../ToggleButton/ToggleButton';

export default function DarkModeToggle(props: ToggleButtonProps) {
  const { size, className} = props;

  const { isDarkMode, toggleDarkMode } = useDarkTheme();

  return (
    <ToggleButton value={isDarkMode} setValue={toggleDarkMode} size={size} className={className} />
  );
}
