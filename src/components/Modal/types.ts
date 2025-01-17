export type ModalSizes = {
  sm: string;
  md: string;
  lg: string;
};

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: keyof ModalSizes;
  hideCloseButton?: boolean;
  disableBackdropClick?: boolean;
  className?: string;
  animationDuration?: number;
  customAnimation?: string;
};
