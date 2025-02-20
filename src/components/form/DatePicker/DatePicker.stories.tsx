import type { Meta, StoryObj } from '@storybook/react';
import DatePicker from './DatePicker';
import { ComponentType, ReactNode } from 'react';

const meta = {
  title: 'Date Picker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  decorators: [(Story: ComponentType) => <Story />],
  tags: ['new', 'version:1.0.0'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'example',
    type: 'default',
  },
};

export const AllDatePickers = (): ReactNode => {
  return (
    <div className='flex gap-2'>
      <DatePicker />
      <DatePicker variant='secondary' />
      <DatePicker label='Choose a date' />
      <DatePicker label='Choose a date' variant='secondary' />
    </div>
  );
};
