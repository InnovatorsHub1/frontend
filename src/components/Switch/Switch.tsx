import { Switch as MUISwitch, SwitchProps } from '@mui/material';

export interface ISwitchProps extends SwitchProps {
  className?: string;
}
const styleSwitch = {
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      '& + .MuiSwitch-track': {
        backgroundColor: '#6FCF97',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width:14,
    height:14,
    marginTop:"3px",
    marginLeft:"3px",
    backgroundColor: '#EDF5FF',
  },
  '& .MuiSwitch-track': {

  },
};
export default function Switch(props: ISwitchProps) {
  return <MUISwitch {...props} sx={styleSwitch} />;
}
