import { useState } from 'react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import SearchBar from '../molecules/SearchBar';
import DeleteProductModal from '../organisms/DeleteProductModal';
import ProductFormModal from '../organisms/ProductFormModal';
import ProductList from '../organisms/ProductList';
import ProductLayout from '../templates/ProductLayout';
import { initialProducts } from '../../data/products';

function ProductPage() {
  const [products, setProducts] = useState(initialProducts);
  const [keyword, setKeyword] = useState('');
  // modal: null (tertutup) | { type: 'add' } | { type: 'edit', product } | { type: 'delete', product }
  const [modal, setModal] = useState(null);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(keyword.trim().toLowerCase()),
  );

  function closeModal() {
    setModal(null);
  }

  function handleAdd(data) {
    const nextId = products.reduce((max, product) => Math.max(max, product.id), 0) + 1;
    setProducts([...products, { id: nextId, ...data }]);
    closeModal();
  }

  function handleEdit(data) {
    const editedId = modal.product.id;
    setProducts(products.map((product) => (product.id === editedId ? { ...product, ...data } : product)));
    closeModal();
  }

  function handleDelete(deletedProduct) {
    setProducts(products.filter((product) => product.id !== deletedProduct.id));
    closeModal();
  }

  return (
    <ProductLayout
      title="Manajemen Produk"
      subtitle="Kelola daftar produk dan harga dalam satu tempat."
      action={
        <Button onClick={() => setModal({ type: 'add' })}>
          <Icon name="plus" /> Tambah Produk
        </Button>
      }
      toolbar={
        <>
          <SearchBar value={keyword} onChange={setKeyword} placeholder="Cari nama produk..." />
          <span className="product-count">{products.length} produk</span>
        </>
      }
      footer={`Menampilkan ${filteredProducts.length} dari ${products.length} produk`}
    >
      <ProductList
        products={filteredProducts}
        onEdit={(product) => setModal({ type: 'edit', product })}
        onDelete={(product) => setModal({ type: 'delete', product })}
      />

      {modal?.type === 'add' && <ProductFormModal onSubmit={handleAdd} onClose={closeModal} />}
      {modal?.type === 'edit' && (
        <ProductFormModal
          key={modal.product.id}
          product={modal.product}
          onSubmit={handleEdit}
          onClose={closeModal}
        />
      )}
      {modal?.type === 'delete' && (
        <DeleteProductModal product={modal.product} onConfirm={handleDelete} onClose={closeModal} />
      )}
    </ProductLayout>
  );
}

export default ProductPage;
