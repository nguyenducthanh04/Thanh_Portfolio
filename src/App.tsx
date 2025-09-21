import React, { useState, useEffect } from 'react';
import { Home, Briefcase, User, Mail, Lightbulb, Github, Facebook, Download, MapPin, Phone, Send, ArrowRight } from 'lucide-react';
import Avatar from "../src/Assets/avt.jpg";
import Movie from "../src/Assets/movie.jpg";
import SmartHome from "../src/Assets/project2.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Movies Website",
    category: "React",
    image: Movie,
    description: "Free movie viewing website is constantly updated",
    link: "https://ndthah.vercel.app/",
  },
  {
    id: 2,
    title: "Smart Home",
    category: "Python/Arduino/C++",
    image: SmartHome,
    description: "Construction and design of smart house model",
    link: "https://github.com/nguyenducthanh04/Thiet-Ke-Nha-Thong-Minh"
  },
  // {
  //   id: 3,
  //   title: "Summoner's Rift",
  //   category: "RESTFUL API",
  //   image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   description: "Gaming community platform"
  // },
  // {
  //   id: 4,
  //   title: "Product Landing",
  //   category: "CSS/JAVASCRIPT",
  //   image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   description: "Razer product showcase"
  // },
  // {
  //   id: 5,
  //   title: "Portfolio Site",
  //   category: "SCSS/REACT",
  //   image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   description: "Personal portfolio website"
  // },
  // {
  //   id: 6,
  //   title: "Music Player",
  //   category: "RESTFUL API",
  //   image: "https://images.pexels.com/photos/1813346/pexels-photo-1813346.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   description: "Web music streaming app"
  // }
];

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [portfolioFilter, setPortfolioFilter] = useState('ALL');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // const filteredProjects = portfolioFilter === 'ALL' 
  //   ? projects 
  //   : projects.filter(project => project.category === portfolioFilter);

  const NavigationSidebar = () => (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 space-y-4">
      <button 
        onClick={() => setCurrentSection('home')}
        className={`w-14 h-14 rounded-full ${currentSection === 'home' ? 'bg-yellow-500' : 'bg-gray-800 hover:bg-yellow-500'} transition-all duration-300 flex items-center justify-center group`}
      >
        <Home size={24} className="text-white" />
      </button>
      <button 
        onClick={() => setCurrentSection('portfolio')}
        className={`w-14 h-14 rounded-full ${currentSection === 'portfolio' ? 'bg-yellow-500' : 'bg-gray-800 hover:bg-yellow-500'} transition-all duration-300 flex items-center justify-center group`}
      >
        <Briefcase size={24} className="text-white" />
      </button>
      <button 
        onClick={() => setCurrentSection('about')}
        className={`w-14 h-14 rounded-full ${currentSection === 'about' ? 'bg-yellow-500' : 'bg-gray-800 hover:bg-yellow-500'} transition-all duration-300 flex items-center justify-center group`}
      >
        <User size={24} className="text-white" />
      </button>
      <button 
        onClick={() => setCurrentSection('contact')}
        className={`w-14 h-14 rounded-full ${currentSection === 'contact' ? 'bg-yellow-500' : 'bg-gray-800 hover:bg-yellow-500'} transition-all duration-300 flex items-center justify-center group`}
      >
        <Mail size={24} className="text-white" />
      </button>
    </div>
  );

  const LightBulb = () => (
    <div className="fixed top-8 right-8 z-40">
      <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 cursor-pointer">
        <Lightbulb size={24} className="text-white" />
      </div>
    </div>
  );

  const HomePage = () => (
    <div className={`min-h-screen bg-black relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-yellow-500 to-orange-600 transform -skew-x-12 origin-top-left"></div>
      
      <div className="relative z-10 flex items-center min-h-screen px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
          <div className={`flex justify-center lg:justify-start transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <div className="w-80 h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300">
              <img 
                src={Avatar}
                alt="Nguyen Duc Thanh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className={`space-y-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-0.5 bg-yellow-500"></div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="text-yellow-500">I'm Duc Thanh</span>
              <br />
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              Hello mọi người! Mình là Nguyen Duc Thanh, mình chuẩn bị trở thành du học sinh Taiwan, mình đang theo học IT chuyên ngành phần mềm, sắp tới mình muốn theo học AI đặc biệt là AI Agent, đây là website của mình nơi sẽ chứa thông tin cá nhân của mình.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
              <button 
                onClick={() => setCurrentSection('portfolio')}
                className="group bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <span>PORTFOLIO</span>
                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => setCurrentSection('about')}
                className="group bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 text-yellow-500 hover:text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <span>ABOUT</span>
                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PortfolioPage = () => (
    <div className={`min-h-screen bg-black px-8 lg:px-16 py-16 transition-all duration-1000 ${currentSection === 'portfolio' ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="text-white">MY </span>
            <span className="text-yellow-500">PORTFOLIO</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition-all duration-500 transform hover:-translate-y-2 ${
                currentSection === 'portfolio' 
                  ? `animate-fade-in opacity-100 translate-y-0` 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href={project.link} target='_blank'>
                  <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project
                  </button>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-3">{project.description}</p>
                <span className="text-yellow-500 text-sm font-medium">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className={`min-h-screen bg-black px-8 lg:px-16 py-16 transition-all duration-1000 ${currentSection === 'about' ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="text-white">ABOUT </span>
            <span className="text-yellow-500">ME</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className={`transform transition-all duration-1000 delay-300 ${currentSection === 'about' ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <h2 className="text-3xl font-bold text-white mb-8">PERSONAL INFOS</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div><span className="text-gray-400">First Name:</span> <span className="text-white">Nguyen</span></div>
                <div><span className="text-gray-400">Birthday:</span> <span className="text-white">21 Years</span></div>
                <div><span className="text-gray-400">National:</span> <span className="text-white">Vietnam</span></div>
                <div><span className="text-gray-400">Phone:</span> <span className="text-white">0792185204</span></div>
                <div><span className="text-gray-400">Language:</span> <span className="text-white">漢語</span></div>
              </div>
              
              <div className="space-y-4">
                <div><span className="text-gray-400">Last Name:</span> <span className="text-white">Duc Thanh</span></div>
                <div><span className="text-gray-400">Sex:</span> <span className="text-white">Male</span></div>
                <div><span className="text-gray-400">Address:</span> <span className="text-white">Vietnam</span></div>
                <div><span className="text-gray-400">Facebook:</span> <span className="text-white">https://www.facebook.com/nguyen.uc.thanh.475548/</span></div>
                <div><span className="text-gray-400">Email:</span> <span className="text-white">dducthanh04@gmail.com</span></div>
              </div>
            </div>

            <button className="group bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-2 transform hover:scale-105">
              <Download size={20} />
              <span>DOWNLOAD CV</span>
            </button>
          </div>

          <div className={`transform transition-all duration-1000 delay-500 ${currentSection === 'about' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-yellow-500 mb-4">1+</div>
                <div className="text-gray-400 text-lg">
                  YEARS OF<br />EXPERIENCE
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold text-yellow-500 mb-4">7+</div>
                <div className="text-gray-400 text-lg">
                  COMPLETED<br />PROJECTS
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold text-yellow-500 mb-4">1+</div>
                <div className="text-gray-400 text-lg">
                  HAPPY<br />CUSTOMER
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold text-yellow-500 mb-4">1+</div>
                <div className="text-gray-400 text-lg">
                  AWARD<br />WON
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className={`min-h-screen bg-black px-8 lg:px-16 py-16 transition-all duration-1000 ${currentSection === 'contact' ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="text-white">GET IN </span>
            <span className="text-yellow-500">TOUCH</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className={`transform transition-all duration-1000 delay-300 ${currentSection === 'contact' ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <h2 className="text-3xl font-bold text-white mb-8">DON'T BE SHY !</h2>
            
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-black" />
                </div>
                <div>
                  <div className="text-white font-semibold">ADDRESS</div>
                  <div className="text-gray-300">Taiwan</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-black" />
                </div>
                <div>
                  <div className="text-white font-semibold">EMAIL</div>
                  <div className="text-gray-300">dducthanh04@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-black" />
                </div>
                <div>
                  <div className="text-white font-semibold">PHONE</div>
                  <div className="text-gray-300">0792185204</div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 cursor-pointer group">
                <a href='https://www.facebook.com/nguyen.uc.thanh.475548/' target="_blank">
                <Facebook size={20} className="text-white group-hover:text-black" />
                </a>
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 cursor-pointer group">
                <a href='https://github.com/nguyenducthanh04'>
                <Github size={20} className="text-white group-hover:text-black" />
                </a>
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-500 ${currentSection === 'contact' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="YOUR NAME"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-900 text-white rounded-full border border-gray-700 focus:border-yellow-500 focus:outline-none transition-all duration-300"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="YOUR EMAIL"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-900 text-white rounded-full border border-gray-700 focus:border-yellow-500 focus:outline-none transition-all duration-300"
                  required
                />
              </div>
              
              <input
                type="text"
                name="subject"
                placeholder="YOUR SUBJECT"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-gray-900 text-white rounded-full border border-gray-700 focus:border-yellow-500 focus:outline-none transition-all duration-300"
                required
              />
              
              <textarea
                name="message"
                placeholder="YOUR MESSAGE"
                rows={8}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-gray-900 text-white rounded-3xl border border-gray-700 focus:border-yellow-500 focus:outline-none transition-all duration-300 resize-none"
                required
              />
              
              <button
                type="submit"
                className="group bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
              >
                <Send size={20} />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {currentSection === 'home' && <HomePage />}
      {currentSection === 'portfolio' && <PortfolioPage />}
      {currentSection === 'about' && <AboutPage />}
      {currentSection === 'contact' && <ContactPage />}
      
      <NavigationSidebar />
      <LightBulb />
    </div>
  );
}

export default App;