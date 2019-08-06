import React from 'react';
import "../NavBarComponent/NavbarStyle.css";
import brand from '../../images/brand.png';
import flagCol from '../../images/colombia.png';
import flagEu from '../../images/eeuu.png';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    render(){
        return (
        

<nav class="navbar navbar-expand-lg navbar-light   " id='header'>
 
<Link className="navbar-brand"  to="#">
            <img src={brand} id='brand' width="120"  className="d-inline-block align-top" alt="IconDisk"/>
            <span className="menu-collapsed" ></span>
           
          </Link>
         

  <button class="navbar-toggler btn btn-light" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon bg-secondary"></span>
  </button>

  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav "  id='contItem'>
    <li class="nav-item">
         <a class="nav-link" href="#">  INICIO  </a>
      </li>                                   
      <li class="nav-item">
         <a class="nav-link" href="#">  CURSOS  </a>
      </li>
      <li class="nav-item">
         <a class="nav-link" href="#"> INSCRIBETE </a> 
      </li> 
    
      <li class="nav-item">
    <a class="nav-link" href="#">  NOSOTROS  </a>
      </li>
      <li className="nav-item">
      <button class="btn btn-outline-primary my-1 my-sm-0" type="submit">CONTACTANOS! </button>
      </li>
      <div> 
        
      </div>
      
    </ul>

    <li class="nav-item dropdown btn-language">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src={flagCol} width='34'/> 
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">  <img src={flagEu} width='34'/> <span class="btn-language-eu"> Ingles</span> </a>
         
        </div>
      </li>
    
    <ul className='ml-auto buscador'>
    <form class="form-inline ">
    <input class="form-control mr-sm-2" type="search" placeholder=" Buscar " aria-label="Search"/>
    <button class="btn btn-outline-dark my-1 my-sm-0" type="submit">Buscar</button></form>
  
    </ul>
    
  </div> 
  
</nav>
  

        );
    }
}

export default Navbar;