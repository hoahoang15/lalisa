// libs
import React from 'react'
// components
import FooterLeft from './components/FooterLeft'
import FooterRight from './components/FooterRight'
// styles
import { FooterContainer } from './footer.styles'

/**
 * Footer
 */
const Footer = () => {
    return (
        <FooterContainer>
            <FooterLeft/>
            <FooterRight/>
        </FooterContainer>
    )
}

export default Footer
