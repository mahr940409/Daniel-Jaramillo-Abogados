import React, { useState } from 'react';
import './Pages.css';

function Consultas() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
    preferencia: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      alert('¡Gracias por tu consulta! Nos pondremos en contacto contigo pronto.');
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        servicio: '',
        mensaje: '',
        preferencia: 'email'
      });
    }, 2000);
  };

  const servicios = [
    "Litigios y Resolución de Conflictos",
    "Arbitraje y Mediación",
    "Derecho Penal y Económico",
    "Inmobiliario y Bienes Raíces",
    "Migratorio y Visas",
    "Derecho Civil y Comercial",
    "Divorcios Express",
    "Otro"
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
            <li><a href="/consultas" className="active">Consultas</a></li>
            <li><a href="/formularios">Formularios</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Consulta Legal Gratuita</h1>
          <p className="page-subtitle">
            Nuestros abogados expertos están listos para ayudarte. Agenda tu consulta gratuita hoy mismo.
          </p>
        </div>
      </section>

      {/* Consultation Options */}
      <section className="consultation-options">
        <div className="container">
          <h2 className="section-title">Opciones de Consulta</h2>
          <div className="options-grid">
            <div className="option-card">
              <div className="option-icon">📞</div>
              <h3>Consulta Telefónica</h3>
              <p>
                Habla directamente con nuestros abogados por teléfono. 
                Consulta gratuita de 15 minutos.
              </p>
              <div className="option-details">
                <p><strong>Horarios:</strong> Lunes a Viernes 9:00 AM - 6:00 PM</p>
                <p><strong>Teléfonos:</strong> 0961540256, 0979763153</p>
              </div>
            </div>
            <div className="option-card">
              <div className="option-icon">📧</div>
              <h3>Consulta por Email</h3>
              <p>
                Envía tu consulta por correo electrónico y recibe una 
                respuesta detallada en 24 horas.
              </p>
              <div className="option-details">
                <p><strong>Email:</strong> causas@daniel-jaramillo-abogados.com</p>
                <p><strong>Respuesta:</strong> En 24 horas hábiles</p>
              </div>
            </div>
            <div className="option-card">
              <div className="option-icon">💻</div>
              <h3>Consulta Virtual</h3>
              <p>
                Videollamada con nuestros abogados desde la comodidad 
                de tu hogar u oficina.
              </p>
              <div className="option-details">
                <p><strong>Plataformas:</strong> Zoom, Google Meet, WhatsApp</p>
                <p><strong>Duración:</strong> 30 minutos</p>
              </div>
            </div>
            <div className="option-card">
              <div className="option-icon">🏢</div>
              <h3>Consulta Presencial</h3>
              <p>
                Visita nuestras oficinas para una consulta personalizada 
                con nuestros abogados.
              </p>
              <div className="option-details">
                <p><strong>Ubicación:</strong> Oficinas principales</p>
                <p><strong>Cita previa:</strong> Requerida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2>Solicita tu Consulta Gratuita</h2>
              <p>
                Completa el siguiente formulario y nos pondremos en contacto contigo 
                para programar tu consulta legal gratuita.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="consultation-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre Completo *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Tu número de teléfono"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="servicio">Área de Servicio *</label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona un servicio</option>
                    {servicios.map((servicio, index) => (
                      <option key={index} value={servicio}>
                        {servicio}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Describe tu Consulta *</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Describe brevemente tu situación legal y qué tipo de ayuda necesitas..."
                ></textarea>
              </div>

              <div className="form-group">
                <label>Preferencia de Contacto</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="preferencia"
                      value="email"
                      checked={formData.preferencia === 'email'}
                      onChange={handleChange}
                    />
                    <span>Correo Electrónico</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="preferencia"
                      value="telefono"
                      checked={formData.preferencia === 'telefono'}
                      onChange={handleChange}
                    />
                    <span>Teléfono</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="preferencia"
                      value="whatsapp"
                      checked={formData.preferencia === 'whatsapp'}
                      onChange={handleChange}
                    />
                    <span>WhatsApp</span>
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Consulta Gratuita'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>¿La consulta inicial es realmente gratuita?</h3>
              <p>
                Sí, ofrecemos una consulta inicial gratuita de 15 minutos por teléfono 
                o 30 minutos por videollamada para evaluar tu caso.
              </p>
            </div>
            <div className="faq-item">
              <h3>¿En qué horarios están disponibles?</h3>
              <p>
                Nuestro horario de atención es de lunes a viernes de 9:00 AM a 6:00 PM. 
                También atendemos consultas por email las 24 horas.
              </p>
            </div>
            <div className="faq-item">
              <h3>¿Qué información debo preparar para la consulta?</h3>
              <p>
                Es útil tener a mano documentos relevantes, fechas importantes y una 
                descripción clara de tu situación legal.
              </p>
            </div>
            <div className="faq-item">
              <h3>¿Atienden casos en todo Ecuador?</h3>
              <p>
                Sí, tenemos presencia nacional e internacional. Atendemos casos en 
                Ecuador, España y Estados Unidos.
              </p>
            </div>
            <div className="faq-item">
              <h3>¿Cuánto tiempo toma recibir una respuesta?</h3>
              <p>
                Para consultas por email, respondemos en 24 horas hábiles. Para 
                consultas telefónicas, te contactamos el mismo día.
              </p>
            </div>
            <div className="faq-item">
              <h3>¿Ofrecen servicios de emergencia?</h3>
              <p>
                Sí, para casos urgentes como detenciones o situaciones críticas, 
                contamos con un servicio de emergencia 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-icon">📞</div>
              <h3>Teléfonos</h3>
              <p>0961540256</p>
              <p>0979763153</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>causas@daniel-jaramillo-abogados.com</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">🕒</div>
              <h3>Horarios</h3>
              <p>Lunes a Viernes</p>
              <p>9:00 AM - 6:00 PM</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">🌍</div>
              <h3>Presencia</h3>
              <p>🇪🇨 Ecuador</p>
              <p>🇪🇸 España</p>
              <p>🇺🇸 Estados Unidos</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Consultas; 