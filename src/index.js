import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { ScrollToTop } from "./components";
import { FilterContextProvider, CartProvider } from "./context";

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <CartProvider>
        <FilterContextProvider>
          <ToastContainer position={'bottom-right'} />
          <App />
        </FilterContextProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>

);