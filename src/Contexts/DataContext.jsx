import PropTypes from 'prop-types';

import { createContext, useState, useContext } from 'react';

const DataContext = createContext();
export const useData = () => useContext(DataContext);
export const DataProvider = ({ children }) => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');

  const [searchResult, setSearchResult] = useState(null);

  return (
    <DataContext.Provider
      value={{
        movies,
        setMovies,
        query,
        setQuery,
        searchResult,
        setSearchResult,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.element,
};
