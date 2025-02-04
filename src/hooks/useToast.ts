import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export type IToastProps = {
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

export default function useToast(props: IToastProps) {
  const {
    message,
    position = 'bottom-right',
    autoClose = 2000,
    hideProgressBar = false,
    closeOnClick = false,
    rtl = false,
    pauseOnFocusLoss = false,
    draggable = false,
    pauseOnHover = true,
  } = props;


  const [active, setActive] = useState(false);

  useEffect(() => {
    toast(message, {
      position,
      autoClose,
      hideProgressBar,
      closeOnClick,
      rtl,
      pauseOnFocusLoss,
      draggable,
      pauseOnHover,
      theme: 'dark',
    });
  }, []);

  return {active, setActive}
}
