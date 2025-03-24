import GenericButton from './GenericButton';
import { Meta, StoryObj } from '@storybook/react';
import { ReactNode } from 'react';
import SendIcon from '@mui/icons-material/Send';
import DarkThemeProvider from '@src/providers/DarkThemeProvider';
import DarkModeToggle from '@src/components/DarkModeToggle';

const meta = {
  title: 'UI/Button',
  component: GenericButton,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <DarkThemeProvider>
        <DarkModeToggle size={20} className='mb-4' />
        <Story />
      </DarkThemeProvider>
    ),
  ],
  tags: ['new', 'version:1.0.0'],
} satisfies Meta<typeof GenericButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const defaultButton: Story = {
  args: {
    children: 'default',
  },
};
export const AllSupportedButton = (): ReactNode => {
  return (
    <div className='flex gap-2'>
      <GenericButton>Default</GenericButton>
      <GenericButton disabled>Disabled</GenericButton>
    </div>
  );
};

export const IconRight = (): ReactNode => {
  return (
    <GenericButton iconPosition='right' icon={<SendIcon fontSize='small' />}>
      Send Message
    </GenericButton>
  );
};

export const LoadingStates = (): ReactNode => {
  return <GenericButton loading>Loading</GenericButton>;
};

export const SizeVariants = (): ReactNode => {
  return (
    <div className='flex items-center gap-2'>
      <GenericButton size='small'>Small</GenericButton>
      <GenericButton size='medium'>Medium</GenericButton>
      <GenericButton size='large'>Large</GenericButton>
    </div>
  );
};
