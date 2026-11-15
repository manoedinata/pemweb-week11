import { useEffect } from 'react';
import Icon from '../atoms/Icon';
import './Modal.css';

// Kerangka pop-up: latar gelap, kotak dialog, dan tombol tutup (X)
function Modal({ title, onClose, children, className = '' }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal ${className}`.trim()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal-close" aria-label="Tutup" onClick={onClose}>
          <Icon name="close" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
