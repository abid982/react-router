import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        {/* Go to <a href="/products">the list of products</a> */}
        {/* Specify path we wanna go to */}
        {/* Now what the link component does under the hood is it does render an anchor element but it basically listends for clicks on that element, prevents the browser default of sending an HTTP request if the link is clicked and instead takes a look at the route definitions to update the page accordingly and load the appropriate content. It also changes the URL but without sending a new HTTP request. */}
        Go to <Link to="/products">the list of products</Link>
      </p>
    </>
  );
};

export default Home;
