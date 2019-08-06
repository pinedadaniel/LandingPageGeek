import React, { Component } from 'react';
import './HeroStyles.css';
import hacker from './hero-img.png'
class Hero extends Component {
    state = {}
    render() {
        return (
            <div className="row bg-warning py-5 px-3 hero__background" id="home">
                <div className="col-12">
                    <div className="hero__media-title text-center">
                        <h1>Academia Geek</h1>
                        <p>Aprende a crear aplicaciones web con nuestro curso presencial de 8 semanas.
                            <br />
                            Podrás acceder al mundo laboral y trabajar con nuestros aliados.</p>
                    </div>
                </div>
                <div className="col-lg-8 col-12 hero__media-image mb-3 text-center">
                    <img className="" src={hacker} alt="hola" />
                </div>

                <div className="col-md-4 col-12 hero__cta my-3">

                    <div className="card hero__card text-center border-danger rounded">
                        <div className="card-body ">
                            <div className="card-header">

                                <div className="card-title">
                                    <div className="hero__cta-title ">
                                        <h2>Únete a ahora</h2>
                                        <p>Bootcamp de 8 semanas</p>
                                    </div>
                                </div>
                            </div>
                            <p className="card-text mt-4 text-justify">Haz parte de nuestro newletter y accede a nuestros cursos de manera exclusiva
                                </p>
                            <form>
                                <div className="form-group">

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