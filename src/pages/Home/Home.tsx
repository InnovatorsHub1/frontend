import { Button } from '@mui/material';
import Modal from '@src/components/Modal/Modal';
import { useState } from 'react';

import GenericButton from '@src/components/Button/GenericButton';
import { Delete } from '@mui/icons-material';
export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='size-full p-6'>
      <div>Main</div>
      <div>window</div>

      <GenericButton
        variant='primary'
        size='sm'
        icon={
          <Delete
            sx={{
              color: 'blue',
              width: '72px', // Explicitly set width
              height: '72px', // Explicitly set height
            }}
          />
        }
        iconPosition='left'
        padding='24px'
        fontSize='24px'
        margin={20}
        type='button'
        isActive={true}
        backgroundColor='green'
        color='red'
      >
        Test222
      </GenericButton>
      <GenericButton
        variant='primary'
        size='sm'
        icon={<Delete />}
        iconPosition='left'
        padding='24px'
        fontSize='24px'
        margin={20}
        type='button'
      >
        Test123
      </GenericButton>
      <GenericButton
        variant='primary'
        size='sm'
        icon={<Delete />}
        iconPosition='left'
        padding='24px'
        fontSize='24px'
        margin={20}
        type='button'
      >
        Test222345
      </GenericButton>

      <GenericButton>Test</GenericButton>

      <br />

      <GenericButton
        variant='primary'
        size='sm'
        icon={
          <Delete
            sx={{
              color: 'blue',
              width: '72px', // Explicitly set width
              height: '72px', // Explicitly set height
            }}
          />
        }
        iconPosition='left'
        padding='24px'
        fontSize='24px'
        margin={20}
        type='button'
        isActive={true}
        backgroundColor='green'
        color='red'
      >
        Test222
      </GenericButton>

      <div className='bg-error dark:bg-dark-primary'>error</div>
    </div>
  );
}
