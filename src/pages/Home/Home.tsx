import { Button } from '@mui/material';
import Modal from '@src/components/Modal/Modal';
import React, { useState } from 'react';
const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className='size-full p-6'>
        <div>Main</div>
        <div>window</div>
        <Button variant='contained'>Contained</Button>
        <Button variant='contained' disabled>
          Disabled
        </Button>
        <Button variant='contained' href='#contained-buttons'>
          Link
        </Button>
      </div>
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          open={isModalOpen}
          onClose={closeModal}
          title='Test Modal'
          footer={<button onClick={closeModal}>Close</button>}
          size='md'
        >
          <p>This is a test modal. It works!</p>
        </Modal>
      </div>
    </>
  );
};

export default HomePage;
