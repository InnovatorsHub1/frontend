import React from 'react';
import { ModalProps } from './types';
import CloseIcon from '@mui/icons-material/Close';

const Modal = (props: ModalProps) => {
const { children, onClose, open .... } = props
  if (!open) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div
        className={`bg-white rounded-lg shadow-lg p-6 w-full max-w-${size}`}
        style={{ maxWidth: size === 'sm' ? '300px' : size === 'lg' ? '700px' : '500px' }}
      >
        {!hideCloseButton && (
          <button onClick={onClose} className='modal-close'>
            <CloseIcon />
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
