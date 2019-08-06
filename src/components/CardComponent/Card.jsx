import React, { Component } from "react";
import "./Styles/cardStyle.css";

class Card extends Component {
    state = {};
    render() {

        const { img, numLinea, linea, descripcion, inicio, fin } = this.props.card
        return (

            <div className="col-xs-12 col-md-12 col-lg-4 mb-2">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card pt-4">
                                <div className="card-body text-center">
                                    <p><img className="img-fluid" src={img} alt="card image" /></p>
                                    <h4 className="text-danger mb-2"> {linea}</h4>
                                    
                                    <p><strong>Inicio de convocatoria: </strong> {inicio}</p>
                                    <p classname="mb-0"><strong>Fin de convocatoria: </strong> {fin}</p>
                                </div>
                            </div>

                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body  text-center">
                                    <h4 className="card-title m-3">¿Qué aprenderé?</h4>
                                    <p className="text-justify ">{descripcion}</p>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScAYU87Rpf5s3TPLhnvPQc1ssgCoUOMe59zL-lcSoVYtmiqPg/viewform" target="_blank"><button type="button" className="btn btn-outline-danger btn-lg text-center">Solicitar Beca</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
