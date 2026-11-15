import { useState } from 'react';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';
import Modal from '../molecules/Modal';

// Pop-up form untuk menambah produk baru atau mengedit produk yang dipilih.
// Jika prop `product` diisi, form berjalan dalam mode edit.
function ProductFormModal({ product, onSubmit, onClose }) {
  const isEdit = Boolean(product);
  const [name, setName] = useState(product ? product.name : '');
  const [price, setPrice] = useState(product ? String(product.price) : '');
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};
    if (name.trim() === '') {
      newErrors.name = 'Nama produk wajib diisi.';
    }
    const priceNumber = Number(price);
    if (price === '' || !Number.isFinite(priceNumber) || priceNumber <= 0) {
      newErrors.price = 'Harga harus lebih dari 0.';
    }
    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    onSubmit({ name: name.trim(), price: Number(price) });
  }

  return (
    <Modal title={isEdit ? 'Edit Produk' : 'Tambah Produk'} onClose={onClose}>
      <h2 className="modal-title">{isEdit ? 'Edit Produk' : 'Tambah Produk'}</h2>
      <p className="modal-subtitle">
        {isEdit ? 'Perbarui informasi produk yang dipilih.' : 'Masukkan informasi produk baru.'}
      </p>
      {isEdit && <p className="modal-subtitle">ID: {product.id}</p>}

      <form onSubmit={handleSubmit} noValidate>
        <FormField
          id="product-name"
          label="Nama Produk"
          placeholder="Contoh: Pulpen"
          value={name}
          error={errors.name}
          autoFocus
          onChange={(event) => setName(event.target.value)}
        />
        <FormField
          id="product-price"
          label="Harga (Rp)"
          type="number"
          min="1"
          inputMode="numeric"
          placeholder="Contoh: 5000"
          value={price}
          hint="Harga harus lebih dari 0."
          error={errors.price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <div className="modal-actions">
          <Button variant="outline" onClick={onClose}>
            Batal
          </Button>
          <Button type="submit">{isEdit ? 'Simpan Perubahan' : 'Simpan Produk'}</Button>
        </div>
      </form>
    </Modal>
  );
}

export default ProductFormModal;
