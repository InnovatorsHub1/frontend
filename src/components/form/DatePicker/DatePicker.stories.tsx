import type { Meta } from '@storybook/react';
import DatePicker from './DatePicker';
import { ReactNode } from 'react';
import DarkModeToggle from '@src/components/DarkModeToggle';
import DarkThemeProvider from '@src/providers/DarkThemeProvider';

const meta = {
  title: 'Date Picker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <DarkThemeProvider>
        <Story />
      </DarkThemeProvider>
    ),
  ],
  tags: ['new', 'version:1.0.0'],
} satisfies Meta<typeof DatePicker>;

export default meta;

export const Default = (): ReactNode => {
  return (
    <div className='flex gap-2'>
      <DarkModeToggle size={20} />
      <DatePicker />
    </div>
  );
};

export const AllDatePickers = (): ReactNode => {
  return (
    <div className='flex gap-2'>
      <DarkModeToggle size={20} />
      <DatePicker />
      <DatePicker label='Choose a date' />
      <DatePicker value={new Date()} />
    </div>
  );
};
