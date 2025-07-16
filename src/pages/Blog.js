import React from 'react';
import './Pages.css';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Guía Completa para Divorcios Express en Ecuador",
      excerpt: "Conoce todo lo que necesitas saber sobre el proceso de divorcio rápido y los requisitos legales necesarios.",
      category: "Derecho Familiar",
      date: "15 de Diciembre, 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Derechos Laborales: Lo que Debes Saber",
      excerpt: "Información esencial sobre tus derechos como trabajador y cómo protegerte legalmente.",
      category: "Derecho Laboral",
      date: "12 de Diciembre, 2024",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Proceso de Inmigración a Estados Unidos",
      excerpt: "Pasos detallados para obtener una visa de trabajo o residencia permanente en Estados Unidos.",
      category: "Migratorio",
      date: "10 de Diciembre, 2024",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Mediación: Una Alternativa Efectiva a los Juicios",
      excerpt: "Descubre cómo la mediación puede resolver conflictos de manera más rápida y económica.",
      category: "Mediación",
      date: "8 de Diciembre, 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Protección de Datos Personales en Ecuador",
      excerpt: "Nuevas regulaciones sobre protección de datos y cómo afectan a empresas y particulares.",
      category: "Derecho Digital",
      date: "5 de Diciembre, 2024",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Sucesiones y Herencias: Aspectos Legales Importantes",
      excerpt: "Todo sobre el proceso de sucesión, testamentos y distribución de herencias en Ecuador.",
      category: "Derecho Civil",
      date: "3 de Diciembre, 2024",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = [
    "Todos",
    "Derecho Familiar",
    "Derecho Laboral",
    "Migratorio",
    "Mediación",
    "Derecho Digital",
    "Derecho Civil",
    "Derecho Penal"
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
            <li><a href="/blog" className="active">Blog</a></li>
            <li><a href="/consultas">Consultas</a></li>
            <li><a href="/formularios">Formularios</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Blog Legal</h1>
          <p className="page-subtitle">
            Información legal actualizada y consejos prácticos de nuestros expertos
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-filter">
            {categories.map((category, index) => (
              <button 
                key={index} 
                className={`category-btn ${index === 0 ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="featured-post">
        <div className="container">
          <div className="featured-content">
            <div className="featured-image">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Artículo Destacado"
              />
            </div>
            <div className="featured-text">
              <div className="post-meta">
                <span className="category">Derecho Familiar</span>
                <span className="date">15 de Diciembre, 2024</span>
                <span className="read-time">5 min de lectura</span>
              </div>
              <h2>Guía Completa para Divorcios Express en Ecuador</h2>
              <p>
                El divorcio express en Ecuador es un proceso legal que permite a las 
                parejas disolver su matrimonio de manera rápida y eficiente cuando 
                existe mutuo acuerdo. En este artículo te explicamos todo lo que 
                necesitas saber sobre este procedimiento.
              </p>
              <a href="/blog/guia-completa-para-divorcios-express-en-ecuador" className="read-more-btn">Leer Artículo Completo</a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts">
        <div className="container">
          <div className="posts-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="category-badge">{post.category}</div>
                </div>
                <div className="blog-content">
                  <div className="post-meta">
                    <span className="date">{post.date}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} className="read-more">Leer más →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Suscríbete a Nuestro Boletín Legal</h2>
            <p>
              Recibe las últimas noticias legales, consejos prácticos y actualizaciones 
              directamente en tu correo electrónico.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="popular-topics">
        <div className="container">
          <h2 className="section-title">Temas Populares</h2>
          <div className="topics-grid">
            <div className="topic-card">
              <div className="topic-icon">💔</div>
              <h3>Divorcios</h3>
              <p>5 artículos</p>
            </div>
            <div className="topic-card">
              <div className="topic-icon">🏠</div>
              <h3>Inmobiliario</h3>
              <p>3 artículos</p>
            </div>
            <div className="topic-card">
              <div className="topic-icon">🌍</div>
              <h3>Migración</h3>
              <p>4 artículos</p>
            </div>
            <div className="topic-card">
              <div className="topic-icon">⚖️</div>
              <h3>Derechos Laborales</h3>
              <p>6 artículos</p>
            </div>
            <div className="topic-card">
              <div className="topic-icon">🤝</div>
              <h3>Mediación</h3>
              <p>2 artículos</p>
            </div>
            <div className="topic-card">
              <div className="topic-icon">🔒</div>
              <h3>Derecho Penal</h3>
              <p>4 artículos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Tienes Preguntas Legales?</h2>
            <p>
              Nuestros abogados expertos están disponibles para responder tus consultas 
              y brindarte la asesoría legal que necesitas.
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

export default Blog; 