import React, { useState } from 'react';
import './Pages.css';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
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
      alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
    }, 2000);
  };

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
            <li><a href="/formularios">Formularios</a></li>
            <li><a href="/contacto" className="active">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Contáctanos</h1>
          <p className="page-subtitle">
            Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo de abogados expertos.
          </p>
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
              <span className="contact-label">Llamadas y WhatsApp</span>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">📧</div>
              <h3>Correo Electrónico</h3>
              <p>causas@daniel-jaramillo-abogados.com</p>
              <span className="contact-label">Respuesta en 24 horas</span>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">🕒</div>
              <h3>Horarios de Atención</h3>
              <p>Lunes a Viernes</p>
              <p>9:00 AM - 6:00 PM</p>
              <span className="contact-label">Consultas urgentes 24/7</span>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">🌍</div>
              <h3>Presencia Internacional</h3>
              <p>🇪🇨 Ecuador</p>
              <p>🇪🇸 España</p>
              <p>🇺🇸 Estados Unidos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form-container">
              <div className="form-header">
                <h2>Envíanos un Mensaje</h2>
                <p>
                  Completa el formulario y nos pondremos en contacto contigo 
                  lo antes posible.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
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
                    <label htmlFor="asunto">Asunto *</label>
                    <select
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="consulta-legal">Consulta Legal</option>
                      <option value="cita-presencial">Cita Presencial</option>
                      <option value="consulta-virtual">Consulta Virtual</option>
                      <option value="cotizacion">Cotización de Servicios</option>
                      <option value="emergencia">Caso de Emergencia</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Describe tu consulta o solicitud..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            </div>

            <div className="contact-map-container">
              <div className="map-placeholder">
                <div className="map-content">
                  <h3>Ubicación de Oficinas</h3>
                  <p>
                    <strong>Oficina Principal:</strong><br />
                    Ecuador<br />
                    <em>Dirección específica disponible al contactar</em>
                  </p>
                  <div className="map-features">
                    <div className="map-feature">
                      <span className="feature-icon">🚗</span>
                      <span>Estacionamiento disponible</span>
                    </div>
                    <div className="map-feature">
                      <span className="feature-icon">♿</span>
                      <span>Acceso para personas con discapacidad</span>
                    </div>
                    <div className="map-feature">
                      <span className="feature-icon">📱</span>
                      <span>WiFi gratuito</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="social-media-section">
        <div className="container">
          <h2 className="section-title">Síguenos en Redes Sociales</h2>
          <div className="social-grid">
            <a href="https://facebook.com/DanielJaramilloAbogados" className="social-card" target="_blank" rel="noopener noreferrer">
              <div className="social-icon">📘</div>
              <h3>Facebook</h3>
              <p>@DanielJaramilloAbogados</p>
            </a>
            <a href="https://instagram.com/daniel_jaramillo_abogados" className="social-card" target="_blank" rel="noopener noreferrer">
              <div className="social-icon">📷</div>
              <h3>Instagram</h3>
              <p>@daniel_jaramillo_abogados</p>
            </a>
            <a href="https://twitter.com/DJaramilloLegal" className="social-card" target="_blank" rel="noopener noreferrer">
              <div className="social-icon">🐦</div>
              <h3>Twitter</h3>
              <p>@DJaramilloLegal</p>
            </a>
            <a href="https://linkedin.com/company/daniel-jaramillo-abogados" className="social-card" target="_blank" rel="noopener noreferrer">
              <div className="social-icon">💼</div>
              <h3>LinkedIn</h3>
              <p>Daniel Jaramillo Abogados</p>
            </a>
            <a href="https://youtube.com/c/DanielJaramilloLegal" className="social-card" target="_blank" rel="noopener noreferrer">
              <div className="social-icon">📺</div>
              <h3>YouTube</h3>
              <p>Daniel Jaramillo Legal</p>
            </a>
            <a href="https://wa.me/593961540256" className="social-card" target="_blank" rel="noopener noreferrer">
              <div className="social-icon">💬</div>
              <h3>WhatsApp</h3>
              <p>0961540256</p>
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="emergency-section">
        <div className="container">
          <div className="emergency-content">
            <div className="emergency-icon">🚨</div>
            <div className="emergency-text">
              <h2>¿Caso de Emergencia?</h2>
              <p>
                Para casos urgentes como detenciones, situaciones críticas o 
                emergencias legales, contáctanos inmediatamente:
              </p>
              <div className="emergency-contacts">
                <div className="emergency-contact">
                  <strong>Teléfono de Emergencia:</strong> 0961540256
                </div>
                <div className="emergency-contact">
                  <strong>WhatsApp 24/7:</strong> 0979763153
                </div>
                <div className="emergency-contact">
                  <strong>Email Urgente:</strong> emergencias@daniel-jaramillo-abogados.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Preguntas Frecuentes sobre Contacto</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>¿Cuál es el tiempo de respuesta?</h3>
              <p>
                Respondemos consultas por email en 24 horas hábiles. 
                Para llamadas telefónicas, te contactamos el mismo día.
              </p>
            </div>
            <div className="faq-item">
              <h3>¿Atienden casos fuera de Ecuador?</h3>
              <p>
                Sí, tenemos presencia en España y Estados Unidos, 
                y podemos atender casos internacionales.
              </p>
            </div>
            <div className="faq-item">
              <h3>¿Ofrecen consultas virtuales?</h3>
              <p>
                Sí, realizamos consultas por videollamada usando 
                Zoom, Google Meet o WhatsApp.
              </p>
            </div>
            <div className="faq-item">
              <h3>¿Cuál es el costo de la primera consulta?</h3>
              <p>
                La consulta inicial es completamente gratuita, 
                tanto por teléfono como por videollamada.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacto; 