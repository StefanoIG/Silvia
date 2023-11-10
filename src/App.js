import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showRegister, setShowRegister] = useState(false);

  const toggleForm = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div className="text-center text-lg-start">
      <style>
        {`
          body {
            font-family: 'Merriweather', serif;
          }

          @media (max-width: 991.98px) {
            .cascading-right {
              margin-right: 0;
            }
          }

          .hide {
            display: none;
          }
        `}
      </style>

      {showRegister ? (
        <div className="container py-4 " id="registro-form">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card cascading-right" style={{
                background: 'hsla(0, 0%, 100%, 0.55)',
                backdropFilter: 'blur(30px)',
              }}>
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Registrarse</h2>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1" className="form-control" required />
                          <label className="form-label" htmlFor="form3Example1">Nombres</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example2" className="form-control" required />
                          <label className="form-label" htmlFor="form3Example2">Apellidos</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="email" id="inputEmailPersonalizado" className="form-control" required />
                      <label className="form-label" htmlFor="form3Example3">Correo</label>
                      <p id="resultadoCorreoElectronicoPersonalizado" className="text-danger"></p>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="passwordPersonalizado" className="form-control" required />
                      <label className="form-label" htmlFor="passwordPersonalizado">Contraseña</label>
                      <p id="resultadoContraseñaPersonalizada" className="text-danger"></p>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="confirmarPasswordPersonalizado" className="form-control" required />
                      <label className="form-label" htmlFor="confirmarPasswordPersonalizado">Repita Contraseña</label>
                      <p id="mensajeContraseñaPersonalizada" className="text-danger"></p>
                    </div>

                    <div className="form-group row">
                      <label htmlFor="selectModelo" className="h5 form-label">Registro Vehículo</label>
                      <div className="col-sm-4">
                        <select className="form-control" id="selectModelo" required>
                          <option value="modelo1">Modelo 1</option>
                          <option value="modelo2">Modelo 2</option>
                        </select>
                      </div>
                      <div className="col-sm-6">
                        <input type="text" className="form-control" id="placa" placeholder="Placa" required />
                        <p id="mensaje_placa" className="text-danger"></p>
                      </div>
                    </div>
                    <p id="resultadoContraseñaPersonalizada" class="text-danger"></p>
                    <p class="form-toggle">¿Ya tienes una cuenta? <strong onClick={toggleForm}>Iniciar sesión</strong></p>
                    <button type="submit" class="btn btn-info btn-block mb-6">
                    Registrarse
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img src={process.env.PUBLIC_URL + '/logo.png'}  className="w-100 rounded-4 shadow-4" alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="container py-4" id="login-form">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card cascading-right" style={{
                background: 'hsla(0, 0%, 100%, 0.55)',
                backdropFilter: 'blur(30px)',
              }}>
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Login</h2>
                  <form>
                    <div className="form-outline mb-4">
                      <input type="email" id="inputEmail" className="form-control" required />
                      <label className="form-label" htmlFor="inputEmail">Correo</label>
                    </div>
                    <p id="mensajeError" className="text-danger"></p>
                    <div className="form-outline mb-4">
                      <input type="password" id="password" className="form-control" required />
                      <label className="form-label" htmlFor="password">Contraseña</label>
                    </div>
                    <p id="resultadoCorreoElectronicoPersonalizado" className="text-danger"></p>
                    <p className="form-toggle">¿No tienes una cuenta? <strong onClick={toggleForm}>Registrarse</strong></p>
                    <button type="submit" className="btn btn-info btn-block mb-4">
                      <a className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="dashboard.html">Login</a>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img src={process.env.PUBLIC_URL + '/logo.png'}  className="w-100 rounded-4 shadow-4" alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
