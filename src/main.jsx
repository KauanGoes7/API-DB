import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Req from './Req';
import Contato from './Contato';
import Video from './Video'; // Alterado para Video.jsx

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
  },
  {
    path: "/video-intro",
    element: <Video />, // Alterado para o componente Video
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);