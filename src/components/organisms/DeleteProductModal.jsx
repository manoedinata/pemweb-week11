import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import Modal from '../molecules/Modal';
import { formatPrice } from '../../utils/formatPrice';
import './DeleteProductModal.css';

// Pop-up konfirmasi sebelum produk dihapus
function DeleteProductModal({ product, onConfirm, onClose }) {
  return (
    <Modal title="Hapus Produk" onClose={onClose} className="delete-modal">
      <div className="delete-icon">
        <Icon name="trash" size={26} />
      </div>
      <h2 className="modal-title delete-title">Hapus Produk?</h2>
      <p className="modal-subtitle">Produk yang dihapus tidak dapat dikembalikan.</p>

      <div className="delete-preview">
        <span className="product-id">ID: {product.id}</span>
        <p className="delete-preview-name">{product.name}</p>
        <p className="product-price">{formatPrice(product.price)}</p>
      </div>

      <div className="modal-actions">
        <Button variant="outline" onClick={onClose}>
          Batal
        </Button>
        <Button variant="danger" onClick={() => onConfirm(product)}>
          Hapus Produk
        </Button>
      </div>
    </Modal>
  );
}

export default DeleteProductModal;
