import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../assets/img/logo.png';
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

function Header() {

const cart = useSelector((state) => state.products.cart) || [];
const wishlist = useSelector((state) => state.products.wishlist) || [];

const cartCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);
const wishlistCount = wishlist.reduce((total, item) => total + (item.quantity || 1), 0);


  return (
    <Navbar className=" justify-content-around header p-1 ">
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={Logo} alt="" srcset="" />
        </Link>
      </div>
      <div>
        <Form inline>
            <Row>
            <Col xs="auto">
                <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                />
            </Col>
            <Col className='d-flex align-items-center justify-content-between'>
              <Link to="/wishlist" style={{ textDecoration: "none" }}>
                <div className='d-flex align-items-center justify-content-between'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                    </svg>
                    <h5 style={{color:"#fff"}}>{wishlistCount}</h5>
                </div>
              </Link>
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <div className='d-flex align-items-center justify-content-between'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                    <h5 style={{color:"#fff"}}>{cartCount}</h5>
                </div>
              </Link>
            </Col>
            <Col xs="auto">
                <Button type="">Login</Button>
            </Col>
            </Row>
        </Form>
      </div>
      
    </Navbar>
  );
}

export default Header;