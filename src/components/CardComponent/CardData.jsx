import React from 'react';

import './Styles/cardStyle.css';

import Card from './Card';
import Back from './img/Back.png'
import Front from './img/Front.png'
import VRGames from './img/VRGames.png'


class CardData extends React.Component {

    //El constructor es el primer método que ocurre
    //este método recibe nuestros PROPS, los cuales debemos
    //utilizar para inicializar la super clase
    //Lugar idela para inicializar estado
    constructor(props) {
        super(props);
        console.log('1. constructor()');
        //debemos decir this.
        this.state = {
            data: [
                {
                    "img": Front,
                    "numLinea": "Linea 1",
                    "linea": "Desarrollo Web/Mobile Frontend.",
                    "descripcion": "Las competencias para realizar el maquetado de interfaces gráficas para aplicaciones web utilizando HTML-CSS, bootstrap, material design, haciendo énfasis en Javascript para lo que se utilizará la herramienta de ReactJS. Así mismo se realizará el desarrollo de interfaces gráficas para dispositivos móviles utilizando ReactNative.",
                    iconos: <>
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <a class="social-icon text-xs-center" target="_blank" href="#">
                                    <i class="fab fa-html5 fa-2x"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="social-icon text-xs-center" target="_blank" href="#">
                                    <i class="fab fa-css3 fa-2x"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="social-icon text-xs-center" target="_blank" href="#">
                                    <i class="fab fa-bootstrap fa-2x"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="social-icon text-xs-center" target="_blank" href="#">
                                    <i class="fab fa-js fa-2x"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="social-icon text-xs-center" target="_blank" href="#">
                                    <i class="fab fa-react fa-2x"></i>
                                </a>
                            </li>

                        </ul>
                    </>
                },
                {
                    "img": Back,
                    "numLinea": "Linea 2",
                    "linea": "Desarrollo Web/Mobile Frontend.",
                    "descripcion": "Las competencias para programar funciones, procedimientos o aplicaciones que procesen información del lado del servidor, utilizando tecnologías como: NodeJS, MongoDB, GRAPHQL y Firebase.",
                    iconos: <>
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <a class="social-icon text-xs-center" target="_blank" href="#">
                                    <i class="fab fa-node-js fa-2x"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="social-icon text-xs-center" target="_blank" href="#">
                                    <i class="fas fa-database fa-2x"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="social-icon text-xs-center" target="_blank" href="#">
                                    <i class="fab fa-css3 fa-2x"></i>
                                </a>
                            </li>


                        </ul>
                    </>
                },
                {
                    "img": VRGames,
                    "numLinea": "Linea 3",
                    "linea": "Desarrollo Web/Mobile Frontend.",
                    "descripcion": "Las competencias para el desarrollo de experiencias inmersivas para entornos de 3D, utilizando para esto la herramienta de Unity y programando para alguna de las tecnologías de visualización disponibles en el mercado como Samsung Gear VR, Oculus Go, Microsoft Mixed Reality, HTC Vive u Oculus Rift.",
                    iconos: <>
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <a class="social-icon text-xs-center" target="_blank" href="#">
                                    <i class="fab fa-node-js fa-2x"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="social-icon text-xs-center" target="_blank" href="#">
                                    <i class="fas fa-database fa-2x"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="social-icon text-xs-center" target="_blank" href="#">
                                    <i class="fab fa-css3 fa-2x "></i>
                                </a>
                            </li>
                        </ul>
                    </>
                }

            ]
        }
    }

    render() {
        console.log('2/4. render()');
        return (

            <div className="row  py-5 px-3 ">

                {this.state.data.map(
                    (cosa, i) => {
                        return (
                            <Card card={this.state.data[i]} />
                        )
                    }
                )}
            </div>


        );
    }
}

export default CardData;