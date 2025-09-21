import React from 'react';
import '../css/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <footer className="footer bg-boca text-white mt-5">
      <div className="contenedor-footer py-4">
        <div className="row">
          <div className="columna-footer col-md-4 mb-3">
            <h5 className="titulo-footer">Club Atlético Boca Juniors</h5>
            <p className="descripcion-footer">
              Pasión, historia y gloria. Bienvenido al sitio oficial de productos y novedades del club más grande.
            </p>
          </div>

          <div className="columna-footer col-md-4 mb-3">
            <h5 className="titulo-footer">Secciones</h5>
            <ul className="lista-links">
              <li><a href="/" className="link-footer">Nuevo</a></li>
              <li><a href="/categories/futbol" className="link-footer">Fútbol</a></li>
              <li><a href="/categories/basquet" className="link-footer">Básquet</a></li>
              <li><a href="/categories/accesorios" className="link-footer">Accesorios</a></li>
            </ul>
          </div>

          <div className="columna-footer col-md-4 mb-3">
            <h5 className="titulo-footer">Seguinos</h5>
            <div className="iconos-redes d-flex gap-3">
              <a href="https://facebook.com/BocaJuniors" target="_blank" rel="noreferrer" className="icono-red">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/BocaJrsOficial" target="_blank" rel="noreferrer" className="icono-red">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/bocajrs/" target="_blank" rel="noreferrer" className="icono-red">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="separador-footer border-warning" />

        <div className="texto-copyright text-center small">
          © {new Date().getFullYear()} ian lombardia. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
