import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard() {
  return (
    <Card style={{  }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className='d-flex align-items-center justify-content-between'>
        <Button variant="primary">Add to Cart</Button>
        <Button variant="primary">Add to Wishlist</Button>
      </Card.Footer>
    </Card>
  );
}

export default ProductCard;