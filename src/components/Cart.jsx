import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductRequest, fetchProductSucess, fetchProductFailure } from '../redux/ProductSlice';
import { useEffect, useState } from 'react';


function Cart() {
  
  const [list, setList] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductRequest());
  }, [dispatch]);  // to load saga on load

  const productDetails = useSelector(((state) => state.products.items));
  // this is forming object not array which is causing error for mapping

  // const productsArray = [...productDetails.products];

  console.log("products:" , productDetails);
  
  
  return (
  <>
    {/* { productDetails.map((items) => (

      <Card style={{  }}>
        <Card.Img variant="top" src={items.image} style={{width:"200px"}}/>
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

    )) } */}

    <h1>this is cart</h1>
    </>
    
  );
}

export default Cart;