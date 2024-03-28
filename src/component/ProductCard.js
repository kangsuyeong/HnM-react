import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='productCard-area'>
      <img className='productCard-img' alt ="" src={item?.img}/>
      <div>{item?.choice===true?"conscious choice":""}</div>
      <div>{item?.title}</div>
      <div>${item?.price}</div>
      <div>{item?.new===true?"신제품":""}</div>
    </div>
  )
}

export default ProductCard