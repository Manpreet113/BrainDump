// main.jsx
// Entry point: renders the React app, sets up providers and global styles
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* Enable client-side routing */}
      <BrowserRouter>
        <App />
      {/* Toast notifications (top-right) */}
      <Toaster position="top-right" reverseOrder={false} />
    </BrowserRouter>
  </React.StrictMode>
);