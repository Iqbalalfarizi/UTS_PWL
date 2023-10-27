import React from "react"
import dataProduct from "../dataProduct"
import Product from "./product"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons"

function ListProduct() {
    return(
        <div>
            <div className="w-full flex justify-end mt-5">
                <button>
                    <FontAwesomeIcon icon={faPlus} className="text-5xl mr-10" title="Tambah Produk" />
                </button>
                <button>
                    <FontAwesomeIcon icon={faShoppingCart} className="text-5xl mr-10" title="Buka Keranjang Belanja" />
                </button>
            </div>
            <div className="grid grid-cols-4 p-10 my-2 gap-x-8 gap-y-10">
        {dataProduct.map((data) => (
          <Product
            key={data.id}
            img={data.img}
            name={data.name}
            price={data.price}
            category={data.category}
          />
        ))}
      </div>
        </div>
    )
}

export default ListProduct;