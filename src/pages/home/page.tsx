import { useState } from 'react';

export default function Home() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const services = [
    {
      id: 'consulta-tarot',
      title: 'Consulta de Tarot',
      description: 'Descubra os segredos do seu futuro através das cartas sagradas',
      price: 'R$ 45,00',
      duration: '30 min',
      features: ['Leitura completa das cartas', 'Interpretação personalizada', 'Orientações para o futuro']
    },
    {
      id: 'trabalho-espiritual',
      title: 'Trabalho Espiritual',
      description: 'Rituais e trabalhos para proteção, amor e prosperidade',
      price: 'R$ 120,00',
      duration: '7 dias',
      features: ['Ritual personalizado', 'Materiais inclusos', 'Acompanhamento durante o processo']
    },
    {
      id: 'limpeza-energetica',
      title: 'Limpeza Energética',
      description: 'Remova energias negativas e bloqueios espirituais',
      price: 'R$ 80,00',
      duration: '45 min',
      features: ['Diagnóstico energético', 'Limpeza completa', 'Proteção espiritual']
    },
    {
      id: 'mapa-astral',
      title: 'Mapa Astral Completo',
      description: 'Análise detalhada da sua personalidade e destino',
      price: 'R$ 95,00',
      duration: '60 min',
      features: ['Análise dos planetas', 'Previsões anuais', 'Relatório detalhado']
    }
  ];

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://readdy.ai/api/form/d49p2j6bibdhvlkt2th0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (response.ok) {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://readdy.ai/api/form/d49p2j6bibdhvlkt2thg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (response.ok) {
        alert('Agendamento solicitado com sucesso! Entraremos em contato para confirmar.');
        (e.target as HTMLFormElement).reset();
        setShowBookingForm(false);
      }
    } catch (error) {
      alert('Erro ao agendar consulta. Tente novamente.');
    }
  };

  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5535998155428&text=Olá! Gostaria de agendar uma consulta de tarot.&type=phone_number&app_absent=0";
  const instagramUrl = "https://www.instagram.com/cartasdalua7/";

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-900 to-black border-b border-yellow-600">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <i className="ri-magic-line text-3xl text-yellow-400"></i>
              </div>
              <h1 className="text-2xl font-bold text-yellow-400" style={{fontFamily: '"Pacifico", serif'}}>
                Templo Místico
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#servicos" className="text-white hover:text-yellow-400 transition-colors cursor-pointer">Serviços</a>
              <a href="#sobre" className="text-white hover:text-yellow-400 transition-colors cursor-pointer">Sobre</a>
              <a href="#contato" className="text-white hover:text-yellow-400 transition-colors cursor-pointer">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-950 to-black"
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-yellow-400">
              Desvende os Mistérios
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white">
              Consultas de Tarot e Trabalhos Espirituais Online
            </p>
            <p className="text-lg mb-12 text-gray-200 max-w-2xl mx-auto">
              Descubra seu destino através das cartas sagradas. Oferecemos consultas personalizadas, 
              trabalhos espirituais e orientação para transformar sua vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('servicos')?.scrollIntoView({behavior: 'smooth'})}
                className="bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                Ver Serviços
              </button>
              <button 
                onClick={() => setShowBookingForm(true)}
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-b from-red-900 to-black border border-yellow-600 rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-yellow-400">Agendar Consulta</h3>
              <button 
                onClick={() => setShowBookingForm(false)}
                className="text-white hover:text-yellow-400 cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            <form onSubmit={handleBookingSubmit} data-readdy-form className="space-y-4">
              <div>
                <label className="block text-white mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  name="nome"
                  required
                  className="w-full bg-black/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-white mb-2">WhatsApp</label>
                <input 
                  type="tel" 
                  name="whatsapp"
                  required
                  className="w-full bg-black/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-white mb-2">E-mail</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-black/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Tipo de Consulta</label>
                <select 
                  name="servico"
                  required
                  className="w-full bg-black/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none text-sm pr-8"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Consulta de Tarot - R$ 45,00">Consulta de Tarot - R$ 45,00</option>
                  <option value="Trabalho Espiritual - R$ 120,00">Trabalho Espiritual - R$ 120,00</option>
                  <option value="Limpeza Energética - R$ 80,00">Limpeza Energética - R$ 80,00</option>
                  <option value="Mapa Astral - R$ 95,00">Mapa Astral - R$ 95,00</option>
                </select>
              </div>
              <div>
                <label className="block text-white mb-2">Data Preferida</label>
                <input 
                  type="date" 
                  name="data"
                  required
                  className="w-full bg-black/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Horário Preferido</label>
                <select 
                  name="horario"
                  required
                  className="w-full bg-black/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none text-sm pr-8"
                >
                  <option value="">Selecione um horário</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                </select>
              </div>
              <div>
                <label className="block text-white mb-2">Observações (opcional)</label>
                <textarea 
                  name="observacoes"
                  maxLength={500}
                  rows={3}
                  className="w-full bg-black/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none resize-none text-sm"
                  placeholder="Conte-nos sobre sua situação ou dúvidas específicas..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-red-700 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                Solicitar Agendamento
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gradient-to-b from-black to-red-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-yellow-400 mb-4">Nossos Serviços</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Oferecemos uma variedade de serviços espirituais para guiar você em sua jornada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-gradient-to-b from-red-900/50 to-black/80 border border-yellow-600/30 rounded-lg p-6 hover:border-yellow-400 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-yellow-400/20 rounded-full">
                    <i className="ri-magic-line text-2xl text-yellow-400"></i>
                  </div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">{service.title}</h4>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                </div>

                <div className="text-center border-t border-yellow-600/30 pt-4">
                  <div className="text-2xl font-bold text-white mb-1">{service.price}</div>
                  <div className="text-sm text-gray-400">{service.duration}</div>
                </div>

                {selectedService === service.id && (
                  <div className="mt-4 pt-4 border-t border-yellow-600/30">
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <i className="ri-check-line text-yellow-400 mr-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowBookingForm(true);
                      }}
                      className="w-full mt-4 bg-red-700 hover:bg-red-600 text-white py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Agendar Agora
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-yellow-400 mb-6">Sobre o Templo Místico</h3>
              <p className="text-lg text-gray-300 mb-6">
                Com mais de 15 anos de experiência em artes divinatórias, nosso templo oferece 
                orientação espiritual através do tarot, trabalhos energéticos e rituais sagrados.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Cada consulta é única e personalizada, utilizando métodos ancestrais combinados 
                com a sabedoria moderna para oferecer clareza e direcionamento em sua jornada.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-400">500+</div>
                  <div className="text-sm text-gray-400">Consultas Realizadas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">15+</div>
                  <div className="text-sm text-gray-400">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">98%</div>
                  <div className="text-sm text-gray-400">Satisfação</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-red-900 to-black rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <i className="ri-magic-line text-6xl text-yellow-400 mb-4"></i>
                  <p className="text-white text-lg">Consulta de Tarot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-red-950 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-yellow-400 mb-4">Depoimentos</h3>
            <p className="text-xl text-gray-300">O que nossos clientes dizem</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                text: "A consulta mudou minha vida! As orientações foram precisas e me ajudaram a tomar decisões importantes.",
                rating: 5
              },
              {
                name: "João Santos",
                text: "Trabalho espiritual incrível. Senti uma mudança de energia imediata e os resultados apareceram rapidamente.",
                rating: 5
              },
              {
                name: "Ana Costa",
                text: "Profissionalismo e dedicação únicos. Recomendo para quem busca orientação espiritual verdadeira.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-black/50 border border-yellow-600/30 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400"></i>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="text-yellow-400 font-semibold">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-yellow-400 mb-4">Entre em Contato</h3>
            <p className="text-xl text-gray-300">Agende sua consulta ou tire suas dúvidas</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-yellow-400 mb-6">Informações de Contato</h4>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-red-700 rounded-lg mr-4">
                    <i className="ri-phone-line text-white"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold">WhatsApp</div>
                    <div className="text-gray-400">(11) 99999-9999</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-red-700 rounded-lg mr-4">
                    <i className="ri-mail-line text-white"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold">E-mail</div>
                    <div className="text-gray-400">contato@templomistico.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-red-700 rounded-lg mr-4">
                    <i className="ri-time-line text-white"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Horário de Atendimento</div>
                    <div className="text-gray-400">Segunda a Domingo: 8h às 22h</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-red-900/30 to-black/50 border border-yellow-600/30 rounded-lg p-8">
              <h4 className="text-2xl font-bold text-yellow-400 mb-6">Envie uma Mensagem</h4>
              <form onSubmit={handleContactSubmit} data-readdy-form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="nome"
                    placeholder="Seu nome"
                    required
                    className="w-full bg-black/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Seu e-mail"
                    required
                    className="w-full bg-black/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    name="telefone"
                    placeholder="Seu telefone"
                    required
                    className="w-full bg-black/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <textarea 
                    name="mensagem"
                    placeholder="Sua mensagem"
                    maxLength={500}
                    rows={4}
                    required
                    className="w-full bg-black/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none resize-none text-sm"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-red-700 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-900 to-black border-t border-yellow-600 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <i className="ri-magic-line text-2xl text-yellow-400"></i>
                <span className="text-xl font-bold text-yellow-400" style={{fontFamily: '"Pacifico", serif'}}>
                  Templo Místico
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Orientação espiritual através das artes divinatórias e trabalhos energéticos.
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Serviços</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors cursor-pointer">Consulta de Tarot</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors cursor-pointer">Trabalhos Espirituais</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors cursor-pointer">Limpeza Energética</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors cursor-pointer">Mapa Astral</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Contato</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>(11) 99999-9999</li>
                <li>contato@templomistico.com</li>
                <li>Segunda a Domingo</li>
                <li>8h às 22h</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Redes Sociais</h5>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-red-700 hover:bg-red-600 rounded-lg transition-colors cursor-pointer">
                  <i className="ri-instagram-line text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-red-700 hover:bg-red-600 rounded-lg transition-colors cursor-pointer">
                  <i className="ri-facebook-line text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-red-700 hover:bg-red-600 rounded-lg transition-colors cursor-pointer">
                  <i className="ri-whatsapp-line text-white"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-yellow-600/30 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Templo Místico. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
