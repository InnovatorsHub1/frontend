import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { RadioGroup } from './RadioGroup';
import { RadioButtonProps } from './RadioGroup';

type StoryProps = ComponentProps<typeof RadioGroup>;

const meta: Meta<StoryProps> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {},
  argTypes: {
    txtSize: { control: 'text' },
    margin: { control: 'text' },
    padding: { control: 'text' },
    innerPadding: { control: 'text' },
  },
  tags: ['autodocs', 'new'],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test: Selecting the first radio button
    const firstRadio = canvas.getByLabelText('Option 1');
    await userEvent.click(firstRadio);
    await expect(firstRadio).toBeChecked();

    // Test: Selecting the second radio button
    const secondRadio = canvas.getByLabelText('Option 2');
    await userEvent.click(secondRadio);
    await expect(secondRadio).toBeChecked();
    await expect(firstRadio).not.toBeChecked();
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

const defaultOptions: RadioButtonProps[] = [
  { value: 'Option 1', name: 'radioGroup', txtColor: 'red', bgColor: 'blue' },
  { value: 'Option 2', name: 'radioGroup', txtColor: 'green', bgColor: 'yellow' },
  { value: 'Option 3', name: 'radioGroup', txtColor: 'purple', bgColor: 'gray' },
];

export const Default: Story = {
  args: {
    btnOptions: [
      {
        value: 'Option 1',
        name: 'radioGroup',
        txtColor: 'red',
        bgColor: 'blue',
      },
      {
        value: 'Option 2',
        name: 'radioGroup',
        txtColor: 'green',
        bgColor: 'yellow',
      },
      {
        value: 'Option 3',
        name: 'radioGroup',
        txtColor: 'purple',
        bgColor: 'blue',
      },
    ],
    txtSize: 'base\n',
    margin: 'm-4',
    padding: 'p-4',
    innerPadding: 'p-2',
  },
};

export const SmallSize: Story = {
  args: {
    btnOptions: defaultOptions,
    txtSize: 'sm',
  },
};

export const LargeSize: Story = {
  args: {
    btnOptions: defaultOptions,
    txtSize: '4xl',
    margin: 'm-4',
  },
};

export const WithCustomSpacing: Story = {
  args: {
    btnOptions: defaultOptions,
    margin: 'm-6',
    padding: 'p-6',
    innerPadding: 'p-3',
  },
};
