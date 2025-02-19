import type { Meta, StoryObj } from '@storybook/react';
import { ReactNode } from 'react';
import TextField from './TextField';

const meta = {
  title: 'UI/Input',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['new', 'version:1.0.0'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Email',
    placeholder: 'Email placeholder',
  },
};

export const AllSupportedTextField = (): ReactNode => {
  return (
    <div className='flex flex-col gap-4'>
      <TextField className='bg-white' name='Email' type='email' placeholder='Entermail@gmail.com' />
      <TextField
        className='bg-white'
        id='outlined-multiline-flexible'
        placeholder='description'
        label='Multiline'
        multiline
        rows={4}
      />
    </div>
  );
};
