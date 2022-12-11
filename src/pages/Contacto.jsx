import React from "react";
import "./Contacto.css";

function Contacto() {
  return (
    <div className="containerForm" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
    <div className="row">
      <div className="col">
        <div className="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
          <div className="p-3 mb-2 bg-primary bg-gradient fw-bold text-white">Formulario</div>
          <br/>
          <form className="row g-3 needs-validation" novalidate/>
            <div className="col-md-4">
              <label for="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" value="Christian Ortiz" required/>
            
              <div className="valid-feedback">¡Campo válido!</div>
              <div className="invalid-feedback">Debe completar los datos.</div>

            </div>
            <div className="col-md-4">
              <label for="apellido" className="form-label">Apellido</label>
              <input type="text" className="form-control" id="apellido" value="" required/>
              
              <div className="valid-feedback">¡Campo válido!</div>
              <div className="invalid-feedback">Debe completar los datos.</div>

            </div>
            <div className="col-md-3">
              <label for="pais" className="form-label">País</label>
              <select className="form-select" id="pais" required>
                <option selected disabled value="">Seleccione...</option>
                <option>Argentina</option>
                <option>Colombia</option>
                <option>Chile</option>
                <option>Bolivia</option>
                <option>Peru</option>
                <option>Uruguay</option>
              </select>
              
              <div className="valid-feedback">¡Campo válido!</div>
              <div className="invalid-feedback">Debe completar los datos.</div>
            </div>
            <div className="col-md-4">
              <label for="exampleFormControlInput1" className="form-label">Email </label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              <div className="valid-feedback">¡Campo válido!</div>
              <div className="invalid-feedback">Debe completar los datos.</div>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Inserte su consulta</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                </h2>
              </div>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label className="form-check-label" for="flexRadioDefault1">
                No acepto terminos y condiciones
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
              <label className="form-check-label" for="flexRadioDefault2">
                Acepto terminos y condiciones
              </label>
            </div>
            <button className="btn btn-warning fw-bold enviar" type="submit">Enviar</button>
          </div>
        </div>
      </div>
    </div>
 
  );
}

export default Contacto;