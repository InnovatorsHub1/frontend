import GenericButton from './GenericButton';
import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, ReactNode } from 'react';


const meta = {
  title: 'UI/Button',
  component:GenericButton ,
  parameters: {
    layout: 'centered',
  },
  tags: ['new', 'version:1.0.0'],
} satisfies Meta<typeof GenericButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultButton: Story = {
  args: {
    children: 'default',
  },
};

export const AllSupportedButton = (): ReactNode => {
  return (
    <div className='flex gap-2'>
      <GenericButton variant='primary'>Primary</GenericButton>
      <GenericButton variant='secondary'>secondary</GenericButton>
    </div>
  );
};


// 1. add button story in form, as type button
// 2. add button story in form with inputs and add type submit

// TODO - change the icon to component icon
export const IconLeft: Story = {
  args: {
    iconPosition: 'left',
    icon: '🚀',
    children: 'IconLeft',
  },
};

export const IconRight: Story = {
  args: {
    iconPosition: 'right',
    icon: '🚀',
    children: 'IconRight',
  },
};
