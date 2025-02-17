import { Switch as MUISwitch, SwitchProps } from '@mui/material';
import { fontGrid } from '@mui/material/styles/cssUtils';

export interface ISwitchProps extends SwitchProps {
  className?: string;
}
const styleSwitch = {
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      '& + .MuiSwitch-track': {
        backgroundColor: '#488F66',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width:16,
    height:16,
    top:"50%",
    backgroundColor: '#EDF5FF',
  },
  '& .MuiSwitch-track': {

  },
};
export default function Switch(props: ISwitchProps) {
  return <MUISwitch {...props} sx={styleSwitch} />;
}
