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
];

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme)
  };
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

  const NavigationSidebar = () => (
    <>
      {/* Desktop Navigation - Fixed position with stable layout */}
      <div className="hidden md:flex fixed right-6 lg:right-8 top-1/2 transform -translate-y-1/2 z-50 flex-col space-y-4">
        <button 
          onClick={() => setCurrentSection('home')}
          className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
            currentSection === 'home' 
              ? 'bg-yellow-500 shadow-lg shadow-yellow-500/30' 
              : 'bg-gray-800 hover:bg-yellow-500'
          }`}
        >
          <Home size={20} className="text-white" />
        </button>
        <button 
          onClick={() => setCurrentSection('portfolio')}
          className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
            currentSection === 'portfolio' 
              ? 'bg-yellow-500 shadow-lg shadow-yellow-500/30' 
              : 'bg-gray-800 hover:bg-yellow-500'
          }`}
        >
          <Briefcase size={20} className="text-white" />
        </button>
        <button 
          onClick={() => setCurrentSection('about')}
          className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
            currentSection === 'about' 
              ? 'bg-yellow-500 shadow-lg shadow-yellow-500/30' 
              : 'bg-gray-800 hover:bg-yellow-500'
          }`}
        >
          <User size={20} className="text-white" />
        </button>
        <button 
          onClick={() => setCurrentSection('contact')}
          className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
            currentSection === 'contact' 
              ? 'bg-yellow-500 shadow-lg shadow-yellow-500/30' 
              : 'bg-gray-800 hover:bg-yellow-500'
          }`}
        >
          <Mail size={20} className="text-white" />
        </button>
      </div>

      {/* Mobile Navigation - Bottom fixed bar */}
      <div style={{marginTop: "100px"}} className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900/80 backdrop-blur-sm rounded-full px-4 py-2 flex space-x-4">
        <button 
          onClick={() => setCurrentSection('home')}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            currentSection === 'home' ? 'bg-yellow-500' : 'bg-gray-800'
          }`}
        >
          <Home size={18} className="text-white" />
        </button>
        <button 
          onClick={() => setCurrentSection('portfolio')}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            currentSection === 'portfolio' ? 'bg-yellow-500' : 'bg-gray-800'
          }`}
        >
          <Briefcase size={18} className="text-white" />
        </button>
        <button 
          onClick={() => setCurrentSection('about')}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            currentSection === 'about' ? 'bg-yellow-500' : 'bg-gray-800'
          }`}
        >
          <User size={18} className="text-white" />
        </button>
        <button 
          onClick={() => setCurrentSection('contact')}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            currentSection === 'contact' ? 'bg-yellow-500' : 'bg-gray-800'
          }`}
        >
          <Mail size={18} className="text-white" />
        </button>
      </div>
    </>
  );

  const LightBulb = () => (
    <div className="fixed top-4 right-4 z-40" onClick={toggleTheme}>
      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 cursor-pointer">
        <Lightbulb size={18} className="text-white" />
      </div>
    </div>
  );

  const HomePage = () => (
    <div className={`min-h-screen ${theme === "dark" ? "bg-black" : "bg-light"} relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={ theme === "dark" ? "absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-yellow-500 to-orange-600 transform -skew-x-12 origin-top-left" : "absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-yellow-500 to-lime-600 transform -skew-x-12 origin-top-left"}></div>
      
      <div className="relative z-10 flex items-center min-h-screen px-4 sm:px-6 lg:px-16">
        <div style={{marginBottom: "100px"}} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-7xl mx-auto">
          <div className={`flex justify-center lg:justify-start transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <div className="w-64 h-80 sm:w-72 sm:h-96 bg-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300">
              <img 
                src={Avatar}
                alt="Nguyen Duc Thanh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className={`space-y-4 sm:space-y-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className="flex items-center space-x-4 mb-4 sm:mb-6">
              <div className={`w-12 h-0.5 ${theme === "dark" ? "bg-yellow-500" : "bg-lime-500"} `}></div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:text-6xl font-bold">
              <span className={`${theme === "dark" ? "text-yellow-500" : "text-lime-500"}`}>I'm Duc Thanh</span>
              <br />
            </h1>

            <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl`}>
              Hello mọi người! Mình là Nguyen Duc Thanh, mình chuẩn bị trở thành du học sinh Taiwan chuyên ngành Computer Science, mình đang theo học IT chuyên ngành phần mềm, sắp tới mình muốn theo học AI đặc biệt là AI Agent, đây là website của mình nơi sẽ chứa thông tin cá nhân của mình.
            </p>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-6">
              <button 
                onClick={() => setCurrentSection('portfolio')}
                className={`group ${theme === "dark" ? "bg-yellow-500 hover:bg-yellow-600" : "bg-lime-500 hover:bg-lime-600"} text-black font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 text-sm sm:text-base`}
              >
                <span>PORTFOLIO</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => setCurrentSection('about')}
                className={`group bg-transparent border-2 ${theme === "dark" ? "border-yellow-500 hover:bg-yellow-500 text-yellow-500" : "border-lime-500 hover:bg-lime-500 text-lime-500"} hover:text-black font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 text-sm sm:text-base`}
              >
                <span>ABOUT</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PortfolioPage = () => (
    <div className={`min-h-screen ${theme === "dark" ? "bg-black" : "bg-light"} px-4 sm:px-6 lg:px-16 py-12 sm:py-16 transition-all duration-1000 ${currentSection === 'portfolio' ? 'opacity-100' : 'opacity-0'}`}>
      <div style={{marginBottom: "100px"}} className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:text-6xl font-bold mb-6">
            <span className={`${theme === "dark" ? "text-white" : "text-grey-600"}`}>MY </span>
            <span className={`${theme === "dark" ? "text-yellow-500" : "text-lime-500"}`}>PROJECT</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="w-full h-40 sm:h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href={project.link} target='_blank'>
                  <button className={`${theme === "dark" ? "bg-yellow-500 text-black" : "bg-lime-500 text-grey"} px-4 py-2 sm:px-6 rounded-full font-semibold transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-sm`}>
                    View Project
                  </button>
                  </a>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base mb-3">{project.description}</p>
                <span className="text-yellow-500 text-xs sm:text-sm font-medium">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className={`min-h-screen ${theme === "dark" ? "bg-black" : "bg-light"} px-4 sm:px-6 lg:px-16 py-12 sm:py-16 transition-all duration-1000 ${currentSection === 'about' ? 'opacity-100' : 'opacity-0'}`}>
      <div style = {{marginBottom: "100px"}} className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:text-6xl font-bold mb-6">
            <span className={`${theme === "dark" ? "text-white" : "text-grey"}`}>ABOUT </span>
            <span className={`${theme === "dark" ? "text-yellow-500" : "text-lime-500"}`}>ME</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`transform transition-all duration-1000 delay-300 ${currentSection === 'about' ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">PERSONAL INFOS</h2>
            
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8">
              <div className="space-y-3 sm:space-y-4">
                <div><span className="text-gray-400 text-sm">First Name:</span> <span className={`${theme === "dark" ? "text-white" : "text-grey-600"}text-white text-sm sm:text-base`}>Nguyen</span></div>
                <div><span className="text-gray-400 text-sm">Birthday:</span> <span className={`${theme === "dark" ? "text-white" : "text-grey-600"}text-white text-sm sm:text-base`}>21 Years</span></div>
                <div><span className="text-gray-400 text-sm">National:</span> <span className={`${theme === "dark" ? "text-white" : "text-grey-600"}text-white text-sm sm:text-base`}>Vietnam</span></div>
                <div><span className="text-gray-400 text-sm">Phone:</span> <span className={`${theme === "dark" ? "text-white" : "text-grey-600"}text-white text-sm sm:text-base`}>0792185204</span></div>
                <div><span className="text-gray-400 text-sm">Language:</span> <span className={`${theme === "dark" ? "text-white" : "text-grey-600"}text-white text-sm sm:text-base`}>漢語</span></div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div><span className="text-gray-400 text-sm">Last Name:</span> <span className={`${theme === "dark" ? "text-white" : "text-grey-600"} text-sm sm:text-base`}>Duc Thanh</span></div>
                <div><span className="text-gray-400 text-sm">Sex:</span> <span className={`${theme === "dark" ? "text-white" : "text-grey-600"} text-sm sm:text-base`}>Male</span></div>
                <div><span className="text-gray-400 text-sm">Address:</span> <span className={`${theme === "dark" ? "text-white" : "text-grey-600"} text-sm sm:text-base`}>Vietnam</span></div>
                <div><span className="text-gray-400 text-sm">Facebook:</span> <span className={`${theme === "dark" ? "text-white" : "text-grey-600"} text-sm sm:text-base`}>https://www.facebook.com/nguyen.uc.thanh.475548/</span></div>
                <div><span className="text-gray-400 text-sm">Email:</span> <span className={`${theme === "dark" ? "text-white" : "text-grey-600"} text-sm sm:text-base`}>dducthanh04@gmail.com</span></div>
              </div>
            </div>

            <button className={`group ${theme === "dark" ? "bg-yellow-500 hover:bg-yellow-600": "bg-lime-500 hover:bg-lime-600"} text-black font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 text-sm sm:text-base`}>
              <Download size={18} />
              <span>DOWNLOAD CV</span>
            </button>
          </div>

          <div className={`transform transition-all duration-1000 delay-500 ${currentSection === 'about' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              <div className="text-center">
                <div className={`text-4xl sm:text-6xl font-bold ${theme === "dark" ? "text-yellow-500" : "text-lime-500"} mb-2 sm:mb-4`}>1+</div>
                <div className="text-gray-400 text-sm sm:text-lg">
                  YEARS OF<br />EXPERIENCE
                </div>
              </div>
              
              <div className="text-center">
                <div className={`text-4xl sm:text-6xl font-bold ${theme === "dark" ? "text-yellow-500" : "text-lime-500"} mb-2 sm:mb-4`}>7+</div>
                <div className="text-gray-400 text-sm sm:text-lg">
                  COMPLETED<br />PROJECTS
                </div>
              </div>
              
              <div className="text-center">
                <div className={`text-4xl sm:text-6xl font-bold ${theme === "dark" ? "text-yellow-500" : "text-lime-500"} mb-2 sm:mb-4`}>1+</div>
                <div className="text-gray-400 text-sm sm:text-lg">
                  HAPPY<br />CUSTOMER
                </div>
              </div>
              
              <div className="text-center">
                <div className={`text-4xl sm:text-6xl font-bold ${theme === "dark" ? "text-yellow-500" : "text-lime-500"} mb-2 sm:mb-4`}>1+</div>
                <div className="text-gray-400 text-sm sm:text-lg">
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
    <div className={`min-h-screen ${theme === "dark" ? "bg-black" : "bg-light"} px-4 sm:px-6 lg:px-16 py-12 sm:py-16 transition-all duration-1000 ${currentSection === 'contact' ? 'opacity-100' : 'opacity-0'}`}>
      <div style = {{marginBottom: "100px"}} className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:text-6xl font-bold mb-6">
            <span className={`${theme === "dark" ? "text-white" : "text-grey"}`}>GET IN </span>
            <span className={`${theme === "dark" ? "text-yellow-500" : "text-lime-500"}`}>TOUCH</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`transform transition-all duration-1000 delay-300 ${currentSection === 'contact' ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <h2 className={`text-2xl sm:text-3xl font-bold ${theme === "dark" ? "text-white" : "text-grey-400"} mb-6 sm:mb-8`}>DON'T BE SHY !</h2>
            
            <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-500"} text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 leading-relaxed`}>
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${theme === "dark" ? "bg-yellow-500" : "bg-lime-500"} rounded-full flex items-center justify-center`}>
                  <MapPin size={16} className="text-black" />
                </div>
                <div>
                  <div className={`${theme === "dark" ? "text-white" : "text-grey-500"} font-semibold text-sm sm:text-base`}>ADDRESS</div>
                  <div className={` ${theme === "dark" ? "text-gray-300" : "text-gray-400"} text-sm sm:text-base`}>Taiwan</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${theme === "dark" ? "bg-yellow-500" : "bg-lime-500"} rounded-full flex items-center justify-center`}>
                  <Mail size={16} className="text-black" />
                </div>
                <div>
                  <div className={`${theme === "dark" ? "text-white" : "text-grey-500"} font-semibold text-sm sm:text-base`}>EMAIL</div>
                  <div className={` ${theme === "dark" ? "text-gray-300" : "text-gray-400"} text-sm sm:text-base`}>dducthanh04@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${theme === "dark" ? "bg-yellow-500" : "bg-lime-500"} rounded-full flex items-center justify-center`}>
                  <Phone size={16} className="text-black" />
                </div>
                <div>
                  <div className={`${theme === "dark" ? "text-white" : "text-grey-500"} font-semibold text-sm sm:text-base`}>PHONE</div>
                  <div className={` ${theme === "dark" ? "text-gray-300" : "text-gray-400"} text-sm sm:text-base`}>0792185204</div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 cursor-pointer group">
                <a href='https://www.facebook.com/nguyen.uc.thanh.475548/' target="_blank">
                <Facebook size={18} className="text-white group-hover:text-black" />
                </a>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 cursor-pointer group">
                <a href='https://github.com/nguyenducthanh04'>
                <Github size={18} className="text-white group-hover:text-black" />
                </a>
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-500 ${currentSection === 'contact' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="YOUR NAME"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-gray-900 text-white rounded-full border border-gray-700 focus:border-yellow-500 focus:outline-none transition-all duration-300 text-sm"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="YOUR EMAIL"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-gray-900 text-white rounded-full border border-gray-700 focus:border-yellow-500 focus:outline-none transition-all duration-300 text-sm"
                  required
                />
              </div>
              
              <input
                type="text"
                name="subject"
                placeholder="YOUR SUBJECT"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-gray-900 text-white rounded-full border border-gray-700 focus:border-yellow-500 focus:outline-none transition-all duration-300 text-sm"
                required
              />
              
              <textarea
                name="message"
                placeholder="YOUR MESSAGE"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-gray-900 text-white rounded-2xl sm:rounded-3xl border border-gray-700 focus:border-yellow-500 focus:outline-none transition-all duration-300 resize-none text-sm"
                required
              />
              
              <button
                type="submit"
                className={`group ${theme === "dark" ? "bg-yellow-500 hover:bg-yellow-600" : "bg-lime-500 hover:bg-lime-600"}  text-black font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 text-sm sm:text-base`}
              >
                <Send size={18} />
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