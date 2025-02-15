import { render, screen } from '@testing-library/react';
import SpeedDial from './SpeedDial';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';

describe('SpeedDial Component', () => {
  test('renders SpeedDial with actions', () => {
    render(
      <SpeedDial
        actions={[{ icon: <FileCopyIcon />, name: 'Copy', onClick: () => {} }]}
        ariaLabel="SpeedDial component"
      />
    );
    expect(screen.getByLabelText('SpeedDial component')).toBeInTheDocument();
  });
});