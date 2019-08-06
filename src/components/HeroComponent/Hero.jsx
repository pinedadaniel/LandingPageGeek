import React, { Component } from 'react';
import './HeroStyles.css';
import hacker from './hero-img.png'
class Hero extends Component {
    state = {}
    render() {
        return (
            <div className="row bg-warning py-5 px-3 hero__background">

                <div className="col-md-8 col-12 hero__media mb-3">
                    <div className="hero__media-title text-center">
                        <h1>Academia Geek</h1>
                        <p>Cursos presenciales de programación</p>
                        <img src={hacker} alt="hola" />
                    </div>
                </div>

                <div className="col-md-4 col-12 hero__cta my-3">
                    <div className="hero__cta-title text-center">
                        <h2>Únete a ahora</h2>
                        <p>Bootcamp de 8 semanas</p>
                    </div>
                    <div className="card hero__card mt-5">
                        <div className="card-body">

                            <p className="card-text">Haz parte de nuestro newletter y accede a nuestros cursos de manera exclusiva
                                </p>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="hero__form-mailInput">Tu email</label>
                                    <input type="text" className="form-control" id="hero__form-mailInput"
                                        placeholder="Email" />
                                </div>
                            </form>
                            <div className="col-12 text-center">

                                <a href="#" className="btn btn-danger">Inscríbete!</a>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

export default Hero;