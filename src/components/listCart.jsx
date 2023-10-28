import React from "react";
import Cart from "./cart";


function ListCart({ cartItems, onRemove }) {
  console.log(cartItems)
  const calculateTotalPrice = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.price;
    });
    return total;
  };
  

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-2/3 p-5 text-center flex flex-col justify-center items-center bg-red-300 rounded-xl">
        <h1 className="text-3xl mb-4">CART</h1>
        <div className="mx-auto">
          {cartItems.map((item,index) => (
            <Cart
              key={index}
              img={item.img}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onRemove={() => onRemove(index)}
            />
          ))}
        </div>
        <div className="w-full p-2 flex justify-between text-3xl bottom-0 mt-10">
          <p>Total Harga</p>
          <p>Rp{calculateTotalPrice(cartItems)}</p>
        </div>
      </div>
    </div>
  );
}

export default ListCart;