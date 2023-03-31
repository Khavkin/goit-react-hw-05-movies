import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const appStatus = {
  IDLE: 0,
  PENDING: 1,
  RESOLVED: 2,
  REJECTED: 4,
};

const StatusContext = createContext();
export const useStatus = () => useContext(StatusContext);
export const StatusProvider = ({ children }) => {
  const [status, setStatus] = useState(appStatus.IDLE);
  const [error, setError] = useState(null);
  return (
    <StatusContext.Provider
      value={{ status, setStatus, appStatus, error, setError }}
    >
      {children}
    </StatusContext.Provider>
  );
};

StatusProvider.propTypes = {
  children: PropTypes.element,
};
