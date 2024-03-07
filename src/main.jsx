import React, { StrictMode } from 'react';
import ReactDOMClient from 'react-dom/client';
import Root from './routes/Root';
import { 
   createBrowserRouter,
   RouterProvider
} from 'react-router-dom';
import './css/index.css';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />
   }
]);

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);