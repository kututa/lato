interface SearchBarProps { value: string; onChange: (value: string) => void; }
export const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <div className="search-input-group"><i className="fa-solid fa-magnifying-glass" /><input type="text" value={value} onChange={(event) => onChange(event.target.value)} placeholder="Search by make, model, or year (e.g. Prado, 2018)..." /></div>
);
