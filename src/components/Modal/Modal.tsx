import React from 'react';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  hideCloseButton = false,
}) => {
  if (!open) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className={`modal-content modal-size-${size}`}>
        {!hideCloseButton && (
          <button onClick={onClose} className='modal-close'>
            X
          </button>
        )}
        {title && <h2 className='modal-title'>{title}</h2>}
        <div className='modal-body'>{children}</div>
        {footer && <div className='modal-footer'>{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
