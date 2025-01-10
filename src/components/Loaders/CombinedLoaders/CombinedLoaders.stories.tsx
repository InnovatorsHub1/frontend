import type { Meta, StoryObj } from '@storybook/react';
import CombinedLoaders from './CombinedLoaders';
import '@src/index.css';

const meta = {
  title: 'Core/CombinedLoaders',
  component: CombinedLoaders,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!autodocs', 'alpha', 'version:1.0.0'],
} satisfies Meta<typeof CombinedLoaders>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
