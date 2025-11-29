import { useState } from 'react';
import './App.css';
import headerPic from '/assets/foto-de-fundo.jpg';
import logo from '/assets/logo.png';
import cenaCorrida from '/assets/A4B2A3B.png';
import wpp from '/assets/whatsapp.svg';
import raizes from '/assets/raízes.jpg';
import morreu from '/assets/MORREU.png';
import { MembroEquipe } from './components/MembroEquipe';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="w-full bg-white text-white">
      <header className="fixed top-0 left-0 w-full z-50 bg-white text-black">
        <div className="relative w-full h-[80px] md:h-[105px]">
          <div className="absolute inset-0 flex items-center justify-between max-w-6xl mx-auto px-4 md:px-8">
            <a href="#" onClick={closeMobileMenu}>
              <img className="h-[50px] md:h-[70px]" src={logo} alt="Logo menor" />
            </a>
            <nav className="hidden md:flex gap-4 md:gap-6 font-semibold">
              <a href="#blind-gaming">QUEM SOMOS</a>
              <a href="#nosso-produto">RAÍZES DO MEDO</a>
              <a href="#equipe">EQUIPE</a>
              <a href="#contato">CONTATO</a>
            </nav>
            <button
              className="md:hidden text-black text-2xl"
              onClick={toggleMobileMenu}
            >
              &#9776;
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-[80px] left-0 w-full bg-white text-black bg-opacity-95 flex flex-col items-center py-4 z-40">
            <a href="#blind-gaming" onClick={closeMobileMenu} className="py-2 text-lg font-semibold">
              QUEM SOMOS
            </a>
            <a href="#nosso-produto" onClick={closeMobileMenu} className="py-2 text-lg font-semibold">
              RAÍZES DO MEDO
            </a>
            <a href="#equipe" onClick={closeMobileMenu} className="py-2 text-lg font-semibold">
              EQUIPE
            </a>
            <a href="#contato" onClick={closeMobileMenu} className="py-2 text-lg font-semibold">
              CONTATO
            </a>
          </div>
        )}
      </header>

      <div className="pt-[80px] md:pt-[105px]">
        {/* Hero */}
        <div className="relative w-full h-[100vh]">
          <img className="w-full h-full object-cover" src={headerPic} alt="Header" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center px-4 md:px-8">
            <div className="flex flex-col items-center w-full">
              <h1 className="text-white text-base md:text-2xl font-bold text-center leading-snug">
                DESENVOLVENDO JOGOS PARA<br />PESSOAS COM DEFICIÊNCIA VISUAL
              </h1>
              <a
                href="#blind-gaming"
                className="mt-4 bg-black bg-opacity-70 text-white font-semibold py-2 px-6 text-sm rounded-lg hover:bg-opacity-90"
              >
                Conheça
              </a>
            </div>
          </div>
        </div>

        {/* Sobre */}
        <section className="bg-white text-black pt-6 pb-11 shadow-lg">
          <h2 id="blind-gaming" className="text-xl md:text-2xl font-semibold text-center m-4">
            Quem Somos
          </h2>
          <div className='flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-4 md:px-8'>
            <div className="w-full md:w-1/2 text-justify">
              <p className="text-sm md:text-xl font-semibold">
                A Blind Gaming é uma empresa brasileira de desenvolvimento de jogos digitais, fundada com o propósito de proporciar experiências inclusivas e acessíveis. <br /><br />
                Nossa missão é criar experiências que possam ser aproveitadas por pessoas com deficiência visual, sem abrir mão da qualidade técnica e artística. <br /><br />
                Nosso trabalho é garantir que acessibilidade e diversão caminhem lado a lado.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
              <img src={logo} alt="Logo" className='h-[20vh] md:h-[30vh] object-contain' />
            </div>
          </div>
        </section>

        {/* Produto */}
        <section className="bg-black text-white py-5">
          <div className="max-w-3xl mx-auto text-center px-4">
            <div className="hidden md:flex justify-center gap-[150px] mb-8">
              <img src={cenaCorrida} alt="cenaCorrida" className="w-[250px]" />
              <img src={raizes} alt="raízes" className="w-[250px]" />
              <img src={morreu} alt="morreu" className="w-[250px]" />
            </div>
            <div className="flex md:hidden justify-center mb-8">
              <img src={cenaCorrida} alt="Imagem Mobile" className="w-[60%]" />
            </div>
            <h2 id="nosso-produto" className="text-xl md:text-2xl font-semibold mb-4">
              Raízes do Medo
            </h2>
            <p className="text-sm md:text-lg text-justify font-semibold md:mb-[40px]">
              Criado com foco na acessibilidade, Raízes do Medo é um jogo de terror que garante uma imersão completa para jogadores com limitações visuais, sem comprometer o terror da narrativa.
            </p>
          </div>
        </section>

        {/* Equipe */}
        <div className='flex gap-8 justify-center items-start'>          
          <section className="equipe-container text-center py-10 md:py-16">
            <h2 id="equipe" className="text-xl md:text-2xl font-semibold mb-8 md:mb-12">
              Nossa Equipe
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-start gap-6 px-4 max-w-6xl mx-auto"> {/* Changed items-center to items-start */}
              <MembroEquipe nome="Ricardo Junior" cargo="Technical Writer" imagem="/assets/Ricardo.jpg" />
              <MembroEquipe nome="Rhuan Victor" cargo={'Product Owner\nAgilista\nSoftware Engineer'} imagem="/assets/Rhuan.jpg" />
              <MembroEquipe nome="Luan Santos" cargo="Quality Assurance" imagem="/assets/Luan.jpg" />
              <MembroEquipe nome="Lucas Oliveira" cargo={'Designer\nTechnical Writer'} imagem="/assets/Lucas.jpg" />
              <MembroEquipe nome="Elias Sales" cargo="Software Engineer" imagem="/assets/elias.jpeg" />
            </div>
          </section>
        </div>

        {/* Contato */}
        <section className="bg-white text-black py-10 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="contato" className="text-xl md:text-2xl font-semibold mb-4 text-center">
              Restou alguma dúvida?
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center max-w-2xl mx-auto">
              <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
                <p className='font-semibold mb-8'>
                  Entre em contato com a nossa equipe para tirar as suas dúvidas:
                </p>
                <a
                  href="https://wa.me/5581987031072?text=Olá,%20tenho%20uma%20dúvida%20sobre%20a%20Blind%20Gaming."
                  target='_blank' rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start"
                >
                  <button className="bg-[#019C3C] hover:bg-[#017e30] text-black font-semibold py-3 px-6 rounded-md text-lg flex items-center hover:cursor-pointer">
                    <img src={wpp} alt="WhatsApp" className='w-[30px] mr-[20px]' />
                    ENTRAR EM CONTATO
                  </button>
                </a>
              </div>
              <div className="flex justify-center md:justify-end md:w-1/2">
                <img src={logo} alt="Logo Blind Gaming" className="w-[150px] md:w-[250px] h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Rodapé */}
        <footer className="bg-white text-black px-4 md:px-8 py-4 md:py-6 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto">
            <span className="font-semibold text-xs md:text-sm mb-2 sm:mb-0">
              UNIFACOL - Centro Universitário FACOL, 2025.
            </span>
            <span className="text-xs">© BLIND GAMING - TODOS OS DIREITOS RESERVADOS.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;