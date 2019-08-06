import React, { Component } from 'react';

import logo from './images/logo_ag.png';
import logo1 from './images/logo_ag_1.png';
import logo2 from './images/logo_ag_2.png';
import logo3 from './images/logo_ag_3.png';
import logo4 from './images/logo_ag_4.png';
import logo5 from './images/logo_ag_5.png';





class Aliados extends Component {
    state = {}
    render() {
        return (
            <div className="aliados__background py-5 px-3">
                <div className="row ">
                    <div className="col-0 col-md-2">
                    </div>
                    <div className="col-md-8 col-12 aliados__text text-center ">

                        <div className="aliados__text-description ">
                            <h2 className="mb-5" >Quienes Somos</h2>

                            <p className="mt-3">
                                Somos una alianza entre MAKAIA, Agile Innova y E-volution:
                                tres organizaciones que trabajan con tecnología, innovación
                                y soluciones digitales que han decidido compartir conocimiento
                                a través de una Academia de Código y Programación.
                         </p>
                        </div>
                    </div>
                    <div className="col-0 col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-12 aliados__logos p-5 text-center">
                        <div className="col-12 mb-5">

                            <img className="col-6 col-md-2 mx-3 my-2" src={logo} alt="hola" />
                            <img className="col-6 col-md-2 mx-3 my-2" src={logo1} alt="hola" />
                            <img className="col-6 col-md-2 mx-3 my-2" src={logo2} alt="hola" />
                        </div>
                        <div className="col-12 mt-5">
                            <p>Aliados Estratégicos:</p>
                            <img className="col-6 col-md-2 mx-3 my-2" src={logo3} alt="hola" />
                            <img className="col-6 col-md-2 mx-3 my-2" src={logo4} alt="hola" />
                            <img className="col-6 col-md-2 mx-3 my-2" src={logo5} alt="hola" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aliados;