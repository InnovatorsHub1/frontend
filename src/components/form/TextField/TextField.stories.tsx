import type { Meta, StoryObj } from '@storybook/react';
import { ComponentType, ReactNode } from 'react';
import TextField from './TextField';

const meta = {
  title: 'UI/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  decorators: [(Story: ComponentType) => <Story />],
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
      <TextField name='Email' type='email' placeholder={'Entermail@gmail.com'} />
      <TextField name='Phone Number' type='tel' placeholder={'+972 052 123-4567'} />
      <TextField name='Website' placeholder={'www.google.com'} />
      <TextField name='description' placeholder={'Enter a Description...'} />
      <TextField type='textarea' placeholder={'Enter a Description 2...'} />
    </div>
  );
};
