import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import ThankYou from './pages/ThankYou.tsx';
import NotFound from './pages/NotFound.tsx';
import './index.css';

// Minimal path routing: "/" is the landing page, "/thank-you" follows form submits,
// anything else (including the static 404.html Vercel serves) shows the 404 page.
const path = window.location.pathname.replace(/\/+$/, '') || '/';
const Page = path === '/' || path === '/index.html' ? App : path === '/thank-you' ? ThankYou : NotFound;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
