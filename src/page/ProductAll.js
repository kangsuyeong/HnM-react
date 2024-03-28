import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Col, Container, Row } from 'react-bootstrap'

const ProductAll = () => {
    // useEffect에서 API를 호출해야한다.
    const [productList,setProductList] = useState([])

    const getProducts= async()=>{
        let url = 'https://my-json-server.typicode.com/kangsuyeong/HnM-react/products'
        let response = await fetch(url)
        let data = await response.json()
        console.log("data",data)
        setProductList(data)
    }

    useEffect(()=>{
        getProducts()
    },[])

  return (
    <div>
      <Container className=''>
        <Row>
          {productList.map((menu)=>(
            <Col lg={3}><ProductCard item={menu}/></Col>
          ))}
        </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll
