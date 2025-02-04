import { toast } from "react-toastify";

type IToastProps = {
    message: string;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    autoClose?: number;
    hideProgressBar?: boolean;
    closeOnClick?: boolean;
    rtl?: boolean;
    pauseOnFocusLoss?: boolean;
    draggable?: boolean;
    pauseOnHover?: boolean;
    theme?: 'light' | 'dark';
    transition?: any;
  };

  type ToastService = {
    success: (message: string, props: IToastProps) => void;
    warning: (message: string, props: IToastProps) => void;
    failure: (message: string, props: IToastProps) => void;
    info: (message: string, props: IToastProps) => void;
  };
  
  const Toast: ToastService = {

    success: (message, props) => {
        toast(message, {
            position: props.position,
            autoClose: props.autoClose,
            hideProgressBar: props.hideProgressBar,
            closeOnClick: props.closeOnClick,
            rtl: props.rtl,
            pauseOnFocusLoss: props.pauseOnFocusLoss,
            draggable: props.draggable,
            pauseOnHover: props.pauseOnHover,
            theme: props.theme,
            transition: props.transition,
            data: {
                message: message
            }
        });
    },
    warning: (message, props) => {
        toast(message, {
            position: props.position,
            autoClose: props.autoClose,
            hideProgressBar: props.hideProgressBar,
            closeOnClick: props.closeOnClick,
            rtl: props.rtl,
            pauseOnFocusLoss: props.pauseOnFocusLoss,
            draggable: props.draggable,
            pauseOnHover: props.pauseOnHover,
            theme: props.theme,
            transition: props.transition,
            data: {
                message: message
            }
        });
    },
    failure: (message, props) => {
        toast(message, {
            position: props.position,
            autoClose: props.autoClose,
            hideProgressBar: props.hideProgressBar,
            closeOnClick: props.closeOnClick,
            rtl: props.rtl,
            pauseOnFocusLoss: props.pauseOnFocusLoss,
            draggable: props.draggable,
            pauseOnHover: props.pauseOnHover,
            theme: props.theme,
            transition: props.transition, 
            data: {
                message: message
            }
        });
    },
    info: (message, props) => {
        toast(message, {
            position: props.position,
            autoClose: props.autoClose,
            hideProgressBar: props.hideProgressBar,
            closeOnClick: props.closeOnClick,
            rtl: props.rtl,
            pauseOnFocusLoss: props.pauseOnFocusLoss,
            draggable: props.draggable,
            pauseOnHover: props.pauseOnHover,
            theme: props.theme,
            transition: props.transition,
            data: {
                message: message
            }
        });
    },
  };
  
  export default Toast;
  