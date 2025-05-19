import './App.css';
import headerPic from '/assets/headerPic.png';
import logo from '/assets/logo.png';
import TreeIcon from '/assets/Tree.png';
import { MembroEquipe } from './components/MembroEquipe';

function App() {
  return (
    <div className="w-full bg-black text-white">
      {/* HEADER FIXO */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="relative w-full h-[105px]">
          <img 
          className="w-full h-full object-cover" 
          src={headerPic} 
          alt="Header"
          />
          <div className="absolute inset-0 flex items-center justify-between max-w-6xl mx-auto px-8">
          <a href="#">
            <img className="h-[70px]" src={logo} alt="Logo menor"/>
          </a>
          <nav className="flex gap-6 font-semibold">
            <a href="#blind-gaming">BLIND GAMING</a>
            <a href="#nosso-produto">NOSSO PRODUTO</a>
            <a href="#equipe">EQUIPE</a>
            <a href="#contato">CONTATO</a>
          </nav>
        </div>
        </div>
      </header>

      {/* Espaço para o header fixo */}
      <div className="pt-[105px]">
        {/* BLOCO DO TOPO COM IMAGEM DE FUNDO */}
        <div className="relative w-full h-[320px]">
          <img className="w-full h-full object-cover" src={headerPic} alt="Header" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center">
            <div className="flex items-center max-w-5xl mx-auto px-8 w-full">
              <img src={logo} alt="Logo grande" className="w-[140px] md:w-[170px] mr-14 mt-2" />
              <h1 className="text-white text-lg md:text-2xl font-bold text-left leading-snug">
                DESENVOLVENDO JOGOS PARA<br />PESSOAS COM CEGUEIRA
              </h1>
            </div>
          </div>
        </div>

        {/* DAQUI PRA BAIXO, FUNDO SÓLIDO */}
        <div className="bg-black">
          <h2 id='blind-gaming' className="text-2xl font-semibold text-center m-7 scroll-mt-[110px]">Blind Gaming</h2>
          <p className="text-center mx-auto max-w-3xl text-justify font-semibold">
            A Blind Gaming é uma empresa brasileira de tecnologia e desenvolvimento de jogos digitais, fundada com o propósito de tornar o mundo dos games mais acessível e inclusivo. Seu foco principal está em criar experiências imersivas que possam ser aproveitadas por pessoas com cegueira, sem abrir mão da qualidade técnica e artística que encanta todos os públicos. A Blind Gaming trabalha para garantir que acessibilidade e diversão caminhem lado a lado.
          </p>

          <br />
          <div className="flex justify-center">
            <div className="w-[75%] h-[1px] bg-white"></div>
          </div>

          <section className="relative bg-black text-white py-5">
            {/* Árvores de fundo */}
            <img
              src={TreeIcon}
              alt="Árvore esquerda"
              className="absolute left-[100px] bottom-0 w-28 md:w-40"
            />
            <img
              src={TreeIcon}
              alt="Árvore direita"
              className="absolute right-[100px] bottom-0 w-28 md:w-40"
            />

            {/* Texto sobreposto */}
            <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
              <h2 id='nosso-produto' className="text-2xl font-semibold mb-4 scroll-mt-[110px]">Nosso Produto</h2>
              <p className="text-lg text-justify font-semibold">
                Raízes do Medo é um jogo que busca se destacar por sua acessibilidade,
                sendo projetado especialmente para incluir pessoas com deficiência visual.
                Utilizando sons e comandos como base de interatividade, oferece uma
                experiência inclusiva. Além disso, foca no terror psicológico, com design
                de áudio avançado que cria uma ambientação intensa, proporcionando uma
                jogabilidade imersiva e única para todos os públicos.
              </p>
            </div>
          </section>

          <br />
          <div className="flex justify-center">
            <div className="w-[75%] h-[1px] bg-white"></div>
          </div>
          <br />

          <div className='text-center space-y-6'>
            <h2 id='equipe' className='text-2xl font-semibold scroll-mt-[110px]'>Equipe</h2>
            <div className='flex flex-wrap justify-center gap-6'>
              <MembroEquipe nome='Ricardo Junior' cargo='Technical Writer' imagem='./assets/Ricardo.jpg'/>
              <MembroEquipe nome='Rhuan Victor' cargo='Product Owner\nAgilista\nSoftware Engineer' imagem='./assets/Rhuan.png'/>
              <MembroEquipe nome='Elias Sales' cargo='Software Engineer' imagem='./assets/Elias.jpg'/>
              <MembroEquipe nome='Luan Santos' cargo='Quality Assurance' imagem='./assets/Luan.jpg'/>
              <MembroEquipe nome='Lucas Oliveira' cargo='Designer\nTechnical Writer' imagem='./assets/Lucas.jpg'/>
            </div>
          </div>

          <br />
          <div className="flex justify-center">
            <div className="w-[75%] h-[1px] bg-white"></div>
          </div>
          <br />
          
          <div className='text-center'>
            <h2 id='contato' className='text-2xl font-semibold mb-5 scroll-mt-[110px]'>Entre em contato com a gente!</h2>
            
            <div className='flex justify-center gap-2'>
              <p className='text-[#017108] font-semibold'>Ricardo Junior:</p>
              <a href="mailto:ricardoj.lima@unifacol.edu.br" target="_blank" rel="noopener noreferrer">
                ricardoj.lima@unifacol.edu.br
              </a>
            </div>

            <div className='flex justify-center gap-2'>
              <p className='text-[#017108] font-semibold'>Rhuan Victor:</p>
              <a href="mailto:rhuanv.oliveira@unifacol.edu.br" target="_blank" rel="noopener noreferrer">
                rhuanv.oliveira@unifacol.edu.br
              </a>
            </div>

            <div className='flex justify-center gap-2'>
              <p className='text-[#017108] font-semibold'>Elias Sales:</p>
              <a href="mailto:eliass.junior@unifacol.edu.br" target="_blank" rel="noopener noreferrer">
                eliass.junior@unifacol.edu.br
              </a>
            </div>

            <div className='flex justify-center gap-2'>
              <p className='text-[#017108] font-semibold'>Luan Santos:</p>
              <a href="mailto:luans.pereira@unifacol.edu.br" target="_blank" rel="noopener noreferrer">
                luans.pereira@unifacol.edu.br
              </a>
            </div>

            <div className='flex justify-center gap-2'>
              <p className='text-[#017108] font-semibold'>Lucas Oliveira:</p>
              <a href="mailto:lucasod.silva@unifacol.edu.br" target="_blank" rel="noopener noreferrer">
                lucasod.silva@unifacol.edu.br
              </a>
            </div>
          </div>

          <br />
          <div className="flex justify-center">
            <div className="w-[75%] h-[1px] bg-white"></div>
          </div>
          <br />

          

          <footer className="bg-black text-white px-8 py-6">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
              <span className="font-semibold">
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
