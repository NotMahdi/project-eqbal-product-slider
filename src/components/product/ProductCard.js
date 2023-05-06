import React, { useState } from 'react'
import UnitStates from './UnitStates';
import './ProductCard.css'

const ProductCard = () => {
    const [product, setProduct] = useState([
        {image: 'http://localhost:3000/jacket.jpg',
        ProductType:'jacket mardane',
        ProductDescription:'Some quick example text to build on the card title and make up thebulk of the cards content.',
        price:150,
        off: 5,
        tax: 9},

        {image: 'http://localhost:3000/pants.jpg',
        ProductType:'jacket mardane',
        ProductDescription:'Some quick example text to build on the card title and make up thebulk of the cards content',
        price:150,
        off: 5,
        tax: 9},

        {image: 'http://localhost:3000/shirt.jpg',
        ProductType:'jacket mardane',
        ProductDescription:'Some quick example text to build on the card title and make up thebulk of the cards content',
        price:150,
        off: 5,
        tax: 9},

        {image: 'http://localhost:3000/shoes.jpg',
        ProductType:'jacket mardane',
        ProductDescription:'Some quick example text to build on the card title and make up thebulk of the cards content',
        price:150,
        off: 5,
        tax: 9},

        {image: 'http://localhost:3000/socks.jpg',
        ProductType:'jacket mardane',
        ProductDescription:'Some quick example text to build on the card title and make up thebulk of the cards content',
        price:150,
        off: 5,
        tax: 9}
    ])

   

    const [currProduct, setCurrProduct] = useState(0);
    const currProductSlide = product[currProduct];

    const leftSlideHandler =() =>{
        let newIndex;
        if(currProduct === 0)
        newIndex = product.length-1;
        else{
            newIndex = currProduct-1;
        }
        setCurrProduct(newIndex);
    }

    const rightSlideHandler =() =>{
        let newIndex
        if(currProduct === product.length-1)
        newIndex = 0
        else{
            newIndex = currProduct+1;
        }
        setCurrProduct(newIndex);
    }

    return (
      <div className="Product-card">
         <div onClick={leftSlideHandler} className="leftSymbol">&#8637;</div>
         <div className='img' style={{backgroundImage: `url(${currProductSlide.image})`}}></div>
         <div className='productInfo'>
         <div style={{color: 'orange'}}>clothes</div>  
         <div className='ProductType'>{currProductSlide.ProductType}</div>
         <div className='ProductDescription'>{currProductSlide.ProductDescription}</div>
         </div>
         <div className='footer'>
         <UnitStates price={currProductSlide.price} off={currProductSlide.off} tax={currProductSlide.tax}/>
         </div>
         <div onClick={rightSlideHandler} className="rightSymbol">&#8640;</div>
        </div>
    )
}

export default ProductCard;
