import type { Meta, StoryObj } from '@storybook/react';
import { ComponentType } from 'react';
import TopNavLoader from './TopNavLoader';
import '../../../index.css';

const meta = {
  title: 'Core/TopNavLoader',
  component: TopNavLoader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['stable'],
  decorators: [
    (Story: ComponentType) => (
      <div style={{ height: '20vh' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TopNavLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [(Story) => Story()],
};
