import type { Meta, StoryObj } from '@storybook/react';
import { ComponentType } from 'react';
import CombinedLoaders from './CombinedLoaders';
import '@src/index.css';

const meta = {
  title: 'Core/CombinedLoaders',
  component: CombinedLoaders,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs', 'frog'],
  decorators: [
    (Story: ComponentType) => (
      <div style={{ height: '30vh' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CombinedLoaders>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
