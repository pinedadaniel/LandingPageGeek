import React from 'react';
import Navbar from './NavBarComponent/NavbarComponent'
import Footer from './FooterComponent/FooterComponent'
import { Link, Browser } from 'react-router-dom';
const Layout = (props) =>{
    return(
        <React.Fragment>
            <Navbar/>
            
            <Footer/>
         
        
        </React.Fragment>
    )

}

export default Layout;