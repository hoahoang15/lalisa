// libs
import React from 'react'
// images
import facebook from "../../../../../../assets/image/facebook.png"
import twitter from "../../../../../../assets/image/twitter.png"
import google from "../../../../../../assets/image/google.png"
import youtube from "../../../../../../assets/image/youtube.png"
// styles
import { FooterRightContainer } from './footerRight.styles'

/**
 * FooterRight
 */
const FooterRight = () => {
    return (
        <FooterRightContainer>
            <a href="#"><img src={facebook} alt="facebook" /></a>
            <a href="#"><img src={twitter} alt="twitter" /></a>
            <a href="#"><img src={google} alt="google" /></a>
            <a href="#"><img src={youtube} alt="youtube" /></a>
        </FooterRightContainer>
    )
}

export default FooterRight
