import { createBrowserRouter } from "react-router-dom"
import App from "./App";
import ProductPage from "./pages/ProductPage";
import Layout from "./layout/Layout";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <App /> },
        { path: '/products/:id', element: <ProductPage /> },
        
      ],
    }
  ]);
  