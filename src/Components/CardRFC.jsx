// rfc : cú pháp tạo nhanh  function component
import React from 'react'

export default function CardRFC() {


  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="https://source.unsplash.com/random/400×500/?fruit" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

  )
}
