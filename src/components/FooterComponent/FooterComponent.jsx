import React from 'react';
import "../FooterComponent/FooterStyle.css";

import twitter from '../../images/twitter.svg';
import facebook from '../../images/facebook.svg';
import youtube from '../../images/youtube.svg';
import linkedin from '../../images/linkedin.svg';
import phone from '../../images/phone.svg';
import cell from '../../images/cell.svg';
import location from '../../images/location.svg';
import email from '../../images/email.svg';
import { Link } from 'react-router-dom';


class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>

        <footer class=" page-footer font-small blue pt-4">

          <div class="container-fluid text-center text-md-left">


            <div class="row">


              <div class="col-md-6 mt-md-0 mt-3">


                <h5 class="text-uppercase textFooterTittle">academia geek!</h5>
                <p className='textFooterP'> En la Academia potenciamos capacidades para el desarrollo social desde la cooperación, la innovación y la tecnología, Fomentando el Pensamiento critico y diferente. </p>

              </div>


              <hr class="clearfix w-100 d-md-none pb-3" />


              <div class="col-md-3 mb-md-0 mb-3">


                <h5 class="text-uppercase linkstittleFooter">contactanos</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!" class="linkFooter"><img src={phone} className='' width='20' /> (574) 4480374</a>
                  </li>
                  <li>
                    <a href="#!" class="linkFooter"><img src={cell} className='' width='20' /> (57) 3207610176</a>
                  </li>
                  <li>
                    <a href="#!" class="linkFooter"><img src={email} className='' width='20' /> info@makaia.org</a>
                  </li>
                  <li>
                    <a href="https://www.google.es/maps/@6.235194,-75.5708941,18.5z" target='_blank' class="linkFooter"><img src={location} className='' width='20' /> Carrera 43 A # 34 – 155. Almacentro, Oficina 701
                        Medellín, Colombia.</a>
                  </li>
                </ul>

              </div>



              <div class="col-md-3 mb-md-0 mb-3">


                <h5 class="text-uppercase linkstittleFooter">Siguenos</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="https://www.facebook.com/Makaiaorg"> <img src={facebook} className='iconRedes' width='32' /> </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Makaiaorg">
                      <img src={twitter} className='iconRedes' width='32' /></a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCSwYcQxM_DyO_VNqglgmvzQ"><img src={youtube} className='iconRedes' width='32' /></a>
                  </li>
                  <li>
                    <a href="https://es.linkedin.com/"><img src={linkedin} className='iconRedes' width='32' /></a>
                  </li>


                  <li>
                    <a href="#!" className='politics'>Consulta nuestra politica de tratamiento de Datos</a>
                  </li>
                </ul>

              </div>


            </div>


          </div>


          <hr />
          <div class="footer-copyright text-center py-3 Copyright">© 2019 Copyright:
              <a href="https://academia-geek-landing.firebaseapp.com/"> academiageek.co </a> All Rights Reserved
            </div>


        </footer>
      </React.Fragment>


    );
  }
}

export default Footer;