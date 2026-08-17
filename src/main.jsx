import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { SitePreferencesProvider } from './context/SitePreferences.jsx';
import { ProjectStartProvider } from './components/ProjectStartModal.jsx';
import './styles/global.css';

createRoot(document.getElementById('root')).render(<SitePreferencesProvider><ProjectStartProvider><App /></ProjectStartProvider></SitePreferencesProvider>);
