export const SearchBar = ({ filter, onChengeContact }) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={filter}
        onChange={evt => onChengeContact(evt.target.value)}
        placeholder="Filter ..."
      />
    </div>
  );
};
