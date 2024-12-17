import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from '../Home'
import Product from "../Productos";
import "./App.css";

  const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/products', element: <Product/> },

    ]);

    return routes;

  };

  const App = () => {
    return (
      <>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </>
    );
  };

export default App;
