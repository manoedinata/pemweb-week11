import Button from '../atoms/Button';
import { formatPrice } from '../../utils/formatPrice';
import './ProductCard.css';

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <article className="product-card">
      <span className="product-id">ID: {product.id}</span>
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">{formatPrice(product.price)}</p>
      <div className="product-actions">
        <Button variant="outline" onClick={() => onEdit(product)}>
          Edit
        </Button>
        <Button variant="danger-outline" onClick={() => onDelete(product)}>
          Hapus
        </Button>
      </div>
    </article>
  );
}

export default ProductCard;
