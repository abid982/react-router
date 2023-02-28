// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* <Link to="/">Home</Link> */}
            {/* But NavLink has a special behaviour. If you add a className prop to it, it’s actually not the regular className prop which takes a string. But instead it’s a prop that takes a function and that function should return the class name, the CSS class name that should be added to the anchor tag. Now that function also autmatically receives an object form which we can destructure the isActive property. And this object with the isActive property is provided by react-router-dom and isActive as a Boolean that's true if this link is currently active.*/}
            {/* Conditionally return CSS class */}
            {/* isActive ? 'a' : 'b' */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              // This indicates that this link should only be considered active if the currently active route ends with this path / after the url
              end
              // end={true}

              // Inline style
              // style={isActive => ({ textAlign: isActive ? 'center' : 'left' })}
            >
              Home
            </NavLink>
          </li>
          <li>
            {/* <Link to="/products">Products</Link> */}
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
