import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Product = ({ id, img, name, price, category, onAddToCart}) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const product = { id, img, name, price, category, quantity };
    onAddToCart(product);
  }

  return (
    <div className="max-w-xl min-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-5">
      <img className="w-full h-48 object-cover object-center" src={img} alt={name} />
      <div className="py-4 px-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
        <div className='flex flex-row justify-between'>
        <p className="text-gray-700 text-base">{category}</p>
        <p className="text-gray-700 text-base">Rp{price}</p>
        </div>
        <div className='flex flex-row justify-end gap-4 text-xl mt-4'>
                <button className="text-blue-600 ">
                    <FontAwesomeIcon icon={faEdit} />                 
                </button>
                <button className="text-red-600">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
        </div>
        <div className="mt-4 flex flex-col justify-center items-center">
          <input
            type="number"
            className="border rounded px-3 py-1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
          />
          <button onClick={handleAddToCart} className="bg-green-500 hover:bg-green-700 text-white font-bold mt-3 py-2 px-4 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
export default Product;