import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"

export default function Product(props) {
    return(
        <div className="mr-8">
            <div className="w-80 p-3 bg-slate-400 rounded-xl" key={props.id}>
                <img className="w-72 h-72" src={props.img} alt="Product-Img" />
                <div className="p-4">
                    <h2 className="text-xl">{props.name}</h2>
                    <div className="flex justify-between">
                    <div className="text-lg">Rp{props.price}</div>
                    <div className="text-lg">{props.category}</div>
                </div>
            <div className="flex gap-2 mt-4">
                <button className="text-blue-600">
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="text-red-600">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
          </div>
        </div>
      </div>
    </div>
    )
}