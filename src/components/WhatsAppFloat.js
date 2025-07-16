import React, { useState } from 'react';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! Soy el asistente virtual de Daniel Jaramillo Abogados. ¿En qué puedo ayudarte hoy?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simular respuesta de IA
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hola') || message.includes('buenos días') || message.includes('buenas')) {
      return "¡Hola! Gracias por contactarnos. ¿En qué área legal necesitas asesoría?";
    }
    
    if (message.includes('consulta') || message.includes('asesoría') || message.includes('ayuda')) {
      return "Te puedo ayudar con consultas en derecho civil, penal, laboral, comercial y más. ¿Qué tipo de asunto legal tienes?";
    }
    
    if (message.includes('cita') || message.includes('agendar') || message.includes('costo')) {
      return "Para agendar una cita o consultar costos, puedes llamarnos al +57 300 123 4567 o enviar un email a info@danieljaramillo.com";
    }
    
    if (message.includes('derecho civil') || message.includes('civil')) {
      return "En derecho civil manejamos contratos, responsabilidad civil, derecho de propiedad, sucesiones y más. ¿Qué caso específico tienes?";
    }
    
    if (message.includes('derecho penal') || message.includes('penal')) {
      return "En derecho penal ofrecemos defensa penal, asesoría en procesos judiciales y representación legal. ¿Necesitas defensa en algún proceso?";
    }
    
    if (message.includes('derecho laboral') || message.includes('laboral')) {
      return "En derecho laboral te ayudamos con despidos, liquidaciones, acoso laboral, accidentes de trabajo y más. ¿Cuál es tu situación?";
    }
    
    if (message.includes('gracias') || message.includes('muchas gracias')) {
      return "¡De nada! Estamos aquí para ayudarte. Si necesitas más información, no dudes en preguntar.";
    }
    
    if (message.includes('horario') || message.includes('atención')) {
      return "Nuestro horario de atención es de lunes a viernes de 8:00 AM a 6:00 PM. También atendemos emergencias las 24 horas.";
    }
    
    if (message.includes('ubicación') || message.includes('dirección') || message.includes('oficina')) {
      return "Nuestra oficina principal está ubicada en Calle 123 #45-67, Bogotá. También tenemos presencia en Medellín y Cali.";
    }
    
    return "Entiendo tu consulta. Para brindarte la mejor asesoría, te recomiendo agendar una cita con nuestros abogados especialistas. ¿Te gustaría que te ayude a programar una consulta?";
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="whatsapp-float">
      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">
                <span className="whatsapp-icon">⚖️</span>
              </div>
              <div>
                <h4>Daniel Jaramillo Abogados</h4>
                <p>Asistente Virtual</p>
              </div>
            </div>
            <button className="close-btn" onClick={handleToggle}>
              ✕
            </button>
          </div>
          
          <div className="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-content">
                  {message.text}
                </div>
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message bot">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>
          
          <div className="chat-input">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSendMessage} disabled={!inputMessage.trim()}>
              <span>📤</span>
            </button>
          </div>
        </div>
      )}
      
      {/* Floating Button */}
      <button className="whatsapp-button" onClick={handleToggle}>
        <span className="whatsapp-icon">🤖</span>
        <span className="notification-badge">1</span>
      </button>
    </div>
  );
};

export default WhatsAppFloat; 