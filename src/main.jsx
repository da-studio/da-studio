import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { SitePreferencesProvider } from './context/SitePreferences.jsx';
import './styles/global.css';

createRoot(document.getElementById('root')).render(<SitePreferencesProvider><App /></SitePreferencesProvider>);
