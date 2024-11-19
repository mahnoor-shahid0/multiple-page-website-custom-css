import React from 'react'

const watches = () => {

  const watchData = [
    {id: 1, name: 'Casio', price: 26000, description: 'Luxury watch', image: '/casio.jpeg'},
    {id: 2, name: 'Rolex', price: 12000, description: 'Luxury design', image: '/rolex.jpg'},
    {id: 3, name: 'Omega', price: 8000, description: 'Sporty design', image: '/omega.jpg'},
    {id: 4, name: 'Benyar', price: 8000, description: 'High quality designer watch', image: '/benyar.webp'},
    {id: 5, name: 'Hugo Boss', price: 15000, description: 'Luxury craftsmanship', image: '/hugoboss.jpg'},
    {id: 6, name: 'Olevs', price: 9970, description: 'Timeless aesthetics', image: '/olevs.jpeg'},

  ]
  return (
    <div>
      <div className="watches">
        {watchData.map((watch) => (
        <div key={watch.id} className="watch-card">
        <img src={watch.image} alt={watch.name} />
        <h3>{watch.name}</h3>
        <p>{watch.description}</p>
        <div className="price">${watch.price}</div>
        <button>Add to Cart</button>
        </div>
        ))}
      </div>
    </div>
  )
}

export default watches
