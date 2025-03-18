// import { ComponentProps } from 'react';
// import { Meta, StoryObj } from '@storybook/react';
// import { userEvent, within, expect } from '@storybook/test';
// import { RadioGroup } from './RadioGroup';
// import { RadioButtonProps } from './RadioButton';

// type StoryProps = ComponentProps<typeof RadioGroup>;

// const meta: Meta<StoryProps> = {
//   title: 'Components/RadioGroup',
//   component: RadioGroup,
//   parameters: {},
//   argTypes: {
//     txtSize: { control: 'text' },
//     margin: { control: 'text' },
//     padding: { control: 'text' },
//     innerPadding: { control: 'text' },
//   },
//   tags: ['autodocs', 'new'],
// };

// export default meta;

// type Story = StoryObj<StoryProps>;

// const defaultOptions: RadioButtonProps[] = [
//   { value: 'Option 1', name: 'radioGroup', txtColor: 'red', bgColor: 'blue' },
//   { value: 'Option 2', name: 'radioGroup', txtColor: 'green', bgColor: 'yellow' },
//   { value: 'Option 3', name: 'radioGroup', txtColor: 'purple', bgColor: 'gray' },
// ];

// export const Default: Story = {
//   args: {
//     btnOptions: [
//       {
//         value: 'Option 1',
//         name: 'radioGroup',
//         txtColor: 'red',
//         bgColor: 'blue',
//       },
//       {
//         value: 'Option 2',
//         name: 'radioGroup',
//         txtColor: 'green',
//         bgColor: 'yellow',
//       },
//       {
//         value: 'Option 3',
//         name: 'radioGroup',
//         txtColor: 'purple',
//         bgColor: 'blue',
//       },
//     ],
//     txtSize: 'text-base',
//     margin: 'm-4',
//     padding: 'p-4',
//     innerPadding: 'p-2',
//   },
// };

// export const SmallSize: Story = {
//   args: {
//     btnOptions: defaultOptions,
//     txtSize: 'text-sm',
//     margin: 'm-4\n',
//   },
// };

// export const LargeSize: Story = {
//   args: {
//     btnOptions: defaultOptions,
//     txtSize: 'text-7xl',
//     margin: 'm-4',
//   },
// };

// export const WithCustomSpacing: Story = {
//   args: {
//     btnOptions: defaultOptions,
//     margin: 'm-6',
//     padding: 'p-6',
//     innerPadding: 'p-3',
//   },
// };
