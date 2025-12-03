import { useEffect, useState } from 'react';

export default function Servicos() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Serviços conforme especificação
  const services = [
    {
      id: 1,
      title: "Templo de Afrodite",
      price: "R$ 45,00",
      description: "Compreenda tudo que se passa na mente daquela pessoa sobre você",
      features: [
        "Pensamentos",
        "Reais intenções",
        "Sentimentos",
        "Desejos",
        "Previsão futura para a relação",
        "+Aconselhamentos"
      ],
      icon: "ri-heart-3-fill",
      gradient: "from-pink-600 to-rose-500",
      category: "amor"
    },
    {
      id: 2,
      title: "Conhecendo aquela pessoa",
      price: "R$ 40,00",
      description: "Método ideal para quem está conhecendo alguém",
      features: [
        "Como ele(a) está emocionalmente? (de um modo geral)",
        "Como ele(a) está emocionalmente sobre mim?",
        "Há algum bloqueio entre nós?",
        "Reais intenções?",
        "Há chance de algo sério?"
      ],
      icon: "ri-user-heart-fill",
      gradient: "from-purple-600 to-indigo-500",
      category: "relacionamento"
    },
    {
      id: 3,
      title: "Amor Passado",
      price: "R$ 45,00",
      description: "Saiba tudo sobre seu ex amor",
      features: [
        "Ainda há sentimentos?",
        "O que está pensando sobre mim?",
        "O que pretende fazer sobre nós?",
        "Pensa em uma reconciliação?",
        "O que o futuro reserva para essa relação?"
      ],
      icon: "ri-heart-2-fill",
      gradient: "from-red-600 to-pink-500",
      category: "amor"
    },
    {
      id: 4,
      title: "A verdade sobre a mesa",
      price: "R$ 40,00",
      description: "Descubra sobre a fidelidade dele(a)",
      features: [
        "Qual a energia dessa relação?",
        "Qual a energia dele(a) sobre mim?",
        "Ele(a) se envolve com outra pessoa?",
        "Qual tipo de envolvimento? (Físico, conversas ou interesse)"
      ],
      icon: "ri-eye-fill",
      gradient: "from-orange-600 to-amber-500",
      category: "relacionamento"
    },
    {
      id: 5,
      title: "Perguntas Avulsas",
      price: "Respostas Explicativas",
      description: "Perguntas personalizadas com respostas detalhadas",
      features: [
        "1 pergunta: R$17",
        "2 perguntas: R$30",
        "3 perguntas: R$40",
        "4 perguntas: R$48",
        "5 perguntas: R$55"
      ],
      icon: "ri-question-answer-fill",
      gradient: "from-emerald-600 to-teal-500",
      category: "consulta"
    },
    {
      id: 6,
      title: "Análise Geral",
      price: "R$ 65,00",
      description: "Análise completa do campo profissional, financeiro, amoroso e espiritual",
      features: [
        "Análiso as atuais energias predominantes nessas 4 áreas, vemos quais são os alertas, direcionamentos e uma previsão de até 3 meses para cada uma delas",
        "Você pode incluir 4 perguntas objetivas na sua tiragem."
      ],
      icon: "ri-compass-3-fill",
      gradient: "from-violet-600 to-purple-500",
      category: "consulta"
    }
  ];

  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5535998155428&text=Olá! Gostaria de agendar uma consulta de tarot.&type=phone_number&app_absent=0";

  const serviceCategories = [
    { name: "Todos", filter: null },
    { name: "Amor", filter: "amor" },
    { name: "Relacionamento", filter: "relacionamento" },
    { name: "Consulta", filter: "consulta" }
  ];

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredServices = activeCategory 
    ? services.filter(service => service.category === activeCategory)
    : services;

  console.log('Total de serviços:', services.length);
  console.log('Serviços filtrados:', filteredServices.length);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          overflow-x: hidden;
          background: #0a0a0a;
        }
        
        .playfair {
          font-family: 'Playfair Display', serif;
        }

        /* Magical Background Elements */
        .magical-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .floating-element {
          position: absolute;
          opacity: 0.4;
          animation: float 25s infinite linear;
          font-size: 1.2rem;
          color: #C9A86A;
          text-shadow: 0 0 10px rgba(201, 168, 106, 0.5);
        }

        .floating-element:nth-child(1) { left: 10%; animation-delay: 0s; }
        .floating-element:nth-child(2) { left: 20%; animation-delay: -3s; }
        .floating-element:nth-child(3) { left: 30%; animation-delay: -6s; }
        .floating-element:nth-child(4) { left: 40%; animation-delay: -9s; }
        .floating-element:nth-child(5) { left: 50%; animation-delay: -12s; }
        .floating-element:nth-child(6) { left: 60%; animation-delay: -15s; }
        .floating-element:nth-child(7) { left: 70%; animation-delay: -18s; }
        .floating-element:nth-child(8) { left: 80%; animation-delay: -21s; }
        .floating-element:nth-child(9) { left: 90%; animation-delay: -24s; }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        /* Starfield Background */
        .starfield {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(2px 2px at 20px 30px, #C9A86A, transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(201, 168, 106, 0.8), transparent),
            radial-gradient(1px 1px at 90px 40px, #D7B98A, transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(215, 185, 138, 0.6), transparent),
            radial-gradient(2px 2px at 160px 30px, #C9A86A, transparent);
          background-repeat: repeat;
          background-size: 200px 100px;
          animation: sparkle 30s linear infinite;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes sparkle {
          from { transform: translateY(0px); }
          to { transform: translateY(-100px); }
        }
        
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 1.5rem 0;
          background: transparent;
        }
        
        .navbar.scrolled {
          background: rgba(26, 11, 46, 0.95);
          backdrop-filter: blur(20px);
          padding: 1rem 0;
          box-shadow: 0 8px 32px rgba(201, 168, 106, 0.2);
          border-bottom: 1px solid rgba(201, 168, 106, 0.1);
        }
        
        .page-header {
          min-height: 60vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a0b2e 25%, #3A205B 50%, #2D1B69 75%, #1a0b2e 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .page-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(201, 168, 106, 0.1), rgba(215, 185, 138, 0.05));
          opacity: 0.4;
          animation: cosmic-drift 40s ease-in-out infinite;
        }
        
        .page-header::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(201, 168, 106, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(215, 185, 138, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(166, 131, 74, 0.1) 0%, transparent 50%);
        }
        
        @keyframes cosmic-drift {
          0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); }
          33% { transform: translateY(-30px) scale(1.03) rotate(2deg); }
          66% { transform: translateY(15px) scale(0.97) rotate(-2deg); }
        }
        
        .section {
          padding: 8rem 0;
          position: relative;
          background: linear-gradient(180deg, #0a0a0a 0%, #1a0b2e 50%, #0a0a0a 100%);
        }
        
        .category-filter {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          padding: 0 2rem;
        }
        
        .category-button {
          background: rgba(26, 11, 46, 0.6);
          border: 2px solid rgba(201, 168, 106, 0.3);
          color: rgba(255, 255, 255, 0.8);
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
        }
        
        .category-button:hover,
        .category-button.active {
          background: linear-gradient(135deg, #C9A86A, #D7B98A);
          color: #1a0b2e;
          border-color: #C9A86A;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(201, 168, 106, 0.4);
        }
        
        .services-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          gap: 3rem;
          padding: 0 2rem;
        }
        
        .service-card-full {
          background: linear-gradient(145deg, rgba(26, 11, 46, 0.9), rgba(58, 32, 91, 0.7));
          backdrop-filter: blur(20px);
          border: 2px solid rgba(201, 168, 106, 0.3);
          border-radius: 30px;
          padding: 0;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        
        .service-card-full:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 80px rgba(201, 168, 106, 0.4);
          border-color: rgba(201, 168, 106, 0.6);
        }
        
        .service-header {
          padding: 3rem;
          background: linear-gradient(135deg, rgba(201, 168, 106, 0.1), rgba(215, 185, 138, 0.05));
          border-bottom: 1px solid rgba(201, 168, 106, 0.2);
        }
        
        .service-header-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }
        
        .service-title-area {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        
        .service-icon-large {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .service-title-large {
          font-size: 2.5rem;
          font-weight: 800;
          color: #C9A86A;
          margin: 0;
        }
        
        .service-price-area {
          text-align: right;
        }
        
        .service-price-large {
          font-size: 3rem;
          font-weight: 900;
          color: #D7B98A;
          text-shadow: 0 0 20px rgba(215, 185, 138, 0.5);
          margin-bottom: 0.5rem;
        }
        
        .service-description-large {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.8;
        }
        
        .service-body {
          padding: 3rem;
        }
        
        .service-features-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #C9A86A;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .service-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        
        .service-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(201, 168, 106, 0.05);
          border-radius: 15px;
          border: 1px solid rgba(201, 168, 106, 0.1);
          transition: all 0.3s ease;
        }
        
        .service-feature-item:hover {
          background: rgba(201, 168, 106, 0.1);
          border-color: rgba(201, 168, 106, 0.3);
          transform: translateX(5px);
        }
        
        .service-feature-icon {
          width: 12px;
          height: 12px;
          background: linear-gradient(135deg, #C9A86A, #D7B98A);
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 6px;
          box-shadow: 0 0 15px rgba(201, 168, 106, 0.6);
        }
        
        .service-feature-text {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }
        
        .service-cta {
          display: flex;
          justify-content: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(201, 168, 106, 0.2);
        }
        
        .service-button-large {
          background: linear-gradient(135deg, #C9A86A, #D7B98A);
          color: #1a0b2e;
          padding: 1.5rem 4rem;
          border: none;
          border-radius: 50px;
          font-weight: 800;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.4s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 10px 30px rgba(201, 168, 106, 0.4);
        }
        
        .service-button-large:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(201, 168, 106, 0.6);
        }
        
        .back-link {
          position: fixed;
          top: 50%;
          left: 30px;
          transform: translateY(-50%);
          background: linear-gradient(135deg, rgba(201, 168, 106, 0.9), rgba(215, 185, 138, 0.8));
          color: #1a0b2e;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          text-decoration: none;
          z-index: 999;
          transition: all 0.4s ease;
          box-shadow: 0 8px 25px rgba(201, 168, 106, 0.4);
          cursor: pointer;
        }
        
        .back-link:hover {
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 12px 35px rgba(201, 168, 106, 0.6);
        }
        
        @media (max-width: 768px) {
          .back-link {
            left: 20px;
            width: 50px;
            height: 50px;
          }
          .service-header-top { 
            flex-direction: column; 
            gap: 2rem; 
          }
          .service-price-area { 
            text-align: center; 
          }
          .service-features-grid { 
            grid-template-columns: 1fr; 
          }
          .service-header { 
            padding: 2rem; 
          }
          .service-body { 
            padding: 2rem; 
          }
          .service-title-large { 
            font-size: 2rem; 
          }
          .service-price-large { 
            font-size: 2.5rem; 
          }
        }
      `}</style>

      <div className="min-h-screen">
        {/* Magical Background Elements */}
        <div className="starfield"></div>
        <div className="magical-bg" style={{transform: `translateY(${scrollY * 0.3}px)`}}>
          <div className="floating-element">🔮</div>
          <div className="floating-element">⭐</div>
          <div className="floating-element">🌙</div>
          <div className="floating-element">✨</div>
          <div className="floating-element">🌟</div>
          <div className="floating-element">🃏</div>
          <div className="floating-element">🔯</div>
          <div className="floating-element">💫</div>
          <div className="floating-element">🌙</div>
        </div>

        {/* Back Link */}
        <span onClick={() => window.location.href = '/'} className="back-link" title="Voltar ao Início">
          <i className="ri-arrow-left-line"></i>
        </span>

        {/* Navbar */}
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <div className="playfair text-3xl font-bold text-white">
                <span onClick={() => window.location.href = '/'} className="hover:text-yellow-300 transition-colors cursor-pointer">
                  Cartas da Lua
                </span>
              </div>
              <div className="hidden md:flex space-x-8">
                <span onClick={() => window.location.href = '/'} className="text-white hover:text-yellow-300 transition-colors cursor-pointer">Início</span>
                <span onClick={() => window.location.href = '/#sobre'} className="text-white hover:text-yellow-300 transition-colors cursor-pointer">Sobre</span>
                <span onClick={() => window.location.href = '/servicos'} className="text-yellow-300 font-semibold cursor-pointer">Serviços</span>
                <span onClick={() => window.location.href = '/#contato'} className="text-white hover:text-yellow-300 transition-colors cursor-pointer">Contato</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Page Header */}
        <section className="page-header">
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white playfair" style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #C9A86A 30%, #D7B98A 70%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(201, 168, 106, 0.3)'
              }}>
                Catálogo de Serviços
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Consultas completas e detalhadas para iluminar seu caminho espiritual
              </p>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Descubra todos os nossos serviços especializados de tarot, limpeza energética 
                e orientação espiritual. Cada consulta é personalizada para suas necessidades únicas.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section">
          <div className="container mx-auto px-6">
            
            {/* Category Filter */}
            <div className="category-filter">
              {serviceCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category.filter)}
                  className={`category-button whitespace-nowrap ${activeCategory === category.filter ? 'active' : ''}`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="services-grid">
              {filteredServices.map((service, index) => (
                <div key={service.id} className="service-card-full">
                  <div className="service-header">
                    <div className="service-header-top">
                      <div className="service-title-area">
                        <div className={`service-icon-large bg-gradient-to-br ${service.gradient}`}>
                          <i className={service.icon}></i>
                        </div>
                        <h3 className="service-title-large playfair">{service.title}</h3>
                      </div>
                      <div className="service-price-area">
                        <div className="service-price-large">{service.price}</div>
                      </div>
                    </div>
                    <p className="service-description-large">{service.description}</p>
                  </div>

                  <div className="service-body">
                    <div className="service-features-title">
                      <i className="ri-star-line"></i>
                      O que está incluído
                    </div>
                    
                    <div className="service-features-grid">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="service-feature-item">
                          <div className="service-feature-icon"></div>
                          <div className="service-feature-text">{feature}</div>
                        </div>
                      ))}
                    </div>

                    <div className="service-cta">
                      <span 
                        onClick={() => window.open(`${whatsappUrl}&text=Olá! Gostaria de agendar uma consulta: ${service.title} - ${service.price}`, '_blank')}
                        className="service-button-large whitespace-nowrap"
                      >
                        <i className="ri-whatsapp-line"></i>
                        Agendar {service.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}