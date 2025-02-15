import GenericButton from './GenericButton';
import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof GenericButton>;

const meta: Meta<StoryProps> = {
  title: 'Stories/GenericButton',
  component: GenericButton,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!autodocs', 'alpha', 'version:1.0.0'],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {};

export const defaultButton: Story = {
  args: {
    children: 'default',
  },
};
export const primary: Story = {
  args: {
    variant: 'primary',
    children: 'primary',
  },
};

export const secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'secondary',
  },
};

export const outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'outlined',
  },
};

export const text: Story = {
  args: {
    variant: 'text',
    children: 'text',
  },
};

export const link: Story = {
  args: {
    variant: 'link',
    children: 'link',
  },
};

export const SmallSize: Story = {
  args: {
    size: 'sm',
    children: 'SmallSize',
  },
};

export const MediumSize: Story = {
  args: {
    size: 'md',
    children: 'MediumSize',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
    children: 'LargeSize',
  },
};

export const loading: Story = {
  args: {
    loading: true,
    children: 'loading',
  },
};

export const activeButton: Story = {
  args: {
    isActive: true,
    isActiveAcolor: 'red',
    isActiveBackgroundColor: 'pink',
    children: 'Active Button',
  },
};

export const disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};

export const fullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width',
  },
};

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

export const padding: Story = {
  args: {
    padding: '24px',
    children: 'padding 24px',
  },
};

export const fontSize: Story = {
  args: {
    fontSize: '24px',
    children: 'fontSize 24px',
  },
};

export const margin: Story = {
  args: {
    margin: '24px',
    children: 'margin 24px',
  },
};

export const backgroundColor: Story = {
  args: {
    backgroundColor: 'green',
    children: 'backgroundColor green',
  },
};

export const color: Story = {
  args: {
    color: 'red',
    children: 'color red',
  },
};

export const typeButton: Story = {
  args: {
    type: 'button',
    children: 'type button',
  },
};

export const typeSubmit: Story = {
  args: {
    type: 'submit',
    children: 'type submit',
  },
};

export const typeReset: Story = {
  args: {
    type: 'reset',
    children: 'type reset',
  },
};

export const loadingState: Story = {
  args: {
    loading: true,
    children: 'loading',
  },
};
