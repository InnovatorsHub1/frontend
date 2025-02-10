import type { Meta, StoryObj } from '@storybook/react';
import Link from './Link';
import { ComponentType, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'UI/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story: ComponentType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ['new', 'version:1.0.0'],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'example',
    type: 'default',
  },
};

export const AllSupportedLink = (): ReactNode => {
  return (
    <div className='flex gap-2'>
      <Link type='primary'>Primary</Link>
      <Link type='secondary'>secondary</Link>
      <Link type='default'>default</Link>
    </div>
  );
};
