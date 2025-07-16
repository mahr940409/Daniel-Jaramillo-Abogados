import React from 'react';
import './Pages.css';

function Nosotros() {
  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <div className="logo-container">
              <div className="logo-icon">⚖️</div>
              <h2>Daniel Jaramillo Abogados</h2>
            </div>
          </div>
          <ul className="nav-menu">
            <li><a href="/">Inicio</a></li>
            <li><a href="/nosotros" className="active">Nosotros</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/consultas">Consultas</a></li>
            <li><a href="/formularios">Formularios</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Sobre Nosotros</h1>
          <p className="page-subtitle">
            Más de 5 años de experiencia brindando soluciones legales efectivas y personalizadas
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Nuestra Historia</h2>
              <p>
                Daniel Jaramillo Abogados nació con la visión de brindar servicios legales 
                de alta calidad, accesibles y personalizados. Desde nuestros inicios, nos 
                hemos comprometido con la excelencia profesional y la defensa de los 
                derechos de nuestros clientes.
              </p>
              <p>
                Con presencia nacional e internacional en Ecuador, España y Estados Unidos, 
                hemos construido una reputación sólida basada en la confianza, la ética 
                profesional y los resultados exitosos.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <h3>5+</h3>
                <p>Años de Experiencia</p>
              </div>
              <div className="stat-item">
                <h3>1000+</h3>
                <p>Casos Exitosos</p>
              </div>
              <div className="stat-item">
                <h3>3</h3>
                <p>Países de Presencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Nuestro Equipo Profesional</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">👨‍💼</div>
              <h3>Daniel Jaramillo</h3>
              <h4>Abogado Principal</h4>
              <p>
                Con más de cinco años de experiencia. MEDIADOR CALIFICADO POR EL CONSEJO 
                DE LA JUDICATURA con una sólida formación y experiencia en el ejercicio 
                del derecho, con especialización en materia Penal, civil y familiar.
              </p>
              <div className="team-details">
                <p><strong>Especialidades:</strong></p>
                <ul>
                  <li>Derecho Penal</li>
                  <li>Derecho Civil</li>
                  <li>Derecho Familiar</li>
                  <li>Mediación</li>
                </ul>
              </div>
              <a href="mailto:causas@daniel-jaramillo-abogados.com" className="team-email">
                📧 Contactar
              </a>
            </div>

            <div className="team-card">
              <div className="team-avatar">👩‍💼</div>
              <h3>Diana Estefany García Ibarra</h3>
              <h4>Abogada</h4>
              <p>
                26 años de edad, egresada en Derecho de la Universidad Estatal de Milagro 
                y con 2 años de experiencia en el ámbito legal.
              </p>
              <div className="team-details">
                <p><strong>Especialidades:</strong></p>
                <ul>
                  <li>Derecho Civil</li>
                  <li>Derecho Comercial</li>
                  <li>Derecho Laboral</li>
                </ul>
              </div>
              <a href="mailto:causas@daniel-jaramillo-abogados.com" className="team-email">
                📧 Contactar
              </a>
            </div>

            <div className="team-card">
              <div className="team-avatar">👩‍💼</div>
              <h3>Yessenia Tatiana Jimenez Acaro</h3>
              <h4>Abogada</h4>
              <p>
                MAGISTER EN DERECHO PROCESAL CIVIL con una sólida formación y experiencia 
                en el ejercicio del derecho. Brinda asesoría legal integral con ética, 
                compromiso y enfoque personalizado.
              </p>
              <div className="team-details">
                <p><strong>Especialidades:</strong></p>
                <ul>
                  <li>Derecho Procesal Civil</li>
                  <li>Litigios</li>
                  <li>Derecho de Familia</li>
                  <li>Derecho Sucesorio</li>
                </ul>
              </div>
              <a href="mailto:causas@daniel-jaramillo-abogados.com" className="team-email">
                📧 Contactar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">⚖️</div>
              <h3>Excelencia Profesional</h3>
              <p>
                Mantenemos los más altos estándares de calidad en todos nuestros servicios 
                legales, asegurando la mejor representación para nuestros clientes.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Confianza</h3>
              <p>
                Construimos relaciones duraderas basadas en la transparencia, honestidad 
                y compromiso con el éxito de nuestros clientes.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Resultados</h3>
              <p>
                Nos enfocamos en obtener resultados efectivos y satisfactorios para 
                nuestros clientes, utilizando estrategias legales innovadoras.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Presencia Internacional</h3>
              <p>
                Ofrecemos servicios legales en Ecuador, España y Estados Unidos, 
                brindando soluciones integrales para casos internacionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Necesitas Asesoría Legal?</h2>
            <p>
              Nuestro equipo está listo para ayudarte con cualquier consulta legal. 
              Contáctanos para una consulta gratuita.
            </p>
            <div className="cta-buttons">
              <a href="/contacto" className="cta-button primary">Contactar Ahora</a>
              <a href="/consultas" className="cta-button secondary">Consulta Gratuita</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nosotros; 