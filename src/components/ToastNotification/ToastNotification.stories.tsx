import { ComponentType, ReactNode } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ToastNotification from './ToastNotification';
import '@src/index.css';
import { ToastContainer, toast } from 'react-toastify';


const meta = {
  title: 'components/ToastNotification',
  component: ToastNotification,
  parameters: {
    controls: { exclude: /^(type|bounceTime|forceClose)$/g },
  },
  tags: ['autodocs', 'new'],
  decorators: [
    (Story: ComponentType) => (
      <div style={{ minHeight: '20vh' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ToastNotification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToastNotificationPrimary: Story = {
  args: {
    position: 'top-left',
    bounceTime: 500,
    forceClose: true,
  },
};


export const Notification = (): ReactNode => {
  const notify = () => toast('Wow so easy !', {
    position: 'top-right',
    autoClose: 8000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: 'bg-zinc-900 text-white',
  });

  return (
    <div className="grid place-items-center h-dvh bg-zinc-900/15">
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}
export const ToastNotificationDefault = (): ReactNode => {
  return (
    <div className='flex justify-center gap-4 flex-col'>
      <ToastNotification position='bottom-right' />
      <ToastNotification position='bottom-right' />
      <ToastNotification position='bottom-right' />
      <ToastNotification position='bottom-right' />
    </div>
  );
};

export const ToastNotificationMobile = (): ReactNode => {
  return (
    <div className='bg-gray-600 h-screen w-full'>
      <div className='max-w-[430px] flex justify-center gap-4 flex-col'>
        <ToastNotification type='success' />
        <ToastNotification type='failure' />
        <ToastNotification type='info' />
        <ToastNotification type='warning' />
      </div>
    </div>
  );
};
