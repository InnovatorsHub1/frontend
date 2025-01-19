import { Button } from '@mui/material';
import { PasswordInput } from '@src/components/inputs/PasswordInput/PasswordInput';
import { useState } from 'react';


export default function HomePage() {

  const [password, setPassword] = useState('');

  const customRequirements = [
    {
      label: 'Minimum 12 characters',
      validator: (value:string) => value.length >= 12
    },
    {
      label: 'Contains your name',
      validator: (value:string) => value.toLowerCase().includes('john')
    }
  ];

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
      

      <PasswordInput
        label="Password"
        value={password}
        onChange={setPassword}
        showPasswordStrength
        showRequirements
        customRequirements={customRequirements} // Optional
        helperText="Enter your password"
        required
      />
    </div>
  );
}
