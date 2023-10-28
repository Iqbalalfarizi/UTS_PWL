import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Cart(props, onRemove) {
    return (
        <div className="w-full h-64 grid grid-cols-2 border-b border-gray-200 p-4 items-center hover:bg-teal-200 transition duration-300 rounded-2xl">
            <div className="flex items-center space-x-4">
                <img className="w-24 h-24 object-cover" src={props.img} alt='' />
                <div>
                    <p className="text-xl font-semibold">{props.name}</p>
                    <p className="text-xl text-blue-600">Rp{props.price}</p>
                    <p className="text-xl text-blue-600">Total: {props.quantity} x {props.price}</p>
                </div>
            </div>
            <button onClick={onRemove} className="text-blue-600 hover:text-blue-700">
                <FontAwesomeIcon  icon={faTrash} className="text-2xl"/>
            </button>
        </div>
    )
}