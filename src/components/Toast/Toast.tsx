export type IToastNotificationModel = {
  message: string;
  type: 'success' | 'warning' | 'failure' | 'info';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  autoClose?: number;
  hideProgressBar?: boolean;
  newestOnTop?: boolean;
  closeOnClick?: boolean;
  rtl?: boolean;
  pauseOnFocusLoss?: boolean;
  draggable?: boolean;
  pauseOnHover?: boolean;
  theme?: 'light' | 'dark';
  transition?: any;
};

export default function ToastNotification(props: IToastNotificationModel) {
  const {} = props;
  return <div>ToastNotification</div>;
}

export function SuccessToast(props: IToastNotificationModel) {
  const {} = props;
  return <div className='bg-green-400 w-18 h-18 rounded'>Success</div>;
}

export function WarningToast(props: IToastNotificationModel) {
  const {} = props;
  return <div className='bg-yellow-400  w-18 h-18 rounded'>Warning</div>;
}

export function FailureToast(props: IToastNotificationModel) {
  const {} = props;
  return <div className='bg-red-500 w-18 h-18 rounded'>Failure</div>;
}

export function InfoToast(props: IToastNotificationModel) {
  const {} = props;
  return <div className='bg-blue-500 w-18 h-18 rounded'>Info</div>;
}
