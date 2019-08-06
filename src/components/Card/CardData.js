import React from 'react';

import './Styles/cardStyle.css';

import Card from './Card';
import Back from '../img/Back.png'
import Front from '../img/Front.png'
import VRGames from '../img/VRGames.png'


class CardData extends React.Component {

    //El constructor es el primer método que ocurre
    //este método recibe nuestros PROPS, los cuales debemos
    //utilizar para inicializar la super clase
    //Lugar idela para inicializar estado
    constructor(props){
        super(props);
        console.log('1. constructor()');
        //debemos decir this.
        this.state= {
            data:   [
                {
                    "img": Front,
                    "numLinea":"Linea 1",
                    "linea":"Desarrollo Web/Mobile Frontend.",
                    "descripcion":"Las competencias para realizar el maquetado de interfaces gráficas para aplicaciones web utilizando HTML-CSS, bootstrap, material design, haciendo énfasis en Javascript para lo que se utilizará la herramienta de ReactJS. Así mismo se realizará el desarrollo de interfaces gráficas para dispositivos móviles utilizando ReactNative.",
                    iconos : <>
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
                    "numLinea":"Linea 2",
                    "linea":"Desarrollo Web/Mobile Frontend.",
                    "descripcion":"Las competencias para programar funciones, procedimientos o aplicaciones que procesen información del lado del servidor, utilizando tecnologías como: NodeJS, MongoDB, GRAPHQL y Firebase.",
                    iconos : <>
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
                    "numLinea":"Linea 3",
                    "linea":"Desarrollo Web/Mobile Frontend.",
                    "descripcion":"Las competencias para el desarrollo de experiencias inmersivas para entornos de 3D, utilizando para esto la herramienta de Unity y programando para alguna de las tecnologías de visualización disponibles en el mercado como Samsung Gear VR, Oculus Go, Microsoft Mixed Reality, HTC Vive u Oculus Rift.",
                    iconos : <>
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

    //El componente DidMount Excelente lugar para
    //cargar nuestra data que llega externa de un API
    //Es el tercer método que se ejecuta
    componentDidMount(){
        console.log('3. componentDidMount()');
        //simular peticion asincrona, decimos que en 3000 milisegundos
        //se actualice el estado con los datos que deseo mostrar
        //en pantalla

        //2. setTimeout retorna un timeoutID
        this.timeoutId = setTimeout(() => {
            this.setState({
  
            })
        });

    }

    //recibe dos argumentos los props que se tenian antes y el segundo
    //el state que tenía antes
    componentDidUpdate(prevProps, prevState){
        console.log('5. componenteDidUpdate()');
        //imprimiendo los valores que tenia antes
        //y los nuevos valores
        console.log({
            prevProps: prevProps,
            prevState: prevState
        });
        //comparando con los nuevos valores
        console.log({
            props: this.props,
            state: this.state
        })
    }

    //Ultimo componente, es el que ocurre ANTES de que se vaya
    //nuestro componente de pantalla (DEL DOM),
    //Detalle importante! debo garantizar si me muevo a otro lugar
    //parar la llamada ASINCRONA!, ya que el componente se fue es un ERROR COMUN
    
    componentWillUnmount(){
        console.log('6. componentWillUnMount()');
        //el timeoutID nos sirve para llamar otra funcion
        //llamada clearTimeout()
        //si el id existe y el trabajo esta pendiente lo CANCELA 
        clearTimeout(this.timeoutId);
    }
    
    render() { 
        console.log('2/4. render()');
        return ( 
                   
        <div>
            <div className="container">
                <div className="row">

                {this.state.data.map(
                    (cosa,i) => {
                        return (
                            <Card card={this.state.data[i]} />
                        )
                    }
                )}
                </div>     
            </div>
        </div>
            
                   
        );
    }
}

export default CardData;