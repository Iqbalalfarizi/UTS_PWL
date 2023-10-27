import React from "react"

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
            </div>
        </div>
        </div>
    )
}