import type { Meta, StoryObj } from '@storybook/react';
import Switch from './Switch';
import { ReactNode } from 'react';

const meta = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['new', 'version:1.0.0'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'default',
  },
};

export const AllSupportedLink = (): ReactNode => {
  return (
    <div className='flex gap-2'>
      <Switch />
    </div>
  );
};
