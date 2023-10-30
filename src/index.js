import React  from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // App bileşeninin yolunu doğru şekilde belirttiğinizden emin olun

createRoot(document.getElementById('root')).render(<App />);
