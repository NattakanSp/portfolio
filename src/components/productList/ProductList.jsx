import React from 'react'
import "./ProductList.css"
import Product from "../product/Product.jsx"
import {products} from "../../data"

function ProductList() {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title"> Create & inspire. ME</h1>
                <p className="pl-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, eaque quod explicabo laboriosam accusantium cum provident facilis, sint illum fugit commodi incidunt velit culpa quos inventore? Magnam amet fugit repellendus?</p>
            </div>
            <div className="pl-list">
             {products.map((item)=> <Product  key={item.id} img={item.img} link={item.link}/>)}   
               
            </div>
            
        </div>
    )
}

export default ProductList
