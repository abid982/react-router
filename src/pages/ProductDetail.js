import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  // So we added dynamic router here or this route with a dynamic path. Now let's say that on "ProductDetail" Page we ofcourse wanna know for which exact product this page was loaded. We wanna know which product id was used so that we could, for example reach to backend API and a database to fetch the data for that specific product and display it on the screen. Therefore react-router-dom gives us another tool for getting hold of the actual value used instead of that placeholder /:productId and that tool is the useParams hook.
  // Returns a JavaScript Object
  const params = useParams();
  // And this params object is a simple JavaScript object which contains every dynamic path segment we defined in our route definition as a proeprty as a property.

  // So in this case productId property
  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
    </>
  );
};

export default ProductDetail;
