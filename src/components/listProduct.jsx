import React from "react"
import dataProduct from "../dataProduct"
import Product from "./product"
import { Link } from "react-router-dom"

function ListProduct() {
    return(
        <div className="grid grid-cols-4 p-10 mx-0 my-0">
            {dataProduct.map((data) => (
            <Product
                key={data.id}
                img={data.img}
                name={data.name}
                price={data.price}
                category={data.category}
            />
            ))}
            <div className="bg-black">
                <Link to="/addProduct" className='text-5xl absolute right-0 top-0'>
                    <span role="img" aria-label="Tambah Data">➕</span>
                </Link>
            </div>
        </div>
    )
}

export default ListProduct;