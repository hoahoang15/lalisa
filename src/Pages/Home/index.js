// libs
import React from 'react'
// components
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
// styles
import { Container } from './home.styles'

/**
 * Home
 */
const Home = () => {
    return (
        <Container>
            <Header/>
            <Main/>
            <Footer/>
        </Container>
    )
}

export default Home
