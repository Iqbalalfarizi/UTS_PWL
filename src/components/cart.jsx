import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
    return (
        <div className="w-full h-64 grid grid-cols-2 border-b border-gray-200 p-4 items-center hover:bg-teal-200 transition duration-300 rounded-2xl">
            <div className="flex items-center space-x-4">
                <img className="w-24 h-24 object-cover" src='https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/7/3/0654fa50-001a-4484-a931-4248bd9fbebc.jpg.webp?ect=4g' alt="product-img" />
                <div>
                    <p className="text-xl font-semibold">Hyndia - Palung Mariana</p>
                    <p className="text-xl text-blue-600">Rp200.000</p>
                </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700">
                <FontAwesomeIcon icon={faTrash} className="text-2xl"/>
            </button>
        </div>
    )
}