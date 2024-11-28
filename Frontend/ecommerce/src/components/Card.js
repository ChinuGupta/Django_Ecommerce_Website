import React from 'react'

export default function Card({ pimage,productname, productcategory, productprice,productinfo }) {
  return (
    <div className="card container mx-5 my-3" style={{width:"200px"}}>
    <img className="card-img-top" src={pimage} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{productname}</h5>
      <p className="card-text">{productcategory}</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Price:{productprice}</li>
      <li className="list-group-item">Description:{productinfo}</li>
    </ul>
    <div className="card-body">
      <a href="/cart" className="card-link">Add to cart</a>
    </div>
  </div>
  )
}