import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import RootLayout from './pages/Root';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import ErrorPage from './pages/Error';

// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />}></Route>
//     <Route path="/products" element={<Products />}></Route>
//   </Route>
// );

// const router = createBrowserRouter([
//   { path: '/', element: <Home /> },
//   { path: '/products', element: <Products /> },
// ]);

const router = createBrowserRouter([
  // The element load the layout wrapper that should be wrapped around the other routes
  // Add Root.js file in pages
  {
    path: '/',
    // Parent route. It acts as a wrapper
    // In RootLayout we also have to define where these child route components and elements so the homepage and the products page should be rendered.
    // Note: For complex pages you could have multiple root routes, for example one for /admin, which then has a totally different set of children which might have a different layout that's wrapped around them.
    element: <RootLayout />,
    // Fallback page if an error occurs
    // The error is generated automatically by the react-router-dom package if we try to visit a page that doesn't exist.
    errorElement: <ErrorPage />,
    // Children
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      // We might have different paths for different products.
      // We always wanna load the same page ie. ProductDetail Page.
      // We wanna load ProductDetail Page for different paths.
      // That's why react-router-dom supports dynamic path segment or path parameters. You add a parameter to a path so such a dynamic path segment by adding a colon and then any identifier of your choice like id or /:roductId
      // Dynamic data
      // { path: '/products/p1', element: <ProductDetail /> },
      // { path: '/products/p2', element: <ProductDetail /> },
      // { path: '/products/p3', element: <ProductDetail /> },
      // { path: '/products/p4', element: <ProductDetail /> },
      // This signals to React Router DOM that this part of the path is dynamic.
      { path: '/products/:productId', element: <ProductDetail /> },
    ],
  },
]);

// const router = createBrowserRouter(routerDefinitions);

function App() {
  // return <div></div>;
  return <RouterProvider router={router} />;
}

export default App;
