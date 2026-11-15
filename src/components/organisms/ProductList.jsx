import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ products, onEdit, onDelete }) {
  if (products.length === 0) {
    return <p className="product-empty">Produk tidak ditemukan.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ProductList;
