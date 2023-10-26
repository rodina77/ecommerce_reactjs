import React from "react";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card_section from "./cards";

const Cardlist = () => {
  const [products, setProduct] = useState([]);
  const [categor, setcategory] = useState([]);
  const url = "https://fakestoreapi.com/products/";

  function getalldata()
  {
    fetch(url)
    .then((res) => res.json())
    .then((data) => setProduct(data));
  }
  function getcategorydata()
  {
    fetch(`${url}/categories`)
    .then((res) => res.json())
    .then((data) => setcategory(data));
  }
  function getsinglecategory(catego)
  {
    fetch(`${url}/category/${catego}`)
    .then((res) => res.json())
    .then((data) => setProduct(data));
  }
  useEffect(() => {
    getalldata();
    getcategorydata();
  }, []);

  return (
    <div>
      <div className="container">
        <h2 className="p-3">our products</h2>
        <button id="buttun_filter" onClick={()=>{getalldata()}}>All products</button>
        {categor.map((cat)=>{return(
          <button id="buttun_filter" onClick={()=>{getsinglecategory(cat)}}>{cat}</button>
        )})}
        
        <Row>
          {products.map((product) => {
            return (
              <>
                <Col key={product.id}>
                  <Card_section product={product}></Card_section>
                </Col>
              </>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Cardlist;
