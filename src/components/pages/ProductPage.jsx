import { useState } from 'react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import ProductList from '../organisms/ProductList';
import ProductLayout from '../templates/ProductLayout';
import { initialProducts } from '../../data/products';

function ProductPage() {
  const [products] = useState(initialProducts);

  return (
    <ProductLayout
      title="Manajemen Produk"
      subtitle="Kelola daftar produk dan harga dalam satu tempat."
      action={
        <Button>
          <Icon name="plus" /> Tambah Produk
        </Button>
      }
      footer={`Menampilkan ${products.length} dari ${products.length} produk`}
    >
      <ProductList products={products} onEdit={() => {}} onDelete={() => {}} />
    </ProductLayout>
  );
}

export default ProductPage;
