import React from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

const Main = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Main