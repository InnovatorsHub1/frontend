import GenericButton from './GenericButton';
import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof GenericButton>;

const meta: Meta<StoryProps> = {
  title: 'UI/GenericButton',
  component: GenericButton,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['alpha', 'version:1.0.0'],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const defaultButton: Story = {
  args: {
    children: 'default',
  },
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
