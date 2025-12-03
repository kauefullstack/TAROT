import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CartasDaLua() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
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

  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5535998155428&text=Olá! Gostaria de agendar uma consulta de tarot.&type=phone_number&app_absent=0";
  const instagramUrl = "https://www.instagram.com/cartasdalua7/";

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

        /* Magical Floating Elements */
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
          opacity: 0.6;
          animation: float 20s infinite linear;
          font-size: 1.5rem;
          color: #C9A86A;
          text-shadow: 0 0 10px rgba(201, 168, 106, 0.5);
        }

        .floating-element:nth-child(1) { left: 10%; animation-delay: 0s; }
        .floating-element:nth-child(2) { left: 20%; animation-delay: -2s; }
        .floating-element:nth-child(3) { left: 30%; animation-delay: -4s; }
        .floating-element:nth-child(4) { left: 40%; animation-delay: -6s; }
        .floating-element:nth-child(5) { left: 50%; animation-delay: -8s; }
        .floating-element:nth-child(6) { left: 60%; animation-delay: -10s; }
        .floating-element:nth-child(7) { left: 70%; animation-delay: -12s; }
        .floating-element:nth-child(8) { left: 80%; animation-delay: -14s; }
        .floating-element:nth-child(9) { left: 90%; animation-delay: -16s; }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
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
          animation: sparkle 20s linear infinite;
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

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.8rem;
          cursor: pointer;
          padding: 0.5rem;
          transition: color 0.3s ease;
        }

        .mobile-menu-button:hover {
          color: #C9A86A;
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          right: -100%;
          width: 80%;
          max-width: 300px;
          height: 100vh;
          background: rgba(26, 11, 46, 0.98);
          backdrop-filter: blur(20px);
          z-index: 1001;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 2rem;
          box-shadow: -5px 0 30px rgba(0, 0, 0, 0.5);
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-menu-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.7);
          z-index: 1000;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .mobile-menu-overlay.open {
          opacity: 1;
        }

        .mobile-menu-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu-items {
          margin-top: 4rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .mobile-menu-item {
          color: white;
          font-size: 1.3rem;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.3s ease;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(201, 168, 106, 0.2);
        }

        .mobile-menu-item:hover {
          color: #C9A86A;
        }
        
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a0b2e 25%, #3A205B 50%, #2D1B69 75%, #1a0b2e 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(201, 168, 106, 0.1), rgba(215, 185, 138, 0.05));
          opacity: 0.3;
          animation: cosmic-drift 30s ease-in-out infinite;
        }
        
        .hero::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(201, 168, 106, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(215, 185, 138, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(166, 131, 74, 0.08) 0%, transparent 50%);
        }
        
        @keyframes cosmic-drift {
          0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); }
          33% { transform: translateY(-20px) scale(1.02) rotate(1deg); }
          66% { transform: translateY(10px) scale(0.98) rotate(-1deg); }
        }
        
        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 900px;
          padding: 0 2rem;
        }
        
        .profile-container {
          position: relative;
          display: inline-block;
          margin-bottom: 3rem;
        }
        
        .profile-img {
          width: 240px;
          height: 240px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(201, 168, 106, 0.4);
          position: relative;
          z-index: 2;
        }
        
        .golden-glow {
          position: relative;
        }
        
        .golden-glow::before {
          content: '';
          position: absolute;
          top: -12px;
          left: -12px;
          right: -12px;
          bottom: -12px;
          background: conic-gradient(from 0deg, #C9A86A, #D7B98A, #A6834A, #C9A86A);
          border-radius: inherit;
          z-index: -1;
          opacity: 0.9;
          filter: blur(15px);
          animation: golden-pulse 4s ease-in-out infinite;
        }
        
        .golden-glow::after {
          content: '';
          position: absolute;
          top: -6px;
          left: -6px;
          right: -6px;
          bottom: -6px;
          background: linear-gradient(45deg, #C9A86A, #D7B98A);
          border-radius: inherit;
          z-index: -1;
          opacity: 0.7;
        }
        
        @keyframes golden-pulse {
          0%, 100% { 
            opacity: 0.9; 
            transform: scale(1) rotate(0deg); 
            filter: blur(15px);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.1) rotate(180deg); 
            filter: blur(20px);
          }
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .fade-in-delay-1 { animation-delay: 0.3s; }
        .fade-in-delay-2 { animation-delay: 0.6s; }
        .fade-in-delay-3 { animation-delay: 0.9s; }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hero-title {
          font-size: 5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff 0%, #C9A86A 30%, #D7B98A 70%, #ffffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          text-shadow: 0 0 30px rgba(201, 168, 106, 0.3);
        }
        
        .hero-subtitle {
          font-size: 1.6rem;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 1rem;
          font-weight: 300;
          letter-spacing: 0.5px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .hero-services {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 3rem;
          font-weight: 400;
          letter-spacing: 0.3px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }
        
        .cta-button {
          background: linear-gradient(135deg, #C9A86A 0%, #D7B98A 50%, #A6834A 100%);
          color: #1a0b2e;
          padding: 1.4rem 3.5rem;
          border: none;
          border-radius: 60px;
          font-weight: 700;
          font-size: 1.3rem;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-block;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(201, 168, 106, 0.4);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.6s ease;
        }
        
        .cta-button:hover::before {
          left: 100%;
        }
        
        .cta-button:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 60px rgba(201, 168, 106, 0.6);
        }
        
        .section {
          padding: 10rem 0;
          position: relative;
          background: linear-gradient(180deg, #0a0a0a 0%, #1a0b2e 50%, #0a0a0a 100%);
        }
        
        .section-title {
          font-size: 4rem;
          font-weight: 800;
          background: linear-gradient(135deg, #C9A86A 0%, #D7B98A 50%, #A6834A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
          margin-bottom: 1rem;
          position: relative;
          text-shadow: 0 0 20px rgba(201, 168, 106, 0.3);
        }
        
        .section-subtitle {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          margin-bottom: 5rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 4px;
          background: linear-gradient(135deg, #C9A86A, #D7B98A);
          border-radius: 2px;
          box-shadow: 0 0 20px rgba(201, 168, 106, 0.5);
        }
        
        .services-catalog {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          gap: 4rem;
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
        
        .service-duration-large {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
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
        
        .about-section {
          background: linear-gradient(180deg, #0a0a0a 0%, #1a0b2e 100%);
          color: white;
        }
        
        .about-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        
        .about-text {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.9;
          margin-bottom: 2.5rem;
        }
        
        .contact-section {
          background: linear-gradient(135deg, #1a0b2e 0%, #3A205B 100%);
          color: white;
        }
        
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: white;
          width: 75px;
          height: 75px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          box-shadow: 0 10px 40px rgba(37, 211, 102, 0.5);
          z-index: 998;
          animation: float-whatsapp 3s ease-in-out infinite;
          transition: all 0.4s ease;
          text-decoration: none;
        }
        
        .whatsapp-float:hover {
          transform: scale(1.15);
          box-shadow: 0 15px 50px rgba(37, 211, 102, 0.7);
        }

        /* Instagram Float Button */
        .instagram-float {
          position: fixed;
          bottom: 120px;
          right: 30px;
          background: linear-gradient(135deg, #E4405F, #C13584);
          color: white;
          width: 75px;
          height: 75px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          box-shadow: 0 10px 40px rgba(228, 64, 95, 0.5);
          z-index: 998;
          animation: float-instagram 3s ease-in-out infinite;
          transition: all 0.4s ease;
          text-decoration: none;
        }
        
        .instagram-float:hover {
          transform: scale(1.15);
          box-shadow: 0 15px 50px rgba(228, 64, 95, 0.7);
        }
        
        @keyframes float-whatsapp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes float-instagram {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        .footer {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a0b2e 100%);
          color: white;
          padding: 5rem 0 2rem;
          border-top: 1px solid rgba(201, 168, 106, 0.2);
        }
        
        .footer-content {
          text-align: center;
        }
        
        .footer-logo {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 2.5rem;
          background: linear-gradient(135deg, #C9A86A, #D7B98A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .social-link {
          width: 60px;
          height: 60px;
          background: rgba(201, 168, 106, 0.1);
          border: 2px solid rgba(201, 168, 106, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C9A86A;
          font-size: 1.5rem;
          text-decoration: none;
          transition: all 0.4s ease;
          cursor: pointer;
        }
        
        .social-link:hover {
          background: #C9A86A;
          color: #1a0b2e;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(201, 168, 106, 0.4);
        }
        
        .footer-disclaimer {
          background: rgba(26, 11, 46, 0.5);
          padding: 2.5rem;
          border-radius: 20px;
          margin-bottom: 3rem;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          border: 1px solid rgba(201, 168, 106, 0.2);
        }
        
        .footer-copyright {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
          border-top: 1px solid rgba(201, 168, 106, 0.2);
          padding-top: 2.5rem;
        }
        
        .footer-copyright a {
          color: #C9A86A;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-copyright a:hover {
          color: #D7B98A;
        }
        
        @media (max-width: 768px) {
          .mobile-menu-button {
            display: block;
          }

          .navbar .hidden.md\\:flex {
            display: none !important;
          }

          .mobile-menu,
          .mobile-menu-overlay {
            display: block;
          }

          .hero {
            min-height: 90vh;
            padding: 2rem 0;
          }

          .hero-title { 
            font-size: 2.8rem;
            margin-bottom: 1rem;
          }

          .hero-subtitle { 
            font-size: 1.1rem;
            margin-bottom: 0.8rem;
          }

          .hero-services {
            font-size: 1rem;
            margin-bottom: 2rem;
          }

          .profile-img { 
            width: 160px; 
            height: 160px; 
          }

          .profile-container {
            margin-bottom: 2rem;
          }

          .cta-button {
            padding: 1.1rem 2.5rem;
            font-size: 1rem;
          }

          .section { 
            padding: 5rem 0; 
          }

          .section-title { 
            font-size: 2.2rem;
            margin-bottom: 0.8rem;
          }

          .section-subtitle {
            font-size: 1rem;
            margin-bottom: 3rem;
            padding: 0 1rem;
          }

          .service-header-top { 
            flex-direction: column; 
            gap: 1.5rem; 
          }

          .service-price-area { 
            text-align: center; 
          }

          .service-features-grid { 
            grid-template-columns: 1fr; 
          }

          .service-header { 
            padding: 2rem 1.5rem; 
          }

          .service-body { 
            padding: 2rem 1.5rem; 
          }

          .service-title-large { 
            font-size: 1.8rem; 
          }

          .service-price-large { 
            font-size: 2.2rem; 
          }

          .service-icon-large {
            width: 60px;
            height: 60px;
            font-size: 2rem;
          }

          .service-description-large {
            font-size: 1rem;
          }

          .service-features-title {
            font-size: 1.2rem;
          }

          .service-feature-text {
            font-size: 0.95rem;
          }

          .service-button-large {
            padding: 1.2rem 2.5rem;
            font-size: 1rem;
          }

          .about-text {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }

          .footer-logo {
            font-size: 2rem;
            margin-bottom: 1.5rem;
          }

          .footer-disclaimer {
            padding: 1.5rem;
            font-size: 0.9rem;
            margin-bottom: 2rem;
          }

          .social-links {
            gap: 1.5rem;
            margin-bottom: 2.5rem;
          }

          .social-link {
            width: 50px;
            height: 50px;
            font-size: 1.3rem;
          }

          .whatsapp-float,
          .instagram-float {
            width: 60px;
            height: 60px;
            font-size: 1.6rem;
            right: 20px;
          }

          .instagram-float {
            bottom: 95px;
          }

          .whatsapp-float {
            bottom: 20px;
          }

          .floating-element {
            font-size: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title { 
            font-size: 2.2rem; 
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .hero-services {
            font-size: 0.9rem;
          }

          .profile-img { 
            width: 140px; 
            height: 140px; 
          }

          .cta-button {
            padding: 1rem 2rem;
            font-size: 0.9rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .section {
            padding: 4rem 0;
          }

          .service-title-large {
            font-size: 1.5rem;
          }

          .service-price-large {
            font-size: 1.8rem;
          }

          .service-icon-large {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }

          .footer-logo {
            font-size: 1.6rem;
          }
        }
      `}</style>

      <div className="min-h-screen">
        {/* Magical Background Elements */}
        <div className="starfield"></div>
        <div className="magical-bg" style={{transform: `translateY(${scrollY * 0.5}px)`}}>
          <div className="floating-element">⭐</div>
          <div className="floating-element">🌙</div>
          <div className="floating-element">☀️</div>
          <div className="floating-element">✨</div>
          <div className="floating-element">🌟</div>
          <div className="floating-element">🌙</div>
          <div className="floating-element">⭐</div>
          <div className="floating-element">☀️</div>
          <div className="floating-element">✨</div>
        </div>

        {/* Navbar */}
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <div className="playfair text-3xl font-bold text-white">
                Cartas da Lua
              </div>
              <div className="hidden md:flex space-x-8">
                <span onClick={() => document.getElementById('inicio')?.scrollIntoView({behavior: 'smooth'})} className="text-white hover:text-yellow-300 transition-colors cursor-pointer">Início</span>
                <span onClick={() => document.getElementById('sobre')?.scrollIntoView({behavior: 'smooth'})} className="text-white hover:text-yellow-300 transition-colors cursor-pointer">Sobre</span>
                <span onClick={() => window.location.href = '/servicos'} className="text-white hover:text-yellow-300 transition-colors cursor-pointer">Serviços</span>
                <span onClick={() => document.getElementById('contato')?.scrollIntoView({behavior: 'smooth'})} className="text-white hover:text-yellow-300 transition-colors cursor-pointer">Contato</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="inicio" className="hero">
          <div className="hero-content">
            <div className="profile-container fade-in">
              <img 
                src="https://static.readdy.ai/image/e757669275c969133a07585a34318677/c515be7143ffde2fc585923e6ba6dd0a.png"
                alt="Taróloga Cartas da Lua"
                className="profile-img golden-glow"
              />
            </div>
            
            <h1 className="hero-title playfair fade-in fade-in-delay-1">
              Cartas da Lua
            </h1>
            
            <p className="hero-subtitle fade-in fade-in-delay-2">
              Cartomante | Conjure Hoodoo 🖤
            </p>

            <p className="hero-services fade-in fade-in-delay-2">
              ~ Leituras com tarot e baralho cigano ✨<br />
              Agendamento de consultas/magias
            </p>
            
            <div className="fade-in fade-in-delay-3">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button whitespace-nowrap"
              >
                <i className="ri-whatsapp-line mr-3"></i>
                Entre em Contato
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="section about-section">
          <div className="container mx-auto px-6">
            <div className="about-content">
              <h2 className="section-title playfair">Sobre a Cartomante</h2>
              <p className="section-subtitle">
                Conexão com as energias cósmicas através das cartas sagradas
              </p>
              
              <div className="about-text">
                <p className="mb-6">
                  Especializada em leituras com tarot e baralho cigano, canalizo as energias do universo para revelar verdades ocultas e orientar sua jornada espiritual.
                </p>
                <p className="mb-6">
                  Através do Conjure Hoodoo e das artes divinatórias ancestrais, realizo trabalhos espirituais personalizados, magias e consultas que trazem clareza, proteção e transformação.
                </p>
                <p>
                  Cada leitura é uma conexão profunda com as forças superiores, revelando caminhos e possibilidades para sua vida. Agende sua consulta e permita que as cartas iluminem seu destino.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="section">
          <div className="container mx-auto px-6">
            <h2 className="section-title playfair">Nossos Serviços</h2>
            <p className="section-subtitle">
              Consultas completas e detalhadas para iluminar seu caminho espiritual
            </p>
            
            <div className="text-center mb-12">
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Oferecemos uma variedade de consultas especializadas para diferentes momentos da sua jornada espiritual.
                Cada serviço é personalizado e realizado com dedicação e cuidado especial.
              </p>
              
              <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-purple-400/30 rounded-2xl p-12 backdrop-blur-10 max-w-2xl mx-auto">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-purple-500/20 rounded-full">
                  <i className="ri-magic-line text-4xl text-purple-400"></i>
                </div>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">Catálogo de Serviços</h3>
                <span 
                  onClick={() => navigate('/servicos')}
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-book-open-line mr-3"></i>
                  Ver Catálogo Completo
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="section contact-section">
          <div className="container mx-auto px-6 text-center">
            <h2 className="section-title playfair">Revele Seu Destino</h2>
            <p className="section-subtitle">
              As cartas estão chamando você. Descubra as verdades que o universo tem preparado 
              especialmente para sua jornada. Sua transformação começa agora.
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button whitespace-nowrap"
              style={{fontSize: '1.4rem', padding: '1.8rem 4.5rem'}}
            >
              <i className="ri-whatsapp-line mr-3"></i>
              Conectar com as Energias
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container mx-auto px-6">
            <div className="footer-content">
              <div className="footer-logo playfair">Cartas da Lua</div>
              
              <div className="social-links">
                <a 
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="ri-whatsapp-line"></i>
                </a>
              </div>
              
              <div className="footer-disclaimer">
                <p>
                  <strong>Aviso Espiritual:</strong> As consultas de tarot são baseadas em conexões energéticas e revelações espirituais ancestrais. 
                  As cartas revelam tendências e possibilidades baseadas nas energias atuais e podem sofrer alterações conforme suas escolhas e livre arbítrio. 
                  As leituras são ferramentas de orientação espiritual e autoconhecimento, complementando mas não substituindo decisões pessoais conscientes.
                </p>
              </div>
              
              <div className="footer-copyright">
                <p>&copy; 2024 Cartas da Lua - Cartomante Espiritual. Todos os direitos reservados.</p>
              </div>
            </div>
          </div>
        </footer>

        {/* Instagram Float Button */}
        <a 
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-float"
          title="Seguir no Instagram"
        >
          <i className="ri-instagram-line"></i>
        </a>

        {/* WhatsApp Float Button */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          title="Conectar via WhatsApp"
        >
          <i className="ri-whatsapp-line"></i>
        </a>
      </div>
    </>
  );
}