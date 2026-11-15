import Icon from '../atoms/Icon';
import Input from '../atoms/Input';
import './SearchBar.css';

function SearchBar({ value, onChange, placeholder = 'Cari...' }) {
  return (
    <label className="search-bar">
      <span className="search-icon">
        <Icon name="search" />
      </span>
      <Input
        type="search"
        className="search-input"
        value={value}
        placeholder={placeholder}
        aria-label={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export default SearchBar;
