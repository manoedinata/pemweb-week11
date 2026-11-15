import { useState } from 'react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import SearchBar from '../molecules/SearchBar';
import ProductList from '../organisms/ProductList';
import ProductLayout from '../templates/ProductLayout';
import { initialProducts } from '../../data/products';

function ProductPage() {
  const [products] = useState(initialProducts);
  const [keyword, setKeyword] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(keyword.trim().toLowerCase()),
  );

  return (
    <ProductLayout
      title="Manajemen Produk"
      subtitle="Kelola daftar produk dan harga dalam satu tempat."
      action={
        <Button>
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
    </ProductLayout>
  );
}

export default ProductPage;
