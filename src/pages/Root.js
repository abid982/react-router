import { Outlet } from 'react-router-dom';
import MainNavigation from './../components/MainNavigation';

import classes from './Root.module.css';

// The Outlet Component marks the place where the child route elements should be rendered to.
const RootLayout = () => {
  //   return <h1>Root Layout</h1>;
  return (
    <>
      {/* <h1>Root Layout</h1> */}
      <MainNavigation />
      {/* So this is now the marker the place wehre the child routes hould be rendered to. */}
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
