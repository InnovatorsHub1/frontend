interface ToastPosition{
    top: string;
    right: string;
    bottom: string;
    left: string;
}

interface ToastType{
    success: string;
    error: string;
    warning: string;
    info: string;
}

interface ToastOptions{
    id: string;
    title: string;
    description: string;
    type: ToastType;
    duration: number;
    position: ToastPosition;
    closeOnClick: boolean;
    pauseOnHover: boolean;
}

export interface ToastProviderProps {
  maxToasts?: number;
  defaultDuration?: number;
  defaultPosition?: ToastPosition;
  defaultType?: ToastType;
  pauseOnHover?: boolean;
  closeOnClick?: boolean;
}

export interface ToastContextValue {
  showToast: (options: ToastOptions) => string;
  removeToast: (id: string) => void;
  clearAll: () => void;
  updateToast: (id: string, options: Partial<ToastOptions>) => void;
}
