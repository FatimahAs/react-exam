import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router'

function ProductList() {
	const [products, SetProducts] = useState([]);
	


     axios.get('https://fakestoreapi.com/products')
      .then(response => {
        SetProducts(response.data);
      },[])

  return (
	
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}  className="group border-1 flex flex-col justify-center items-center bg-white border-[#3c3c3c10]  overflow-hidden">
				  
					  <img
                alt={product.title}
                src={product.image}
                className="aspect-square w-80   object-contain group-hover:opacity-75 xl:aspect-7/8 bg-white"
					  />
				  
				    <div className='bg-white  h-auto p-2 flex flex-col justify-start items-start gap-2 '>
					  <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
					  <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
					  <Link to={`/productdetails/${product.id}`}>
					 <button className="btn">View Details</button>
                      </Link>
				  </div>
				    
            </div>
          ))}
        </div>
      </div>
   

  )
}

export default ProductList