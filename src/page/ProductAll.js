import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Col, Container, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'


const ProductAll = () => {
    // useEffect에서 API를 호출해야한다.
    const [productList,setProductList] = useState([])
    const [query,setQuery] = useSearchParams()


    const getProducts= async()=>{
        let searchQuery = query.get('q') || "";
        console.log("search",searchQuery)
        let url = `https://my-json-server.typicode.com/kangsuyeong/HnM-react/products?q=${searchQuery}`
        let response = await fetch(url)
        let data = await response.json()
        console.log("data",data)
        setProductList(data)
    }

    //useEffect는 언제한번 콜이된다?
    useEffect(()=>{
        getProducts()
    },[query])

    

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
