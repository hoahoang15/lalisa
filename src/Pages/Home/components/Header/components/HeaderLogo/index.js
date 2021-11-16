// libs
import React from 'react'
// styles
import { HeaderLogoContainer } from './headerLogo.styles'
// images
import logo from "../../../../../../assets/image/logo.jpg"

/**
 * HeaderLogo
 */
const HeaderLogo = () => {
    return (
        <HeaderLogoContainer>
            <div className="header-logo-left">
                <img className="logo" src={logo} alt ="logo"/>
            </div>
            <div className="header-logo-right"> 
                {/* inline-block, block */}
                <span>Currency</span>
                <select>
                    <option value="0">US Dollar € </option>
                    <option value="1">VNĐ đ</option>
                </select>
                <button>
                    <a href="#">Change</a>
                </button>
            </div>
        </HeaderLogoContainer>
    )
}

export default HeaderLogo
