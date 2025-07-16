import React from 'react';
import './Pages.css';

function Servicios() {
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
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/servicios" className="active">Servicios</a></li>
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
          <h1 className="page-title">Nuestros Servicios Legales</h1>
          <p className="page-subtitle">
            Soluciones legales integrales y especializadas para todas tus necesidades
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="overview-content">
            <h2>Áreas de Práctica</h2>
            <p>
              Ofrecemos una amplia gama de servicios legales con especialización en 
              múltiples áreas del derecho. Nuestro equipo de abogados expertos está 
              comprometido con brindar soluciones efectivas y personalizadas.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="main-services">
        <div className="container">
          <div className="services-grid">
            <div className="service-card detailed">
              <div className="service-icon">⚖️</div>
              <h3>LITIGIOS Y RESOLUCIÓN DE CONFLICTOS</h3>
              <p>
                Especialistas en litigio estratégico y resolución efectiva de conflictos legales.
              </p>
              <div className="service-details">
                <h4>Incluye:</h4>
                <ul>
                  <li>Litigio civil y comercial</li>
                  <li>Resolución de disputas</li>
                  <li>Representación en juicios</li>
                  <li>Negociación de acuerdos</li>
                  <li>Asesoría en conflictos empresariales</li>
                </ul>
              </div>
              <a href="/consultas" className="service-cta">Consultar</a>
            </div>

            <div className="service-card detailed">
              <div className="service-icon">🤝</div>
              <h3>ARBITRAJE & MEDIACIÓN</h3>
              <p>
                Mediador calificado por el Consejo de la Judicatura para resolver disputas.
              </p>
              <div className="service-details">
                <h4>Incluye:</h4>
                <ul>
                  <li>Mediación familiar</li>
                  <li>Mediación laboral</li>
                  <li>Arbitraje comercial</li>
                  <li>Resolución alternativa de conflictos</li>
                  <li>Facilitación de acuerdos</li>
                </ul>
              </div>
              <a href="/consultas" className="service-cta">Consultar</a>
            </div>

            <div className="service-card detailed">
              <div className="service-icon">🔒</div>
              <h3>DERECHO PENAL & ECONÓMICO</h3>
              <p>
                Expertos en temas penales: sicariato, tráfico ilícito, estafas, armas, delitos sexuales.
              </p>
              <div className="service-details">
                <h4>Incluye:</h4>
                <ul>
                  <li>Defensa penal</li>
                  <li>Delitos económicos</li>
                  <li>Delitos contra la propiedad</li>
                  <li>Delitos sexuales</li>
                  <li>Tráfico ilícito de sustancias</li>
                  <li>Portación de armas</li>
                </ul>
              </div>
              <a href="/consultas" className="service-cta">Consultar</a>
            </div>

            <div className="service-card detailed">
              <div className="service-icon">🏠</div>
              <h3>INMOBILIARIO & BIENES RAÍCES</h3>
              <p>
                Asesoría legal especializada en transacciones inmobiliarias.
              </p>
              <div className="service-details">
                <h4>Incluye:</h4>
                <ul>
                  <li>Compraventa de propiedades</li>
                  <li>Arrendamientos</li>
                  <li>Regulación de condominios</li>
                  <li>Desalojos</li>
                  <li>Regularización de títulos</li>
                  <li>Proyectos inmobiliarios</li>
                </ul>
              </div>
              <a href="/consultas" className="service-cta">Consultar</a>
            </div>

            <div className="service-card detailed">
              <div className="service-icon">🌍</div>
              <h3>MIGRATORIO & VISAS</h3>
              <p>
                Servicios de inmigración y gestión de visas para Ecuador, España y Estados Unidos.
              </p>
              <div className="service-details">
                <h4>Incluye:</h4>
                <ul>
                  <li>Visas de trabajo</li>
                  <li>Visas de estudio</li>
                  <li>Residencia permanente</li>
                  <li>Ciudadanía</li>
                  <li>Reunificación familiar</li>
                  <li>Asesoría migratoria</li>
                </ul>
              </div>
              <a href="/consultas" className="service-cta">Consultar</a>
            </div>

            <div className="service-card detailed">
              <div className="service-icon">📋</div>
              <h3>DERECHO CIVIL & COMERCIAL</h3>
              <p>
                Herencias, divorcios en 24h, alimentos, impugnación de paternidad, cobros.
              </p>
              <div className="service-details">
                <h4>Incluye:</h4>
                <ul>
                  <li>Divorcios express</li>
                  <li>Sucesiones y herencias</li>
                  <li>Pensión alimenticia</li>
                  <li>Impugnación de paternidad</li>
                  <li>Cobros judiciales</li>
                  <li>Contratos comerciales</li>
                </ul>
              </div>
              <a href="/consultas" className="service-cta">Consultar</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="specialized-services">
        <div className="container">
          <h2 className="section-title">Servicios Especializados</h2>
          <div className="specialized-grid">
            <div className="specialized-card">
              <div className="specialized-icon">⚡</div>
              <h3>Divorcios en 24 Horas</h3>
              <p>
                Proceso rápido y eficiente para divorcios de mutuo acuerdo, 
                completando todo el trámite en un solo día.
              </p>
            </div>
            <div className="specialized-card">
              <div className="specialized-icon">📊</div>
              <h3>Consultoría Empresarial</h3>
              <p>
                Asesoría legal integral para empresas, incluyendo constitución, 
                contratos y cumplimiento normativo.
              </p>
            </div>
            <div className="specialized-card">
              <div className="specialized-icon">🛡️</div>
              <h3>Protección de Datos</h3>
              <p>
                Cumplimiento con leyes de protección de datos personales y 
                asesoría en privacidad digital.
              </p>
            </div>
            <div className="specialized-card">
              <div className="specialized-icon">📱</div>
              <h3>Consultas Online</h3>
              <p>
                Servicio de consultas legales a través de videollamadas y 
                plataformas digitales para tu comodidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Nuestro Proceso de Trabajo</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consulta Inicial</h3>
              <p>
                Evaluamos tu caso en una consulta gratuita para entender 
                tus necesidades y objetivos.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Análisis Legal</h3>
              <p>
                Realizamos un análisis exhaustivo de tu situación legal 
                y desarrollamos la mejor estrategia.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Ejecución</h3>
              <p>
                Implementamos la estrategia legal acordada, manteniéndote 
                informado en cada paso del proceso.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Seguimiento</h3>
              <p>
                Brindamos seguimiento continuo hasta la resolución 
                exitosa de tu caso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Necesitas Asesoría Legal Especializada?</h2>
            <p>
              Nuestro equipo de abogados expertos está listo para ayudarte. 
              Agenda tu consulta gratuita hoy mismo.
            </p>
            <div className="cta-buttons">
              <a href="/consultas" className="cta-button primary">Consulta Gratuita</a>
              <a href="/contacto" className="cta-button secondary">Contactar</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Servicios; 