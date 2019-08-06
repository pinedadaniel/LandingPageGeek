import React from 'react';

const Faq = () => {
  return (
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
        <div className="text-center">
          <p>¿Tienes otra pregunta?</p>
          <a href="https://wa.me/573127428355" target="_blank"><button className="btn btn-outline-secondary" type="submit">Escribenos aquí  <i className="fab fa-whatsapp "></i></button></a>
        </div>

      </div>
    </div>




  );
}


export default Faq;