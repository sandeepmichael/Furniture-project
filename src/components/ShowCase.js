import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ShowCase = () => {
  return (
    
        <Carousel className='carosel'>
  <Carousel.Item>
    <img
      className="d-block"
      src="images/blacksofa.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <Button variant='light'>
      <Link to='/dashboard'>Show More</Link>
      </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="images/chair2.jpg"
      alt="Second slide"
    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="images/sofa.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
    
  )
}

export default ShowCase