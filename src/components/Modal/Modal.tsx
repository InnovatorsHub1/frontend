import { ModalProps } from './types';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = (props: ModalProps) => {
  const { children, onClose, open, size, hideCloseButton, title, footer } = props;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={`relative bg-white p-4 rounded-md shadow-lg modal-size-${size}`}>
        {!hideCloseButton && (
          <button
            onClick={onClose}
            className='absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none'
            aria-label='Close modal'
          >
            <CloseIcon />
          </button>
        )}
        {title && <h2 className='text-lg font-bold mb-4'>{title}</h2>}
        <div className='mb-4'>{children}</div>
        {footer && <div>{footer}</div>}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
