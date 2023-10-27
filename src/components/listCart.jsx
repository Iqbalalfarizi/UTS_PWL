import React from "react";
import Cart from "./cart";

export default function ListCart() {
    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="w-2/3 p-5 text-center flex flex-col justify-center items-center bg-red-300 rounded-xl">
                <h1 className="text-3xl mb-4">CART</h1>
                <div className="mx-auto">
                    <Cart />
                    <Cart />
                </div>
                <div className="w-full p-2 flex justify-between text-3xl bottom-0 mt-10">
                    <p>Total Harga</p>
                    <p>Rp500.000</p>
                </div>
            </div>
        </div>
    )
}