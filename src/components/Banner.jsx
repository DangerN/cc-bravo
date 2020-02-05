import React from 'react'
import { Nav, Col } from 'react-bootstrap'

const Banner = props => {
  return (
    <Nav as={Col} md={6} className="d-none d-md-block">
      <img className="mx-auto d-block" height={64} width={256} src="http://ebhopes.net/wp-content/uploads/2016/01/full-width-banner-placeholder.png"/>
    </Nav>
  )
}

export default Banner
