import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WhatsAppFloat from './components/WhatsAppFloat';
import WhatsAppLink from './components/WhatsAppLink';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Blog from './pages/Blog';
import Consultas from './pages/Consultas';
import Formularios from './pages/Formularios';
import Contacto from './pages/Contacto';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    console.log('Scrolling to:', sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.log('Element not found:', sectionId);
    }
    setIsMenuOpen(false); // Cerrar menú después de hacer clic
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div>
              {/* Header */}
              <header className="header">
                <nav className="nav">
                  <div className="nav-brand">
                    <div className="logo-container">
                      <div className="logo-icon">⚖️</div>
                    </div>
                    <h2>Daniel Jaramillo</h2>
                  </div>
                  
                  {/* Hamburger Menu Button */}
                  <button className="hamburger-menu" onClick={toggleMenu}>
                    <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                  </button>
                  
                  <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#inicio" onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('inicio');
                    }}>Inicio</a>
                    <a href="#servicios" onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('servicios');
                    }}>Servicios</a>
                    <a href="#equipo" onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('equipo');
                    }}>Equipo</a>
                    <a href="#consultas" onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('consultas');
                    }}>Consultas</a>
                    <a href="#contacto" onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contacto');
                    }}>Contacto</a>
                  </div>
                </nav>
              </header>

              {/* Hero Section */}
              <section className="hero" id="inicio">
                <div className="container">
                  <div className="hero-content">
                    <h1 className="hero-title">
                      DANIEL JARAMILLO ABOGADOS
                    </h1>
                    <p className="hero-subtitle">
                      Especialistas en litigio estratégico y resolución efectiva de conflictos legales
                    </p>
                    <div className="hero-info">
                      <div className="contact-info">
                        <p>📞 +593 98 765 4321</p>
                        <p>📧 info@danieljaramilloabogados.com</p>
                      </div>
                      <div className="presence">
                        <p>🏢 Ecuador • España • Estados Unidos</p>
                      </div>
                    </div>
                    <a href="#contacto" className="cta-button" onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contacto');
                    }}>Consulta Gratuita</a>
                  </div>
                  <div className="hero-image">
                    <div className="hero-image-container">
                      <img 
                        src="/images/team/daniel-jaramillo.jpg" 
                        alt="Daniel Jaramillo Abogados"
                        className="hero-main-image"
                      />
                      <div className="image-overlay">
                        <div className="overlay-content">
                          <span className="overlay-icon">⚖️</span>
                          <p>Justicia • Experiencia • Confianza</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Video Section */}
              <section className="video-section">
                <div className="container">
                  <div className="video-content">
                    <div>
                      <h2 className="video-title">Conoce Nuestro Bufete</h2>
                      <p className="video-description">
                        Descubre cómo nuestro equipo de abogados especializados puede ayudarte 
                        a resolver tus problemas legales de manera eficiente y profesional.
                      </p>
                      <div className="video-features">
                        <div className="feature-item">
                          <span className="feature-icon">⚖️</span>
                          <span>Más de 15 años de experiencia</span>
                        </div>
                        <div className="feature-item">
                          <span className="feature-icon">🤝</span>
                          <span>Mediador calificado por el Consejo de la Judicatura</span>
                        </div>
                        <div className="feature-item">
                          <span className="feature-icon">🌍</span>
                          <span>Presencia en Ecuador, España y Estados Unidos</span>
                        </div>
                      </div>
                    </div>
                    <div className="video-container">
                      <div className="video-wrapper">
                        <video 
                          className="main-video" 
                          autoPlay 
                          muted 
                          loop 
                          playsInline
                        >
                          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                          Tu navegador no soporta el elemento de video.
                        </video>
                        <div className="video-overlay">
                          <div className="play-button">
                            <span>▶</span>
                          </div>
                        </div>
                      </div>
                      <div className="video-caption">
                        <p>Video Institucional</p>
                        <small>Conoce nuestro equipo y nuestras instalaciones</small>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Services Section */}
              <section className="services" id="servicios">
                <div className="container">
                  <h2 className="section-title">Servicios Legales</h2>
                  <div className="services-grid">
                    <div className="service-card">
                      <div className="service-image">
                        <img 
                          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                          alt="Litigios y Resolución de Conflictos"
                        />
                      </div>
                      <div className="service-icon">⚖️</div>
                      <h3>LITIGIOS Y RESOLUCIÓN DE CONFLICTOS</h3>
                      <p>Especialistas en litigio estratégico y resolución efectiva de conflictos legales. Nuestro equipo cuenta con amplia experiencia en representación judicial, negociación y mediación para resolver disputas de manera eficiente y favorable para nuestros clientes.</p>
                      <div className="service-details">
                        <h4>Áreas de Especialización:</h4>
                        <ul>
                          <li>Litigio civil y comercial</li>
                          <li>Resolución de conflictos empresariales</li>
                          <li>Negociación y acuerdos extrajudiciales</li>
                          <li>Representación en audiencias</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="service-card">
                      <div className="service-image">
                        <img 
                          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                          alt="Arbitraje y Mediación"
                        />
                      </div>
                      <div className="service-icon">🤝</div>
                      <h3>ARBITRAJE & MEDIACIÓN</h3>
                      <p>Mediador calificado por el Consejo de la Judicatura para resolver disputas de manera pacífica y eficiente. Ofrecemos servicios de mediación y arbitraje que permiten a las partes encontrar soluciones mutuamente beneficiosas sin necesidad de procesos judiciales largos.</p>
                      <div className="service-details">
                        <h4>Servicios Incluidos:</h4>
                        <ul>
                          <li>Mediación familiar y comercial</li>
                          <li>Arbitraje nacional e internacional</li>
                          <li>Resolución de conflictos laborales</li>
                          <li>Conciliación extrajudicial</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="service-card">
                      <div className="service-image">
                        <img 
                          src="https://images.unsplash.com/photo-1589820296150-ecf34c9b2c3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                          alt="Derecho Penal y Económico"
                        />
                      </div>
                      <div className="service-icon">🔒</div>
                      <h3>DERECHO PENAL & ECONÓMICO</h3>
                      <p>Expertos en temas penales con especialización en delitos complejos. Nuestro equipo de abogados penales brinda defensa estratégica en casos de sicariato, tráfico ilícito, estafas, armas, delitos sexuales y otros delitos económicos.</p>
                      <div className="service-details">
                        <h4>Especialidades Penales:</h4>
                        <ul>
                          <li>Defensa penal integral</li>
                          <li>Delitos económicos y financieros</li>
                          <li>Delitos contra la vida</li>
                          <li>Delitos sexuales y violencia</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="service-card">
                      <div className="service-image">
                        <img 
                          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                          alt="Inmobiliario y Bienes Raíces"
                        />
                      </div>
                      <div className="service-icon">🏠</div>
                      <h3>INMOBILIARIO & BIENES RAÍCES</h3>
                      <p>Asesoría legal especializada en transacciones inmobiliarias y derecho de propiedad. Ofrecemos servicios completos para compraventa, arrendamiento, hipotecas, urbanización y todos los aspectos legales relacionados con bienes raíces.</p>
                      <div className="service-details">
                        <h4>Servicios Inmobiliarios:</h4>
                        <ul>
                          <li>Compraventa de propiedades</li>
                          <li>Contratos de arrendamiento</li>
                          <li>Hipotecas y financiamiento</li>
                          <li>Urbanización y desarrollo</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Team Section */}
              <section className="team" id="equipo">
                <div className="container">
                  <h2 className="section-title">Nuestro Equipo</h2>
                  <div className="team-grid">
                    <div className="team-card">
                      <div className="team-avatar">
                        <img 
                          src="/images/team/daniel-jaramillo.jpg" 
                          alt="Daniel Jaramillo"
                        />
                      </div>
                      <h3>Daniel Jaramillo</h3>
                      <h4>Abogado</h4>
                      <p>MEDIADOR CALIFICADO POR EL CONSEJO DE LA JUDICATURA con una sólida formación y experiencia en el ejercicio del derecho, con especialización en materia Penal, civil y familiar. A lo largo de mi carrera he brindado asesoría legal integral, defendiendo los intereses de mis clientes con ética.</p>
                      <a href="mailto:causas@daniel-jaramillo-abogados.com" className="team-email">
                        causas@daniel-jaramillo-abogados.com
                      </a>
                    </div>
                    
                    <div className="team-card">
                      <div className="team-avatar">
                        <img 
                          src="/images/team/diana-garcia.jpg" 
                          alt="Diana Estefany García Ibarra"
                        />
                      </div>
                      <h3>Diana Estefany García Ibarra</h3>
                      <h4>Abogada</h4>
                      <p>26 años de edad, egresada en Derecho de la Universidad Estatal de Milagro y con 2 años de experiencia en el ámbito legal.</p>
                      <a href="mailto:causas@daniel-jaramillo-abogados.com" className="team-email">
                        causas@daniel-jaramillo-abogados.com
                      </a>
                    </div>
                    
                    <div className="team-card">
                      <div className="team-avatar">
                        <img 
                          src="/images/team/Yessenia-Jimenez.jpg" 
                          alt="Yessenia Tatiana Jimenez Acaro"
                        />
                      </div>
                      <h3>Yessenia Tatiana Jimenez Acaro</h3>
                      <h4>Abogada</h4>
                      <p>MAGISTER EN DERECHO PROCESAL CIVIL con una sólida formación y experiencia en el ejercicio del derecho. Brinda asesoría legal integral con ética, compromiso y enfoque personalizado.</p>
                      <a href="mailto:causas@daniel-jaramillo-abogados.com" className="team-email">
                        causas@daniel-jaramillo-abogados.com
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Links Section */}
              <section className="links-section" id="consultas">
                <div className="container">
                  <h2 className="section-title">Consultas</h2>
                  <div className="links-grid">
                    <div className="link-card">
                      <div className="link-image">
                        <img 
                          src="/images/consultas/consejo de la judicatura.png" 
                          alt="Consejo de la Judicatura"
                        />
                      </div>
                      <h3>Consejo de la Judicatura</h3>
                      <p>Consulta de procesos judiciales y estado de causas</p>
                      <a href="https://procesosjudiciales.funcionjudicial.gob.ec/busqueda" target="_blank" rel="noopener noreferrer" className="link-button">
                        Consultar Procesos
                      </a>
                    </div>
                    
                    <div className="link-card">
                      <div className="link-image">
                        <img 
                          src="/images/consultas/Codigo-de-la-ninez-y-adolescencia-Daniel-Jaramillo-Abogado.png" 
                          alt="Código de la Niñez y Adolescencia"
                        />
                      </div>
                      <h3>Código de la Niñez y Adolescencia</h3>
                      <p>Documento legal completo en formato PDF</p>
                      <a href="https://www.registrocivil.gob.ec/wp-content/uploads/downloads/2014/01/este-es-06-C%C3%93DIGO-DE-LA-NI%C3%91EZ-Y-ADOLESCENCIA-Leyes-conexas.pdf" target="_blank" rel="noopener noreferrer" className="link-button">
                        Descargar PDF
                      </a>
                    </div>
                    
                    <div className="link-card">
                      <div className="link-image">
                        <img 
                          src="/images/consultas/superintendencia-de-companias.png" 
                          alt="Superintendencia de Compañías"
                        />
                      </div>
                      <h3>Superintendencia de Compañías</h3>
                      <p>Consulta de información mercantil y empresarial</p>
                      <a href="https://www.supercias.gob.ec/portalscvs/index.htm" target="_blank" rel="noopener noreferrer" className="link-button">
                        Consultar Compañías
                      </a>
                    </div>
                    
                    <div className="link-card">
                      <div className="link-image">
                        <img 
                          src="/images/consultas/iess-Daniel-Jaramillo-Abogado.png" 
                          alt="IESS"
                        />
                      </div>
                      <h3>IESS</h3>
                      <p>Portal para empleadores y consulta de servicios</p>
                      <a href="https://www.iess.gob.ec/empleadores/" target="_blank" rel="noopener noreferrer" className="link-button">
                        Portal Empleadores
                      </a>
                    </div>
                    
                    <div className="link-card">
                      <div className="link-image">
                        <img 
                          src="/images/consultas/FISCALIA-GENERAL-DEL-ESTADO-DANIEL-JARAMILLO-ABOGADO.png" 
                          alt="Fiscalía General del Estado"
                        />
                      </div>
                      <h3>Fiscalía General del Estado</h3>
                      <p>Consulta de noticias del delito y estado de causas</p>
                      <a href="https://www.fiscalia.gob.ec/consulta-de-noticias-del-delito/" target="_blank" rel="noopener noreferrer" className="link-button">
                        Consultar Causas
                      </a>
                    </div>
                    
                    <div className="link-card">
                      <div className="link-image">
                        <img 
                          src="/images/consultas/ANTECEDENTES-PENALES.png" 
                          alt="Antecedentes Penales"
                        />
                      </div>
                      <h3>Antecedentes Penales del Ecuador</h3>
                      <p>Consulta de información judicial individual</p>
                      <a href="https://consultas.funcionjudicial.gob.ec/informacionjudicialindividual/pages/index.jsf#!/" target="_blank" rel="noopener noreferrer" className="link-button">
                        Consultar Antecedentes
                      </a>
                    </div>
                    
                    <div className="link-card">
                      <div className="link-image">
                        <img 
                          src="/images/consultas/REGISTRO-CIVIL.png" 
                          alt="Registro Civil"
                        />
                      </div>
                      <h3>Registro Civil</h3>
                      <p>Portal ciudadano para trámites y consultas</p>
                      <a href="https://apps.registrocivil.gob.ec/portalCiudadano/index.jsf" target="_blank" rel="noopener noreferrer" className="link-button">
                        Portal Ciudadano
                      </a>
                    </div>
                    
                    <div className="link-card">
                      <div className="link-image">
                        <img 
                          src="/images/consultas/MINISTERIO-DE-RELACIONES-EXTERIORES-ECUADOR.png" 
                          alt="Ministerio de Relaciones Exteriores"
                        />
                      </div>
                      <h3>Ministerio de Relaciones Exteriores</h3>
                      <p>Sistema de citas y ubicaciones consulares</p>
                      <a href="https://citas.cancilleria.gob.ec/Home/Ubicaciones" target="_blank" rel="noopener noreferrer" className="link-button">
                        Agendar Cita
                      </a>
                    </div>
                    
                    <div className="link-card">
                      <div className="link-image">
                        <img 
                          src="/images/consultas/SRI.png" 
                          alt="SRI"
                        />
                      </div>
                      <h3>SRI</h3>
                      <p>Servicio de Rentas Internas en línea</p>
                      <a href="https://srienlinea.sri.gob.ec/sri-en-linea/inicio/NAT" target="_blank" rel="noopener noreferrer" className="link-button">
                        SRI en Línea
                      </a>
                    </div>
                    
                    <div className="link-card">
                      <div className="link-image">
                        <img 
                          src="/images/consultas/ASAMBLEA-NACIONAL.png" 
                          alt="Asamblea Nacional"
                        />
                      </div>
                      <h3>Asamblea Nacional</h3>
                      <p>Consulta de leyes y normativa vigente</p>
                      <a href="https://leyes.asambleanacional.gob.ec/" target="_blank" rel="noopener noreferrer" className="link-button">
                        Consultar Leyes
                      </a>
                    </div>
                    
                    <div className="link-card">
                      <div className="link-image">
                        <img 
                          src="/images/consultas/Calculadora-de-Pensiones.png" 
                          alt="Calculadora de Pensión de Alimentos"
                        />
                      </div>
                      <h3>Calculadora de Pensión de Alimentos</h3>
                      <p>Herramienta para calcular pensiones alimenticias</p>
                      <a href="https://www.ecuadorlegalonline.com/calculadoras/calculo-de-pension-alimenticia/" target="_blank" rel="noopener noreferrer" className="link-button">
                        Calcular Pensión
                      </a>
                    </div>
                    
                    <div className="link-card">
                      <div className="link-image">
                        <img 
                          src="/images/consultas/Supa-Sistema-unico-de-pensiones-alimenticias.png" 
                          alt="SUPA"
                        />
                      </div>
                      <h3>SUPA</h3>
                      <p>Sistema Único de Pensiones Alimenticias</p>
                      <a href="https://supa.funcionjudicial.gob.ec/pensiones/publico/consulta.jsf" target="_blank" rel="noopener noreferrer" className="link-button">
                        Consultar SUPA
                      </a>
                    </div>
                    
                    <div className="link-card">
                      <div className="link-image">
                        <img 
                          src="/images/consultas/Funcion-Judicial-Formulario.png" 
                          alt="Función Judicial"
                        />
                      </div>
                      <h3>Función Judicial</h3>
                      <p>Documentos extraviados y trámites judiciales</p>
                      <a href="https://appsj.funcionjudicial.gob.ec/documentosExtraviados/publico/formulario.jsf" target="_blank" rel="noopener noreferrer" className="link-button">
                        Documentos Extraviados
                      </a>
                    </div>
                    
                    <div className="link-card">
                      <div className="link-image">
                        <img 
                          src="/images/consultas/Ministerio-del-Trabajo.png" 
                          alt="Ministerio de Trabajo"
                        />
                      </div>
                      <h3>Ministerio de Trabajo</h3>
                      <p>Calculadoras de liquidaciones laborales</p>
                      <a href="https://calculadoras.trabajo.gob.ec/liquidaciones" target="_blank" rel="noopener noreferrer" className="link-button">
                        Calcular Liquidación
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section className="contact" id="contacto">
                <div className="container">
                  <div className="contact-content">
                    <div className="contact-info-grid">
                      <div className="contact-info-card">
                        <h3>📞 Contacto Directo</h3>
                        <p>+593 98 765 4321</p>
                        <p>+593 99 123 4567</p>
                      </div>
                      <div className="contact-info-card">
                        <h3>📧 Correo Electrónico</h3>
                        <p>info@danieljaramilloabogados.com</p>
                        <p>causas@danieljaramilloabogados.com</p>
                      </div>
                      <div className="contact-info-card">
                        <h3>🏢 Oficinas</h3>
                        <p>Quito, Ecuador</p>
                        <p>Madrid, España</p>
                        <p>Miami, Estados Unidos</p>
                      </div>
                    </div>
                    <div className="contact-form">
                      <h3>Envíanos un Mensaje</h3>
                      <form>
                        <input type="text" className="form-input" placeholder="Nombre completo" required />
                        <input type="email" className="form-input" placeholder="Correo electrónico" required />
                        <input type="tel" className="form-input" placeholder="Teléfono" />
                        <textarea className="form-textarea" placeholder="Describe tu caso legal" rows="5" required></textarea>
                        <button type="submit" className="submit-button">Enviar Mensaje</button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="footer">
                <div className="container">
                  <div className="footer-content">
                    <div className="footer-info">
                      <h3>Daniel Jaramillo Abogados</h3>
                      <p>Especialistas en litigio estratégico y resolución efectiva de conflictos legales</p>
                    </div>
                    <div className="footer-contact">
                      <p>📞 +593 98 765 4321</p>
                      <p>📧 info@danieljaramilloabogados.com</p>
                    </div>
                  </div>
                  <div className="footer-bottom">
                    <p>&copy; 2025 Daniel Jaramillo Abogados. Todos los derechos reservados.</p>
                  </div>
                </div>
              </footer>

              <WhatsAppFloat />
              <WhatsAppLink />
            </div>
          } />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/consultas" element={<Consultas />} />
          <Route path="/formularios" element={<Formularios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
