import React from 'react';
import './Pages.css';

function Formularios() {
  const formularios = [
    {
      id: 1,
      titulo: "Formulario de Divorcio Express",
      descripcion: "Formulario para solicitar divorcio de mutuo acuerdo en 24 horas",
      categoria: "Derecho Familiar",
      formato: "PDF",
      tamaño: "245 KB",
      descargas: 156,
      icono: "💔"
    },
    {
      id: 2,
      titulo: "Solicitud de Pensión Alimenticia",
      descripcion: "Formulario para solicitar o modificar pensión alimenticia",
      categoria: "Derecho Familiar",
      formato: "PDF",
      tamaño: "189 KB",
      descargas: 89,
      icono: "💰"
    },
    {
      id: 3,
      titulo: "Demanda de Desalojo",
      descripcion: "Formulario para iniciar proceso de desalojo de inquilinos",
      categoria: "Inmobiliario",
      formato: "PDF",
      tamaño: "312 KB",
      descargas: 67,
      icono: "🏠"
    },
    {
      id: 4,
      titulo: "Contrato de Arrendamiento",
      descripcion: "Modelo de contrato de arrendamiento residencial",
      categoria: "Inmobiliario",
      formato: "DOC",
      tamaño: "156 KB",
      descargas: 234,
      icono: "📄"
    },
    {
      id: 5,
      titulo: "Solicitud de Visa de Trabajo",
      descripcion: "Formulario para solicitar visa de trabajo en Estados Unidos",
      categoria: "Migratorio",
      formato: "PDF",
      tamaño: "445 KB",
      descargas: 123,
      icono: "🌍"
    },
    {
      id: 6,
      titulo: "Testamento Público",
      descripcion: "Modelo de testamento público abierto",
      categoria: "Derecho Civil",
      formato: "DOC",
      tamaño: "278 KB",
      descargas: 45,
      icono: "📜"
    },
    {
      id: 7,
      titulo: "Demanda Laboral",
      descripcion: "Formulario para presentar demanda por despido intempestivo",
      categoria: "Derecho Laboral",
      formato: "PDF",
      tamaño: "334 KB",
      descargas: 78,
      icono: "⚖️"
    },
    {
      id: 8,
      titulo: "Solicitud de Mediación",
      descripcion: "Formulario para solicitar proceso de mediación",
      categoria: "Mediación",
      formato: "PDF",
      tamaño: "198 KB",
      descargas: 56,
      icono: "🤝"
    }
  ];

  const categorias = [
    "Todos",
    "Derecho Familiar",
    "Inmobiliario",
    "Migratorio",
    "Derecho Civil",
    "Derecho Laboral",
    "Mediación"
  ];

  const recursos = [
    {
      titulo: "Guía de Divorcio Express",
      descripcion: "Manual completo con todos los pasos para un divorcio rápido",
      tipo: "Guía",
      icono: "📖"
    },
    {
      titulo: "Checklist de Documentos Migratorios",
      descripcion: "Lista de verificación de documentos para procesos migratorios",
      tipo: "Checklist",
      icono: "✅"
    },
    {
      titulo: "Calculadora de Pensión Alimenticia",
      descripcion: "Herramienta para calcular monto de pensión alimenticia",
      tipo: "Calculadora",
      icono: "🧮"
    },
    {
      titulo: "Glosario Legal",
      descripcion: "Diccionario de términos legales comunes",
      tipo: "Glosario",
      icono: "📚"
    }
  ];

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
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/consultas">Consultas</a></li>
            <li><a href="/formularios" className="active">Formularios</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Formularios Legales</h1>
          <p className="page-subtitle">
            Descarga formularios legales gratuitos y recursos útiles para tus trámites
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-filter">
            {categorias.map((categoria, index) => (
              <button 
                key={index} 
                className={`category-btn ${index === 0 ? 'active' : ''}`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Forms Grid */}
      <section className="forms-section">
        <div className="container">
          <h2 className="section-title">Formularios Disponibles</h2>
          <div className="forms-grid">
            {formularios.map((formulario) => (
              <div key={formulario.id} className="form-card">
                <div className="form-header">
                  <div className="form-icon">{formulario.icono}</div>
                  <div className="form-meta">
                    <span className="form-category">{formulario.categoria}</span>
                    <span className="form-format">{formulario.formato}</span>
                  </div>
                </div>
                <div className="form-content">
                  <h3>{formulario.titulo}</h3>
                  <p>{formulario.descripcion}</p>
                  <div className="form-details">
                    <span className="form-size">{formulario.tamaño}</span>
                    <span className="form-downloads">{formulario.descargas} descargas</span>
                  </div>
                </div>
                <div className="form-actions">
                  <button className="download-btn">
                    📥 Descargar
                  </button>
                  <button className="preview-btn">
                    👁️ Vista Previa
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section">
        <div className="container">
          <h2 className="section-title">Recursos Útiles</h2>
          <div className="resources-grid">
            {recursos.map((recurso, index) => (
              <div key={index} className="resource-card">
                <div className="resource-icon">{recurso.icono}</div>
                <div className="resource-content">
                  <h3>{recurso.titulo}</h3>
                  <p>{recurso.descripcion}</p>
                  <span className="resource-type">{recurso.tipo}</span>
                </div>
                <button className="resource-btn">
                  Acceder
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="instructions-section">
        <div className="container">
          <h2 className="section-title">Cómo Usar los Formularios</h2>
          <div className="instructions-grid">
            <div className="instruction-step">
              <div className="step-number">1</div>
              <h3>Descarga el Formulario</h3>
              <p>
                Selecciona el formulario que necesitas y descárgalo en formato PDF o DOC.
              </p>
            </div>
            <div className="instruction-step">
              <div className="step-number">2</div>
              <h3>Completa la Información</h3>
              <p>
                Llena todos los campos requeridos con tu información personal y del caso.
              </p>
            </div>
            <div className="instruction-step">
              <div className="step-number">3</div>
              <h3>Revisa y Verifica</h3>
              <p>
                Asegúrate de que toda la información sea correcta y esté completa.
              </p>
            </div>
            <div className="instruction-step">
              <div className="step-number">4</div>
              <h3>Presenta el Documento</h3>
              <p>
                Lleva el formulario completado a la institución correspondiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="notes-section">
        <div className="container">
          <div className="notes-content">
            <h2>Notas Importantes</h2>
            <div className="notes-grid">
              <div className="note-item">
                <div className="note-icon">⚠️</div>
                <h3>Información General</h3>
                <p>
                  Estos formularios son modelos generales. Te recomendamos consultar 
                  con un abogado para casos específicos.
                </p>
              </div>
              <div className="note-item">
                <div className="note-icon">📋</div>
                <h3>Documentos Requeridos</h3>
                <p>
                  Cada formulario puede requerir documentos adicionales. 
                  Verifica los requisitos específicos.
                </p>
              </div>
              <div className="note-item">
                <div className="note-icon">⚖️</div>
                <h3>Asesoría Legal</h3>
                <p>
                  Para casos complejos, es recomendable buscar asesoría legal 
                  profesional especializada.
                </p>
              </div>
              <div className="note-item">
                <div className="note-icon">🔄</div>
                <h3>Actualizaciones</h3>
                <p>
                  Los formularios se actualizan regularmente según cambios en la legislación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Necesitas Ayuda con un Formulario?</h2>
            <p>
              Nuestros abogados están disponibles para ayudarte a completar 
              cualquier formulario o resolver dudas sobre trámites legales.
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

export default Formularios; 