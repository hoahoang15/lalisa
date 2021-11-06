// libs
import React from 'react'
// images
import Hoa_1 from "../../assets/image/Hoa_1.jpg"
// styles
import "./Image.css"

/**
 * Image
 */
const Image = () => {
    return (
        <div className="image_wrapper">
           <img src={Hoa_1} alt="Hoa_1.jpg"/>
           <div className="bottom_wrapper">
               <p className="description">Name</p>
           </div>
        </div>
    )
}

export default Image
