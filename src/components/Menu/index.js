import React from 'react'
import { Container } from './menu.styles'


/**
 * -- Su dung styled-omponents ?????
 * -- tao menu ?????
 * -- style menu ??????
 */
const Menu = () => {
    return (
        <Container className="menu_wrapper">
            <ul>
                <li>
                    <a href="#">Home
                        {/* <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                        </ul> */}
                    </a>
                </li>
                <li><a href="#">About</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </Container>
    )
}

export default Menu
