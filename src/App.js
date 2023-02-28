import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import RootLayout from './pages/Root';
import Home from './pages/Home';
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
    ],
  },
]);

// const router = createBrowserRouter(routerDefinitions);

function App() {
  // return <div></div>;
  return <RouterProvider router={router} />;
}

export default App;
