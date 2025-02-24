import { useDarkTheme } from '../../providers/DarkThemeProvider/DarkThemeContext';
import { ToggleButtonProps, ToggleButton } from '../ToggleButton/ToggleButton';

export default function DarkModeToggle(props: ToggleButtonProps) {
  const { size, className, value, setValue } = props;

  const { isDarkMode, toggleDarkMode } = useDarkTheme();

  return (
    <ToggleButton value={value ?? isDarkMode} setValue={setValue ?? toggleDarkMode} size={size} className={className} />
  );
}
