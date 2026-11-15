import Input from '../atoms/Input';
import './FormField.css';

// Gabungan label + input + teks bantuan/pesan error
function FormField({ id, label, hint, error, ...inputProps }) {
  const message = error || hint;

  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <Input
        id={id}
        className={error ? 'input-error' : ''}
        aria-invalid={Boolean(error)}
        aria-describedby={message ? `${id}-message` : undefined}
        {...inputProps}
      />
      {message && (
        <p id={`${id}-message`} className={error ? 'form-error' : 'form-hint'}>
          {message}
        </p>
      )}
    </div>
  );
}

export default FormField;
