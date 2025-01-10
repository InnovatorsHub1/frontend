import type { Meta, StoryObj } from '@storybook/react';
import Loader from './Loader';

const meta = {
  title: 'Core/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['new'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
