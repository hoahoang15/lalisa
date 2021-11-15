// libs
import React from 'react'
// components
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
// styles
import { HomeContainer } from './home.styles'

/**
 * Home
 */
const Home = () => {
    return (
        <HomeContainer>
            <Header/>
            <Main/>
            <Footer/>
        </HomeContainer>
    )
}

export default Home
