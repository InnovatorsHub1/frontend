import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Email, Person, Search } from '@mui/icons-material';
import { TextInput } from './TextInput';

type Story = StoryObj<typeof TextInput>;

const meta: Meta<typeof TextInput> = {
  title: 'Components/Inputs/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the input',
    },
    value: {
      control: 'text',
      description: 'Current value of the input',
    },
    onChange: { 
      action: 'changed'
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters allowed',
    },
    showCharacterCount: {
      control: 'boolean',
      description: 'Whether to show the character count',
    },
    clearable: {
      control: 'boolean',
      description: 'Whether to show a clear button',
    },
    labelPosition: {
      control: 'radio',
      options: ['top', 'left', 'floating'],
      description: 'Position of the label relative to the input',
    },
  },
};

export default meta;

// Wrapper component to handle state
const InputWrapper = (args: any) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <TextInput
      {...args}
      value={value}
      onChange={setValue}
    />
  );
};

export const Default: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    label: 'Text Input',
    placeholder: 'Enter text...',
    value: 'Default Text Input'
  },
};

export const WithIcons: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    label: 'Search',
    startIcon: <Search />,
    clearable: true,
    placeholder: 'Search...',
    value: 'Search term'
  },
};

export const WithCharacterCount: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    label: 'Message',
    maxLength: 100,
    showCharacterCount: true,
    value: 'This is a sample text to demonstrate character counting functionality.',
    helperText: 'Maximum 100 characters'
  },
};

export const WithError: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    label: 'Email',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
    startIcon: <Email />,
    placeholder: 'email@example.com'
  },
};

export const WithHelperText: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    label: 'Username',
    helperText: 'Enter your preferred username',
    startIcon: <Person />,
    placeholder: 'Username',
    value: 'johndoe123'
  },
};

export const LeftLabelPosition: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    label: 'First Name',
    labelPosition: 'left',
    placeholder: 'Enter first name',
    value: 'John'
  },
};

export const TopLabelPosition: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    label: 'Last Name',
    labelPosition: 'top',
    placeholder: 'Enter last name',
    value: 'Doe'
  },
};

export const Disabled: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    label: 'Disabled Input',
    disabled: true,
    value: 'This input is disabled'
  },
};

export const Required: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    label: 'Required Field',
    required: true,
    placeholder: 'This field is required',
    value: 'Required value'
  },
};

export const FullFeatured: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    label: 'Full Featured Input',
    startIcon: <Email />,
    clearable: true,
    maxLength: 50,
    showCharacterCount: true,
    helperText: 'This input has all features enabled',
    required: true,
    placeholder: 'Enter email address',
    value: 'example@email.com'
  },
};