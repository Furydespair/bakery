import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WorkerStore from './store/WorkerStore';
import RequestStore from './store/RequestStore';
import ProductsStore from './store/ProductsStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = createContext()
root.render(
  <Context.Provider value={{
    worker: new WorkerStore(),
    request: new RequestStore(),
    products: new ProductsStore()
  }}>
    <App />
  </Context.Provider>
);

