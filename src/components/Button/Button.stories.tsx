import GenericButton from './GenericButton';
import { Meta, StoryObj } from '@storybook/react';
import { ReactNode } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';

const meta = {
  title: 'UI/Button',
  component: GenericButton,
  parameters: {
    layout: 'centered',
  },
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
      <GenericButton variant='primary'>Primary</GenericButton>
      <GenericButton variant='secondary'>Secondary</GenericButton>
      <GenericButton variant='outlined'>Outlined</GenericButton>
      <GenericButton variant='primary' disabled>
        Disabled
      </GenericButton>
    </div>
  );
};

export const FormButtons = (): ReactNode => {
  return (
    <form className='flex flex-col gap-4 p-4 border rounded-lg w-96'>
      <div className='flex flex-col gap-2'>
        <input type='text' placeholder='Enter name' className='p-2 border rounded' />
        <input type='email' placeholder='Enter email' className='p-2 border rounded' />
      </div>
      <div className='flex gap-2'>
        <GenericButton type='button' variant='secondary' icon={<SaveIcon fontSize='small' />} iconPosition='left'>
          Save Draft
        </GenericButton>
        <GenericButton type='submit' variant='primary' icon={<SendIcon fontSize='small' />} iconPosition='right'>
          Submit Form
        </GenericButton>
      </div>
    </form>
  );
};

export const IconLeft: Story = {
  args: {
    iconPosition: 'left',
    icon: <MailOutlineIcon fontSize='small' />,
    children: 'Email Us',
  },
};

export const IconRight: Story = {
  args: {
    iconPosition: 'right',
    icon: <SendIcon fontSize='small' />,
    children: 'Send Message',
  },
};

export const LoadingStates = (): ReactNode => {
  return (
    <GenericButton loading variant='primary'>
      Loading Primary
    </GenericButton>
  );
};

export const SizeVariants = (): ReactNode => {
  return (
    <div className='flex items-center gap-2'>
      <GenericButton size='sm'>Small</GenericButton>
      <GenericButton size='md'>Medium</GenericButton>
      <GenericButton size='lg'>Large</GenericButton>
    </div>
  );
};
