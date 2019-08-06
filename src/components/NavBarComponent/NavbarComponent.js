import React from 'react';
import "../NavBarComponent/NavbarStyle.css";
import brand from '../../images/brand.png';
import flagCol from '../../images/colombia.png';
import flagEu from '../../images/eeuu.png';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (


      <nav className="navbar navbar-expand-lg navbar-light   " id='header'>

        <Link className="navbar-brand" to="/">
          <img alt="brand" src={brand} id='brand' width="120" className="d-inline-block align-top" alt="IconDisk" />
          <span className="menu-collapsed" ></span>

        </Link>


        <button className="navbar-toggler btn btn-light" type="button" data-toggle="collapse" data-target="/collapsibleNavbar">
          <span className="navbar-toggler-icon bg-secondary"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav " id='contItem'>
            <li className="nav-item">
              <a className="nav-link" href="#home">  INICIO  </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cursos">  CURSOS  </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"> INSCRIBETE </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">  NOSOTROS  </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary my-1 my-sm-0" type="submit">CONTACTANOS! </button>
            </li>
            <div>

            </div>

          </ul>

          <li className="nav-item dropdown btn-language">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img alt="flag" src={flagCol} width='34' />
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="/">  <img src={flagEu} width='34' /> <span className="btn-language-eu"> Ingles</span> </a>

            </div>
          </li>

          <ul className='ml-auto buscador'>
            <form className="form-inline ">
              <input className="form-control mr-sm-2" type="search" placeholder=" Buscar " aria-label="Search" />
              <button className="btn btn-outline-dark my-1 my-sm-0" type="submit">Buscar</button></form>

          </ul>

        </div>

      </nav>


    );
  }
}

export default Navbar;