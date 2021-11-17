// libs
import React from 'react'
// styles
import { HeaderMenuContainer } from './headerMenu.styles'

/**
 * HeaderMenu
 */
const HeaderMenu = () => {
    return (
        <HeaderMenuContainer className="header-menu-left">
            <div className="header-menu-right">
                <div className="header-menu-right-content">
                    <ul>
                        <li><a href="#">online store</a></li>
                        <li className="line"></li>
                        <li><a href="#">about us</a></li>
                        <li className="line"></li>
                        <li><a href="#">delivery</a></li>
                        <li className="line"></li>
                        <li><a href="#">FQAS</a></li>
                        <li className="line"></li>
                        <li><a href="#">contact</a></li>
                        <li className="line"></li>
                        <li className="description"><strong>My cart:</strong><span>your cards is currently</span><a href="#">empty</a></li>
                    </ul>
                </div>
            </div>
        </HeaderMenuContainer>
    )
}

export default HeaderMenu
