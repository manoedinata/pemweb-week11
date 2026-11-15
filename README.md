# Pemrograman Web - Week 11

Tugas 3 — Aplikasi **Manajemen Produk** dengan React (Vite).

## Fitur

- Menampilkan daftar produk dalam bentuk kartu (ID, nama, harga format Rupiah)
- Mencari produk berdasarkan nama
- Menambah produk melalui pop-up form (validasi nama wajib diisi dan harga > 0)
- Mengedit produk melalui pop-up form yang terisi data lama
- Menghapus produk melalui pop-up konfirmasi
- Pop-up dapat ditutup dengan tombol Batal, tombol X, klik di luar pop-up, atau tombol Escape

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:5173.

## Struktur Komponen (Atomic Design)

```
src/
├── components/
│   ├── atoms/        Button, Input, Icon
│   ├── molecules/    SearchBar, FormField, Modal
│   ├── organisms/    ProductCard, ProductList, ProductFormModal, DeleteProductModal
│   ├── templates/    ProductLayout
│   └── pages/        ProductPage (menyimpan state produk, kata kunci, dan pop-up)
├── data/products.js      Data awal produk
└── utils/formatPrice.js  Format angka ke Rupiah
```

Data produk disimpan di state `ProductPage` dan dialirkan ke komponen anak melalui props.
Komponen anak mengirim aksi (edit, hapus, simpan) kembali ke `ProductPage` melalui event handler.
