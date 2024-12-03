import React from 'react'

const Products = () => {

  const productsData = [
    {id: 1, name:  'Hudareality', price: 50, description: 'Hudareality  Lipstics', image: '/pic2.jpg'}, 
    {id: 2, name:  'Gabrini Brilliant', price: 5, description: 'Gabrini Brilliant Nail Polish', image: '/pic3.jpg'}, 
    {id: 3, name:  'Sensai Mascara', price: 5, description: 'Sensai Mascara', image: '/pic4.jpg'}, 
    {id: 4, name:  'Pen Eyeliner', price: 6, description: 'The First Pen Eyeliner', image: '/pic5.jpg'}, 
    {id: 5, name:  'Sephora', price: 20, description: 'Sephora Best Skin Ever', image: '/pic6.jpg'}, 
    {id: 6, name:  'All Nighter Spray', price: 50, description: 'All Nighter Makeup Spray', image: '/pic7.jpg'}, 

  ]
  
  

  return (
    <div>
      <div className="products">
      {productsData.map((products)=>(
        <div key={products.id} className="products-card">
          <img src={products.image} alt={products.name} width={300} height={400}/>
          <h3>{products.name}</h3>
          <p>{products.description}</p>
          <div className="price">${products.price}</div>
          <button>Add to Cart</button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Products
