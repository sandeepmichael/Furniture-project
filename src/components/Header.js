import React from 'react'
import {Container, Navbar, Nav,  FormControl, Dropdown, Badge, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import {FaUser} from 'react-icons/fa'
import { CartState } from './context/Context';
import { AiFillDelete } from "react-icons/ai";



const Header = () => {
    const {state:{cart}, dispatch, filterDispatch} = CartState()
  return (
      <Navbar bg="light" variant="light" style={{ height: 80 }}>
          <Container>
              <Navbar.Brand>
                  <Link to='/'>INDIA FURNITURE LIMITED</Link>
              </Navbar.Brand>
              <Navbar.Text className='search'>
                  <FormControl style={{width:500}} placeholder="search" onChange={(e) => {
                filterDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
               className='m-4'/>
           
              </Navbar.Text>
             
              {/*<Button className="m-2" variant="dark">Search</Button>*/}
              <Nav>
                  <Dropdown alignRight>
                  <Dropdown.Toggle variant="info">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
               <Dropdown.Menu style={{minWidth:370}}>
                   {cart.length>0?(<>
                    {cart.map((product) => (
                    <span className="cartitem" key={product._id}>
                      <img
                        src={product.image}
                        className="cartItemImg"
                        alt={product.name}
                      />
                      <div className="cartItemDetail">
                        <span>{product.name}</span>
                        <span>&#8377; {product.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "80%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                   </>):
                   ( <span style={{padding:10}}>Cart is Empty</span>)}
                
               </Dropdown.Menu>
                  </Dropdown>
              </Nav>
              <Nav className='m-auto'>
              <Link to='/login'><FaUser fontSize="20px"/>Sign In</Link>
              </Nav>

              <Nav className='m-auto'>
              <Link to='/contact'><FaUser fontSize="20px"/>Enquiry</Link>
              </Nav>
          </Container>
      </Navbar>

  )
}

export default Header