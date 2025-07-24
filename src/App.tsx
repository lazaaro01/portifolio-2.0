import React from 'react';
import { 
  User, 
  Briefcase, 
  Code,   
  Github, 
  Linkedin,
  Instagram,
  Calendar,
  Award,
  Users,
  Zap,
  Globe
} from 'lucide-react';

function App() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-white">Portfólio</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-blue-400 transition-colors">
                Experiência
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-colors">
                Projetos
              </button>
              <button onClick={() => scrollToSection('technologies')} className="text-gray-300 hover:text-blue-400 transition-colors">
                Tecnologias
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="src/fundo.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-blue-900/60"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                <User className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Desenvolvedor 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Fullstack</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Especialista em desenvolvimento fullstack com experiência em projetos inovadores, 
              desde startups até grandes corporações. Apaixonado por criar soluções tecnológicas 
              que fazem a diferença.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Ver Projetos
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Sobre Mim
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Desenvolvedor fullstack com paixão por tecnologia e inovação
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Sou um desenvolvedor fullstack com experiência sólida em criar aplicações web modernas 
                e escaláveis. Tenho trabalhado em diversos projetos, desde sistemas corporativos até 
                aplicações para startups em crescimento.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Minha jornada profissional inclui desenvolvimento de soluções completas, 
                desde o backend até interfaces de usuário intuitivas, sempre focando em 
                performance, usabilidade e melhores práticas de desenvolvimento.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Além do desenvolvimento, tenho experiência em ensino e compartilhamento de conhecimento, 
                ajudando outros desenvolvedores a crescerem em suas carreiras.
              </p>

              {/* Contact Icons */}
              <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
            <div className="flex flex-wrap gap-6">

            </div>

            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/lazaaro01" className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors" target="_blank">
                <Github className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.linkedin.com/in/l%C3%A1zaro-vasconcelos-87a968287/" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors" target="_blank">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.instagram.com/lazaaro___/" className="w-10 h-10 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:bg-gradient-to-r hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 rounded-lg flex items-center justify-center transition-colors" target="_blank">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          </div>
            
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl border border-gray-600">
              <h3 className="text-2xl font-bold text-white mb-6">Skills Principais</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
                  <h4 className="font-semibold text-white mb-2">Frontend Development</h4>
                  <p className="text-sm text-gray-300">Criação de interfaces modernas e responsivas</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
                  <h4 className="font-semibold text-white mb-2">Backend Development</h4>
                  <p className="text-sm text-gray-300">APIs robustas e arquiteturas escaláveis</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
                  <h4 className="font-semibold text-white mb-2">Cloud & DevOps</h4>
                  <p className="text-sm text-gray-300">Deploy e gerenciamento em nuvem</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
                  <h4 className="font-semibold text-white mb-2">Ensino & Mentoria</h4>
                  <p className="text-sm text-gray-300">Compartilhamento de conhecimento técnico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Experiência Profissional</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Minha trajetória no desenvolvimento de soluções inovadoras
            </p>
          </div>

          <div className="space-y-12">
            {/* RobDev */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Desenvolvedor Fullstack</h3>
                    <p className="text-lg text-blue-400 font-semibold">RobDev</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Atual</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Na RobDev, atuo como desenvolvedor fullstack, trabalhando em projetos diversos que envolvem 
                desde a criação de APIs robustas até interfaces de usuário modernas e responsivas.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">PWA</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">ElectronJs</span>
              </div>
            </div>

            {/* Driblus */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Engenheiro de Software Fullstack</h3>
                    <p className="text-lg text-green-400 font-semibold">Driblus - Startup Sebrae</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>2024</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Desenvolvi uma plataforma completa de futebol em uma startup impulsionada pelo Sebrae, 
                criando soluções tecnológicas inovadoras para conectar jogadores, times e organizadores 
                de eventos esportivos em um ambiente dinâmico e colaborativo.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm">Java Spring Boot</span>
                <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm">AWS</span>
                <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm">S3</span>
                <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm">RDS</span>
              </div>
            </div>

            {/* AnimaExpo */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Instrutor de Programação</h3>
                    <p className="text-lg text-purple-400 font-semibold">AnimaExpo</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>2023</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Ministrei workshops e palestras sobre programação no evento AnimaExpo, 
                compartilhando conhecimento e inspirando novos desenvolvedores a entrarem na área.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-sm">Ensino</span>
                <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-sm">Workshops</span>
                <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-sm">Palestras</span>
                <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-sm">Mentoria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Projetos em Destaque</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Alguns dos projetos que desenvolvi ao longo da minha carreira
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-600">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sistema de Reação</h3>
              <p className="text-gray-300 mb-4">
                Plataforma completa para gestão de processos empresariais com dashboard 
                interativo e relatórios em tempo real.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-sm">React</span>
                <span className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-sm">Tailwindcss</span>
                <span className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-sm">Node.js</span>
                <span className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-sm">ElectronJs</span>
                <span className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-sm">C++</span>
              </div>
              <div className="flex space-x-3">
                <a href="#" className="flex items-center text-blue-400 hover:text-blue-300 font-semibold">
                  <Github className="w-4 h-4 mr-1" />
                  GitHub
                </a>
                <a href="#" className="flex items-center text-green-400 hover:text-green-300 font-semibold">
                  <Globe className="w-4 h-4 mr-1" />
                  Demo
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-600">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">CapiGames</h3>
              <p className="text-gray-300 mb-4">
                Desenvolvimento de um jogo para o primeiro parque temático de capivaras do Brasil.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-900 text-green-300 px-2 py-1 rounded text-sm">HTML</span>
                <span className="bg-green-900 text-green-300 px-2 py-1 rounded text-sm">CSS</span>
                <span className="bg-green-900 text-green-300 px-2 py-1 rounded text-sm">Bootstrap</span>
                <span className="bg-green-900 text-green-300 px-2 py-1 rounded text-sm">JavaScript</span>
                <span className="bg-green-900 text-green-300 px-2 py-1 rounded text-sm">PWA</span>
                <span className="bg-green-900 text-green-300 px-2 py-1 rounded text-sm">ElectronJs</span>
              </div>
              <div className="flex space-x-3">
                <a href="#" className="flex items-center text-blue-400 hover:text-blue-300 font-semibold">
                  <Github className="w-4 h-4 mr-1" />
                  GitHub
                </a>
                <a href="#" className="flex items-center text-purple-400 hover:text-purple-300 font-semibold">
                  <Linkedin className="w-4 h-4 mr-1" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-600">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Plataforma de Cursos Online</h3>
              <p className="text-gray-300 mb-4">
                Sistema completo para criação e gerenciamento de cursos online 
                com videoaulas, exercícios e certificados.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-900 text-purple-300 px-2 py-1 rounded text-sm">Next.js</span>
                <span className="bg-purple-900 text-purple-300 px-2 py-1 rounded text-sm">Prisma</span>
                <span className="bg-purple-900 text-purple-300 px-2 py-1 rounded text-sm">Stripe</span>
              </div>
              <div className="flex space-x-3">
                <a href="#" className="flex items-center text-blue-400 hover:text-blue-300 font-semibold">
                  <Github className="w-4 h-4 mr-1" />
                  GitHub
                </a>
                <a href="#" className="flex items-center text-green-400 hover:text-green-300 font-semibold">
                  <Globe className="w-4 h-4 mr-1" />
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Tecnologias</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ferramentas e tecnologias que domino para criar soluções completas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors">
              <h4 className="font-bold text-white mb-4 text-lg">Frontend</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">React</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">TypeScript</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Tailwind CSS</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Next.js</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-green-500 transition-colors">
              <h4 className="font-bold text-white mb-4 text-lg">Backend</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Node.js</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Express</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Java Spring Boot</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Python</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition-colors">
              <h4 className="font-bold text-white mb-4 text-lg">Database</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">PostgreSQL</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">MongoDB</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Prisma</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-colors">
              <h4 className="font-bold text-white mb-4 text-lg">Cloud & DevOps</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">AWS</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Docker</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Git</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Lázaro Vasconcelos. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;