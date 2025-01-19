import { Button } from '@mui/material';
import { Email } from '@mui/icons-material';
import { TextInput } from '@src/components/inputs/TextInput/TextInput';
import React from 'react';

export default function HomePage() {

  const [email, setEmail] = React.useState('');

  return (
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
      <TextInput
        label="Email Address"
        value={email}
        onChange={setEmail}
        startIcon={<Email />}
        clearable
        maxLength={50}
        showCharacterCount
        helperText="Enter your email address"
        labelPosition="floating"
        required
      />
    </div>
  );
}
