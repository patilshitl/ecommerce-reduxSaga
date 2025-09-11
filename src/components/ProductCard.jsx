import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductRequest, fetchProductSucess, fetchProductFailure } from '../redux/ProductSlice';
import { useEffect, useState } from 'react';


function ProductCard() {
  
  const [list, setList] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductRequest());
  }, [dispatch]);  // to load saga on load

  const productDetails = useSelector(((state) => state.products.products) || []);
  // this is forming object not array which is causing error for mapping

  // const productsArray = [...productDetails.products];

  console.log("products:" , productDetails);
  
  
  return (
  <>
    { productDetails.map((item) => (

      <Card style={{  }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>item.title</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          
        </Card.Body>
        <Card.Footer className='d-flex align-items-center justify-content-between'>
          <Button variant="primary">Add to Cart</Button>
          <Button variant="primary">Add to Wishlist</Button>
        </Card.Footer>
      </Card>

    )) }
    </>
    
  );
}

export default ProductCard;