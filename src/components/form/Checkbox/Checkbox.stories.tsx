import { Meta, StoryObj } from '@storybook/react';
import { ReactNode } from 'react';
import Checkbox from './Checkbox';

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['new', 'version:1.0.0'],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const defaultCheckbox: Story = {};

export const AllSupportedCheckbox = (): ReactNode => {
  return (
    <div className='flex gap-2'>
      <Checkbox />
      <Checkbox checked={true} disabled />
      <Checkbox checked={false} disabled />
    </div>
  );
};

export const SizeVariants = (): ReactNode => {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox size='small' checked={true} />
      <Checkbox size='medium' checked={true} />
      <Checkbox size='large' checked={true} />
    </div>
  );
};
