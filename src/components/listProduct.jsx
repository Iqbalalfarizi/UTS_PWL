import React, {useState, useEffect} from "react"
import Product from "./product"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import ListCart from "./listCart"

function ListProduct() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([])

  const removeFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log(cartItems)
  };
  useEffect(() => {
    fetch('https://653ca44fd5d6790f5ec8213d.mockapi.io/product')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);
    return(
        <div >
            <div className="w-full flex justify-end mt-5">
                <button>
                    <FontAwesomeIcon onClick={() => navigate('/addProduct')} icon={faPlus} className="text-5xl mr-10" title="Tambah Produk" />
                </button>
            </div>
            <div className="flex flex-col ">
            <div className="grid grid-cols-4 p-10 my-2 gap-x-8 gap-y-10">
              {products.map((data) => (
                <Product
                  key={data.id}
                  img={data.img}
                  name={data.name}
                  price={data.price}
                  category={data.category}
                  onAddToCart={addToCart}
        />
        ))}
      </div>
      <ListCart cartItems={cartItems} onRemove={removeFromCart}/>
      </div>
      </div>
    )
}

export default ListProduct;