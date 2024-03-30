import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/kangsuyeong/HnM-react/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  // API는 항상 useEffect에서 가져온다.
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col className="product-img">
            <img alt="" width="350" src={product?.img} />
          </Col>
          <Col>
            <div>{product?.title}</div>

            <div>\{product?.price}</div>

            <div>{product?.choice === true ? "Conscious choice" : ""}</div>
          
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.map((size)=>(
                 <Dropdown.Item>{size}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark">추가</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
