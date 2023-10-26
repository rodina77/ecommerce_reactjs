import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Productdetailpage = () => {
  const params=useParams();
  const [products, setProduct] = useState([]);
  const url = "https://fakestoreapi.com/products/";

  useEffect(() => {
    fetch(`${url}/${params.productID}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <>
    <div className='container p-3'>
      <Row>
        <Col>
        <img id='detail_image' src={products.image} alt="" />
        </Col>
        <Col>
        <h1>{products.title}</h1>
        <h2>{products.category}</h2>
        <p>{products.description}</p>
        <h4>{products.price}</h4>
        </Col>
      </Row>
    </div>

      
    </>
  );
}

export default Productdetailpage;
