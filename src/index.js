import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { StatusProvider } from 'Contexts/StatusContext';
import { DataProvider } from 'Contexts/DataContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <StatusProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </StatusProvider>
    </BrowserRouter>
  </React.StrictMode>
);
