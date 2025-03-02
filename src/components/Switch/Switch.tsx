import { Switch as MUISwitch, SwitchProps } from '@mui/material';
import { colors } from '@src/styles/constantsStyle';

const styleSwitch = {
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      '& + .MuiSwitch-track': {
        backgroundColor: colors.primary,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 14,
    height: 14,
    marginTop: '3px',
    marginLeft: '3px',
    backgroundColor: colors.accent,
  },
};
export default function Switch(props: SwitchProps) {
  return <MUISwitch {...props} sx={styleSwitch} />;
}
