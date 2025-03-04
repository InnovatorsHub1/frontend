import GenericButton from './GenericButton';
import { Meta } from '@storybook/react';
import { ReactNode } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
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
        <Story />
      </DarkThemeProvider>
    ),
  ],
  tags: ['new', 'version:1.0.0'],
} satisfies Meta<typeof GenericButton>;

export default meta;

export const AllSupportedButton = (): ReactNode => {
  return (
    <div className='flex gap-2'>
      <DarkModeToggle size={20} className='mb-4' />
      <GenericButton>Default</GenericButton>
      <GenericButton disabled>Disabled</GenericButton>
    </div>
  );
};

export const defaultButton = (): ReactNode => {
  return (
    <>
      <DarkModeToggle size={20} className='mb-4' />
      <GenericButton>Default</GenericButton>
    </>
  );
};

export const FormButtons = (): ReactNode => {
  return (
    <>
      <DarkModeToggle size={20} className='mb-4' />
      <form className='flex flex-col gap-4 p-4 border rounded-lg w-96'>
        <div className='flex flex-col gap-2'>
          <input type='text' placeholder='Enter name' className='p-2 border rounded' />
          <input type='email' placeholder='Enter email' className='p-2 border rounded' />
        </div>
        <div className='flex gap-2'>
          <GenericButton type='button' icon={<SaveIcon fontSize='small' />} iconPosition='left'>
            Save Draft
          </GenericButton>
          <GenericButton type='submit' icon={<SendIcon fontSize='small' />} iconPosition='right'>
            Submit Form
          </GenericButton>
        </div>
      </form>
    </>
  );
};

export const IconLeft = (): ReactNode => {
  return (
    <>
      <DarkModeToggle size={20} className='mb-4' />
      <GenericButton iconPosition='left' icon={<MailOutlineIcon fontSize='small' />}>
        Email Us
      </GenericButton>
    </>
  );
};

export const IconRight = (): ReactNode => {
  return (
    <>
      <DarkModeToggle size={20} className='mb-4' />
      <GenericButton iconPosition='right' icon={<SendIcon fontSize='small' />}>
        Send Message
      </GenericButton>
    </>
  );
};

export const LoadingStates = (): ReactNode => {
  return (
    <>
      <DarkModeToggle size={20} className='mb-4' />
      <GenericButton loading>Loading</GenericButton>
    </>
  );
};

export const SizeVariants = (): ReactNode => {
  return (
    <div className='flex items-center gap-2'>
      <DarkModeToggle size={20} className='mb-4' />
      <GenericButton size='small'>Small</GenericButton>
      <GenericButton size='medium'>Medium</GenericButton>
      <GenericButton size='large'>Large</GenericButton>
    </div>
  );
};
