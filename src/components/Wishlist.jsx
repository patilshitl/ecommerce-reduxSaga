import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWishlistProductSucess } from '../redux/ProductSlice';
import { useEffect, useState } from 'react';


function Wishlist() {
  
  const [list, setList] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWishlistProductSucess());
  }, [dispatch]);  // to load saga on load

  const wishlistProductDetails = useSelector(((state) => state.products.wishlist));
  // this is forming object not array which is causing error for mapping

  // const productsArray = [...productDetails.products];

  console.log("wishlist products:" , wishlistProductDetails);
  
  
  return (
  <>
    { wishlistProductDetails.map((items) => (

      <Card style={{  }}  className="col-lg-3">
        <Card.Img variant="top" src={items.image} style={{width:"200px"}}/>
        <Card.Body>
          <Card.Title>{items.title}</Card.Title>
          <Card.Text>{items.description}</Card.Text>
          <Card.Text><b>Price:$</b>{items.price}</Card.Text>
        </Card.Body>
        <Card.Footer className='d-flex align-items-center justify-content-between'>
          <Button variant="primary">Remove</Button>
        </Card.Footer>
      </Card>

    )) }

    </>
    
  );
}

export default Wishlist;