import { Checkbox as MUICheckbox, CheckboxProps } from '@mui/material';
import { THEME_STYLE } from './constants';
import { useDarkTheme } from '@src/providers/DarkThemeProvider/DarkThemeContext';

export interface ICheckboxProps extends CheckboxProps {
  checked?: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

export default function Checkbox(props: ICheckboxProps) {
  const { checked, size, disabled } = props;
  const { theme } = useDarkTheme();
  return <MUICheckbox checked={checked} size={size} disabled={disabled} sx={THEME_STYLE[theme]} {...props} />;
}
