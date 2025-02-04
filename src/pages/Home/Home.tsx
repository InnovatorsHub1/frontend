import { Button } from '@mui/material';
import GenericButton from '@src/components/Button/GenericButton';
import { Delete, Warning } from '@mui/icons-material';
import ToastNotification from '@src/components/Toast';
import { SuccessToast, WarningToast } from '@src/components/Toast/Toast';
import TestToast from '@src/components/Toast/TestToast';
export default function HomePage() {
  return (
    <div className='size-full p-6'>
      <div>Main</div>
      <div>window</div>
      <ToastNotification message='Hello' type='success' />
      <SuccessToast message='Hello' type='success' />
      <WarningToast message='Hello' type='warning' />
      <TestToast />
      <br />
      <Button variant='contained'>Contained</Button>
      <Button variant='contained' disabled>
        Disabled
      </Button>
      <Button variant='contained' href='#contained-buttons'>
        Link
      </Button>
    </div>
  );
}
