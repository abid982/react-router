import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';

const routerDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />}></Route>
    <Route path="/products" element={<Products />}></Route>
  </Route>
);

// const router = createBrowserRouter([
//   { path: '/', element: <Home /> },
//   { path: '/products', element: <Products /> },
// ]);

const router = createBrowserRouter(routerDefinitions);

function App() {
  // return <div></div>;
  return <RouterProvider router={router} />;
}

export default App;
