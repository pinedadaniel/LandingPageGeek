import React from 'react';

class Faq extends React.Component {
    state = {}
    render() {
        return (

            <div className="row bg-dark py-5 text-light">
                <div className="col-12 text-center mb-5 ">
                    <h2>
                        Más información
                    </h2>
                </div>

                <div className="col-0 col-md-2">
                </div>

                <div className="col-md-8 col-12 text-dark" >
                    <div className="question">
                        <div className="accordion" id="accordionExample">

                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h2 className="mb-0">
                                        <button className="btn btn-block btn-outline-secondary " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            ¿Cuál es el horario de los cursos?
        </button>
                                    </h2>
                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Generalmente la formación se realiza en las mañanas.
                                        El horario exacto está por definir pero la intensidad horaria de la sesión es de 5 horas diarias por 8 semanas.
      </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h2 className="mb-0">
                                        <button className="btn btn-block btn-outline-secondary" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            ¿Cuáles son los requisitos?
        </button>
                                    </h2>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Están dirigidas a bachilleres de Instituciones Educativas Públicas del Valle de Aburrá.
                                        Para solicitar una de ellas debes completar el Formulario en línea
      </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingFour">
                                    <h2 class="mb-0">
                                        <button class="btn btn-block btn-outline-secondary" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Estoy en decimo grado, ¿puedo aspirar a la beca?
       </button>
                                    </h2>
                                </div>
                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                    <div class="card-body">
                                        No. Uno de los requisitos de la beca es tener el grado de bachillerato.
      </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingFive">
                                    <h2 class="mb-0">
                                        <button class="btn btn-block btn-outline-secondary" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Si me equivoqué al enviar documentos ¿Cómo la corrijo?
       </button>
                                    </h2>
                                </div>
                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                    <div class="card-body">
                                        Envíanos un correo explicando la situación y anexando el documento a: narayana.salamanca@makaia.org
      </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h2 className="mb-0">
                                        <button className="btn btn-block btn-outline-secondary" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            ¿Qué beneficios tiene la beca?
        </button>
                                    </h2>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <ul>
                                            <li>Cubre la totalidad del proceso de formación en habilidades técnicas y blandas,
                 con tutores expertos en el tema y conferencistas de las empresas aliadas. </li>
                                            <li>Materiales de formación. </li>
                                            <li>Apoyo en el proceso de empleabildad.</li>
                                            <li>Refrigerio todos los días durante el proceso de formación.</li>
                                            <li>La beca NO cubre gastos de transporte al lugar donde se realizarán los cursos,
                                                que en este caso será el Politécnico Jaime Isaza Cadavid
                (cercano a la estación Poblado del Metro de Medellín). </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="text-center text-light ">
                        <p className="my-3" >¿Tienes otra pregunta?</p>
                        <a href="https://wa.me/573127428355" target="_blank"><button className="btn btn-success" type="submit">Escribenos aquí  <i className="fab fa-whatsapp "></i></button></a>
                    </div>

                </div>

                <div className="col-0 col-md-2">
                </div>
            </div >
        );
    }
}

export default Faq;