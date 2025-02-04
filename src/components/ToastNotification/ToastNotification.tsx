import { ToastContainer, Bounce } from 'react-toastify';

type ToastNotificationProps = {
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
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
 }

const ToastNotification = (props: ToastNotificationProps) => {
    const { position, autoClose, hideProgressBar, newestOnTop,  closeOnClick, rtl  = false, pauseOnFocusLoss, draggable, pauseOnHover} = props;
    return (
        <ToastContainer
        position={position}
        autoClose={autoClose}
        hideProgressBar={hideProgressBar}
        newestOnTop={newestOnTop}
        closeOnClick={closeOnClick}
        rtl={rtl}
        pauseOnFocusLoss={pauseOnFocusLoss}
        draggable={draggable}
        pauseOnHover={pauseOnHover}
        theme="dark" // add according to service theme 
        transition={Bounce}
        />
    )
};

export default ToastNotification;




/* import clsx from 'clsx';

export type IToastNotificationModel = {
  type: 'success' | 'warning' | 'failure' | 'info';
  bounceTime?: number;
  forceClose?: boolean;
};

export default function ToastNotification(props: IToastNotificationModel) {
  const { type } = props;

  const notificationClass = clsx('p-4 rounded shadow-md transition-all duration-300', {
    'bg-green-100 text-green-700': type === 'success',
    'bg-yellow-100 text-yellow-700': type === 'warning',
    'bg-red-100 text-red-700': type === 'failure',
    'bg-blue-100 text-blue-700': type === 'info',
  });

  return <div className={notificationClass}>ToastNotification - {type}</div>;
} */