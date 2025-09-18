import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartProductSucess } from '../redux/ProductSlice';
import { useEffect, useState } from 'react';


function Cart() {
  
  const [list, setList] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartProductSucess());
  }, [dispatch]);  // to load saga on load

  const cartProductDetails = useSelector(((state) => state.products.cart));
  // this is forming object not array which is causing error for mapping

  // const productsArray = [...productDetails.products];

  console.log("products from cart:" , cartProductDetails);
  
  
  return (
  <>
    { cartProductDetails.map((items) => (

      <Card style={{  }}>
        <div className="card-head">
          <Card.Img variant="top" src={items.image}/>
        </div>
        <Card.Body>
          <Card.Title>{items.title}</Card.Title>
          <Card.Text>{items.description}</Card.Text>
          <Card.Text><b>Price:</b>{items.price}</Card.Text>
        </Card.Body>
        <Card.Footer className='d-flex align-items-center justify-content-between'>
          <Button variant="primary">Add to Cart</Button>
          <Button variant="primary">Add to Cart</Button>
        </Card.Footer>
      </Card>

    )) }

    {/* <h1>this is cart</h1> */}
    </>
    
  );
}

export default Cart;