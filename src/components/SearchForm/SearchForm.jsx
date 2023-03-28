const SearchForm = ({ query, onSubmit, onChange }) => {
  const handleSubmitForm = event => {
    event.preventDefault();
    const value = event.target.elements.MovieName.value;
    onSubmit(value);
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <input
        name="MovieName"
        type="text"
        value={query}
        onChange={event => {
          onChange(event.target.value);
        }}
        placeholder="Enter movie name for search"
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
