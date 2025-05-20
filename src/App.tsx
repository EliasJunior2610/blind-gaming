import React, { useState } from 'react'; // Importe useState
import './App.css';
import headerPic from '/assets/headerPic.png';
import logo from '/assets/logo.png';
import { MembroEquipe } from './components/MembroEquipe';
import Tree from '/assets/Tree.png'

import blindGamingLogo from '/assets/logo.png'; 

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para controlar o menu mobile

  // Função para lidar com o envio do formulário
  const handleEmailSend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página

    const form = event.currentTarget;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const descriptionTextarea = form.elements.namedItem('description') as HTMLTextAreaElement;

    const userEmail = emailInput ? emailInput.value : '';
    const userDescription = descriptionTextarea ? descriptionTextarea.value : '';

    const recipientEmail = 'ricardoj.lima@unifacol.edu.br';
    const subject = 'Contato via Blind Gaming Website';
    const bodyEmail = `E-mail do remetente: ${userEmail}\n\nDescrição:\n${userDescription}`;

    window.open(`mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyEmail)}`, '_blank');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full bg-[#222222] text-white">
      {/* HEADER FIXO */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black">
        <div className="relative w-full h-[80px] md:h-[105px]">
          <div className="absolute inset-0 flex items-center justify-between max-w-6xl mx-auto px-4 md:px-8">
            <a href="#" onClick={closeMobileMenu}> {/* Fecha menu ao clicar no logo */}
              <img className="h-[50px] md:h-[70px]" src={logo} alt="Logo menor"/>
            </a>
            {/* Navegação para telas maiores */}
            <nav className="hidden md:flex gap-4 md:gap-6 font-semibold">
              <a href="#blind-gaming">BLIND GAMING</a>
              <a href="#nosso-produto">NOSSO PRODUTO</a>
              <a href="#equipe">EQUIPE</a>
              <a href="#contato">CONTATO</a>
            </nav>
            {/* Botão de menu hambúrguer para mobile */}
            <button
              className="md:hidden text-white text-2xl focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              &#9776; {/* Ícone de hambúrguer */}
            </button>
          </div>
        </div>

        {/* Menu Mobile (condicional) */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-[80px] left-0 w-full bg-black bg-opacity-95 flex flex-col items-center py-4 z-40">
            <a href="#blind-gaming" className="py-2 text-lg font-semibold" onClick={closeMobileMenu}>BLIND GAMING</a>
            <a href="#nosso-produto" className="py-2 text-lg font-semibold" onClick={closeMobileMenu}>NOSSO PRODUTO</a>
            <a href="#equipe" className="py-2 text-lg font-semibold" onClick={closeMobileMenu}>EQUIPE</a>
            <a href="#contato" className="py-2 text-lg font-semibold" onClick={closeMobileMenu}>CONTATO</a>
          </div>
        )}
      </header>

      {/* Espaço para o header fixo */}
      <div className="pt-[80px] md:pt-[105px]">
        {/* BLOCO DO TOPO COM IMAGEM DE FUNDO */}
        <div className="relative w-full h-[250px] md:h-[320px]">
          <img className="w-full h-full object-cover" src={headerPic} alt="Header" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center md:justify-between w-full max-w-5xl mx-auto">
              <img src={logo} alt="Logo grande" className="w-[100px] md:w-[170px] mt-2 md:mt-2" />
              
              <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
                <h1 className="text-white text-base md:text-2xl font-bold text-center md:text-right leading-snug">
                  DESENVOLVENDO JOGOS PARA<br />PESSOAS COM CEGUEIRA
                </h1>
                <a href="#blind-gaming" className="mt-4 bg-black bg-opacity-70 text-white font-semibold py-2 px-6 text-sm rounded-lg transition duration-300 ease-in-out hover:bg-opacity-90" onClick={closeMobileMenu}>
                  Conheça
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Div com o gradiente roxo e sombra */}
          <div className='purple-gradient pt-6 pb-11 shadow-lg'>
            <h2 id='blind-gaming' className="text-xl md:text-2xl font-semibold text-center m-4 scroll-mt-[90px] md:scroll-mt-[110px]">Blind Gaming</h2>
            <p className="text-center px-4 md:px-80 text-justify text-base md:text-xl font-semibold">
              A Blind Gaming é uma empresa brasileira de tecnologia e desenvolvimento de jogos digitais, fundada com o propósito de tornar o mundo dos games mais acessível e inclusivo. Seu foco principal está em criar experiências imersivas que possam ser aproveitadas por pessoas com cegueira, sem abrir mão da qualidade técnica e artística que encanta todos os públicos. A Blind Gaming trabalha para garantir que acessibilidade e diversão caminhem lado a lado.
            </p>
          </div>

          <section className="relative bg-[#222222] text-white py-5">
            {/* Texto sobreposto */}
            <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
              <div className="flex justify-center -mb-10 md:-mb-18 -mt-8 md:-mt-12">
                <img src={Tree} alt="Árvore" className='w-[60%] md:w-[40%]'/>
              </div>
              <h2 id='nosso-produto' className="text-xl md:text-2xl font-semibold mb-4 scroll-mt-[90px] md:scroll-mt-[110px]">Nosso Produto</h2>
              <p className="text-base md:text-lg text-justify font-semibold mb-7">
                Raízes do Medo é um jogo que busca se destacar por sua acessibilidade,
                sendo projetado especialmente para incluir pessoas com deficiência visual.
                Utilizando sons e comandos como base de interatividade, oferece uma
                experiência inclusiva. Além disso, foca no terror psicológico, com design
                de áudio avançado que cria uma ambientação intensa, proporcionando uma
                jogabilidade imersiva e única para todos os públicos.
              </p>
            </div>
          </section>

          {/* Div com o fundo cinza transparente para a seção da equipe */}
          <div className='equipe-container text-center space-y-6 bg-transparent'>
            <h2 id='equipe' className='text-xl md:text-2xl font-semibold scroll-mt-[90px] md:scroll-mt-[110px]'>Equipe</h2>
            <div className='equipe-cards flex flex-wrap justify-center gap-4 md:gap-6 px-4'>
              <MembroEquipe className='membro-card' nome='Ricardo Junior' cargo='Technical Writer' imagem='./assets/Ricardo.jpg'/>
              <MembroEquipe className='membro-card' nome='Rhuan Victor' cargo={'Product Owner\nAgilista\nSoftware Engineer'} imagem='./assets/Rhuan.png'/>
              <MembroEquipe className='membro-card' nome='Elias Sales' cargo='Software Engineer' imagem='./assets/Elias.jpg'/>
              <MembroEquipe className='membro-card' nome='Luan Santos' cargo='Quality Assurance' imagem='./assets/Luan.jpg'/>
              <MembroEquipe className='membro-card' nome='Lucas Oliveira' cargo={'Designer\nTechnical Writer'} imagem='./assets/Lucas.jpg'/>
            </div>
          </div>

          {/* SEÇÃO DE CONTATO ATUALIZADA */}
          <div className='contact-section bg-[#222222] py-10 px-4'>
            <h2 id='contato' className='text-xl md:text-2xl font-semibold mb-8 text-center scroll-mt-[90px] md:scroll-mt-[110px]'>Entre em contato com a gente!</h2>
            
            <div className='contact-content flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 max-w-4xl mx-auto'>
              {/* Formulário de Contato */}
              <form onSubmit={handleEmailSend} className='flex flex-col gap-4 w-full md:w-1/2'>
                <div className='flex flex-col'>
                  <label htmlFor='email' className='text-left mb-1 text-gray-300 text-sm md:text-base'>Seu e-mail:</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='seu.email@exemplo.com'
                    className='bg-[#333333] border border-gray-600 rounded-md p-2 text-white focus:outline-none focus:border-[#6A019C] text-sm md:text-base'
                    required
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='description' className='text-left mb-1 text-gray-300 text-sm md:text-base'>Descrição:</label>
                  <textarea
                    id='description'
                    name='description'
                    rows={5}
                    placeholder='Descreva sua mensagem aqui...'
                    className='bg-[#333333] border border-gray-600 rounded-md p-2 text-white focus:outline-none focus:border-[#6A019C] text-sm md:text-base'
                    required
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='bg-[#6A019C] hover:bg-[#7C00B6] text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out text-base md:text-lg'
                >
                  Enviar e-mail
                </button>
              </form>

              {/* Logo e Nome da Empresa */}
              <div className='flex flex-col items-center justify-center w-full md:w-1/2 mt-8 md:mt-0'>
                <img src={blindGamingLogo} alt="Logo Blind Gaming" className="w-[120px] md:w-[180px] h-auto mb-4"/>
                <p className="text-lg md:text-xl font-bold">BLIND GAMING</p>
              </div>
            </div>
          </div>

          {/* RODAPÉ ATUALIZADO */}
          <footer className="bg-[#222222] text-white px-4 md:px-8 py-4 md:py-6 border-t border-gray-700 text-center md:text-left">
            <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto">
              <span className="font-semibold text-xs md:text-sm mb-2 sm:mb-0">
                UNIFACOL - Centro Universitário FACOL, 2025.
              </span>
              <span className="text-xs">
                © BLIND GAMING - TODOS OS DIREITOS RESERVADOS.
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;