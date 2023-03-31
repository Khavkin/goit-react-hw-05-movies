import { Button, Form, Input } from './SearchForm.styled';
import PropTypes from 'prop-types';

const SearchForm = ({ query, onSubmit }) => {
  const handleSubmitForm = event => {
    event.preventDefault();
    const value = event.target.elements.MovieName.value;
    onSubmit(value);
  };
  return (
    <Form onSubmit={handleSubmitForm}>
      <Input
        name="MovieName"
        type="text"
        defaultValue={query}
        placeholder="Enter movie name for search"
      ></Input>
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
