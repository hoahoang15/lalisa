// libs
import React from 'react'
// images
import icon_button_icon from '../../assets/image/icon_button_icon.svg'
// styles
import "./buttonIcon.css"

/**
 * ButtonIcon
 */
const ButtonIcon = () => {
    return (
        <div className= "buttonIcon">
         <img src={icon_button_icon} alt="icon_button_icon.svg"></img>
         <span className="subTitle">Quản lý thành viên</span>
        </div>
    )
}

export default ButtonIcon
