import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// In some situations for example maybe because some form was submitted or because some timer expired you might want to trigger a navigation action from inside code and you can do this by using another special feature provided by react-router-dom. You can import the useNavigate hook and call that in your functional component.

const Home = () => {
  // Call hook in your functional component to get access to a navigate function and this navigate function can be called to trigger a navigation action so to switch to a different route from inside your code so programmatically.
  const navigate = useNavigate();

  const navigateHandler = () => {
    // Actual code that programmatically imperative navigation code for moving to a different page. Again you should use a link instaead of this approach but this is how you would navigate programmatically, if you would need to do so, for example, because some timer expired or anything like that.
    navigate('/products');
  };

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        {/* Go to <a href="/products">the list of products</a> */}
        {/* Specify path we wanna go to */}
        {/* Now what the link component does under the hood is it does render an anchor element but it basically listends for clicks on that element, prevents the browser default of sending an HTTP request if the link is clicked and instead takes a look at the route definitions to update the page accordingly and load the appropriate content. It also changes the URL but without sending a new HTTP request. */}
        Go to <Link to="/products">the list of products</Link>
      </p>

      <div>
        <button onClick={navigateHandler}>Navigate</button>
      </div>
    </>
  );
};

export default Home;
