import { useState } from 'react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import SearchBar from '../molecules/SearchBar';
import ProductFormModal from '../organisms/ProductFormModal';
import ProductList from '../organisms/ProductList';
import ProductLayout from '../templates/ProductLayout';
import { initialProducts } from '../../data/products';

function ProductPage() {
  const [products, setProducts] = useState(initialProducts);
  const [keyword, setKeyword] = useState('');
  // modal: null (tertutup) | { type: 'add' }
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
      <ProductList products={filteredProducts} onEdit={() => {}} onDelete={() => {}} />

      {modal?.type === 'add' && <ProductFormModal onSubmit={handleAdd} onClose={closeModal} />}
    </ProductLayout>
  );
}

export default ProductPage;
