import './ProductLayout.css';

// Kerangka halaman: header (judul + aksi), toolbar, konten, dan footer
function ProductLayout({ title, subtitle, action, toolbar, footer, children }) {
  return (
    <main className="layout">
      <header className="layout-header">
        <div>
          <h1 className="layout-title">{title}</h1>
          <p className="layout-subtitle">{subtitle}</p>
        </div>
        {action}
      </header>
      {toolbar && <div className="layout-toolbar">{toolbar}</div>}
      <section>{children}</section>
      {footer && <footer className="layout-footer">{footer}</footer>}
    </main>
  );
}

export default ProductLayout;
