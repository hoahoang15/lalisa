// libs
import React from 'react'
// components
import HeaderLogo from './components/HeaderLogo'
import HeaderMenu from './components/HeaderMenu'
// styles
import { HeaderContainer } from './header.styles'

/**
 * Header
 */
const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLogo/>
            <HeaderMenu/>
        </HeaderContainer>
    )
}

export default Header
