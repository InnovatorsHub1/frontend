import { useDarkTheme } from '../../providers/DarkThemeProvider/DarkThemeContext';
import ToggleButton from '../ToggleButton';

type DarkModeToggleProps = {
  size?: number;
  className?: string;
};

export default function DarkModeToggle(props: DarkModeToggleProps) {
  const { size, className } = props;

  const { isDarkMode, toggleDarkMode } = useDarkTheme();

  return <ToggleButton value={isDarkMode} setValue={toggleDarkMode} size={size} className={className} />;
}
