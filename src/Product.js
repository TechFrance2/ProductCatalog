import React from 'react'

function Product(props) {
    return (
        <div>
           
            <h2 style= {{color: 'blue'}}>{props.product.name}</h2>
            <p style= {{fontFamily: 'Impact'}}>{props.product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD'})} 
              - {props.product.description} </p> 
            <hr />
        </div>

    )
}


export default Product

