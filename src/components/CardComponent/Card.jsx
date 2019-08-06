import React, { Component } from "react";
import "./Styles/cardStyle.css";

class Card extends Component {
    state = {};
    render() {

        const { img, numLinea, linea, descripcion, iconos } = this.props.card
        return (

            <div className="col-xs-12 col-sm-6 col-md-4 p-auto">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card pt-4">
                                <div className="card-body text-center">
                                    <p><img className="" src={img} alt="card image" /></p>
                                    <h4 className="text-danger">{numLinea}</h4>
                                    <p className="card-text">{linea}</p>
                                    {iconos}
                                </div>
                            </div>

                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body mt-4 text-center">
                                    <h4 className="card-title">¿Qué aprenderé?</h4>
                                    <p className="card-text text-justify ">{descripcion}</p>
                                    <button type="button" className="btn btn-outline-danger btn-lg text-center">Solicitar Beca</button>
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
