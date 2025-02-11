import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ThemeProvider from './components/ThemeProvider.tsx';
import ThemeSwitcher from './components/ThemeSwitcher.tsx';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ThemeSwitcher />
      <App />
    </ThemeProvider>
  </StrictMode>
);
