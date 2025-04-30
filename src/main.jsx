import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Req from './Req';
import Contato from './Contato'; // Agora o arquivo existe

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/requisicao",
    element: <Req />,
  },
  {
    path: "/contato",
    element: <Contato />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);