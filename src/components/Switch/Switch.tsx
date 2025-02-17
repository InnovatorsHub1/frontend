import { Switch as MUISwitch, SwitchProps } from '@mui/material';

const styleSwitch = {
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      '& + .MuiSwitch-track': {
        backgroundColor: '#6FCF97',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 14,
    height: 14,
    marginTop: '3px',
    marginLeft: '3px',
    backgroundColor: '#EDF5FF',
  },
};
export default function Switch(props: SwitchProps) {
  return <MUISwitch {...props} sx={styleSwitch} />;
}
