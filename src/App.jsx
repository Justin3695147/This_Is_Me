import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, Map, Leaf, Code, GraduationCap, 
  User, Briefcase, Mail, Linkedin, Globe, 
  ChevronRight, Compass, Award, BarChart3,
  MapPin
} from 'lucide-react';
import justinImg from './assets/justin.jpg';

const Card = ({ children, color, className = "" }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.98 }}
    className={`p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-3xl shadow-2xl ${color} ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('About');
  const [mapScale, setMapScale] = useState('Singapore');
  const [hoveredExp, setHoveredExp] = useState('systemearth');

  const experienceData = {
    singapore: [
      { id: 'systemearth', company: "SystemEarth", location: "Keong Saik Road, Singapore", role: "Sustainability Intern", desc: "Pioneering EUDR reporting automation for sustainable supply chains and developing geospatial workflows for deforestation-free compliance." },
      { id: 'tembusu', company: "Tembusu Asia Consulting", location: "One Commonwealth, Singapore", role: "Carbon and Sustainability Intern", desc: "Conducted GHG Inventory audits and prepared sustainability reports aligned with GRI, ISSB S1, S2 frameworks." },
      { id: 'pasarfish', company: "Pasarfish", location: "Chinatown Complex, Singapore", role: "Research Assistant", desc: "Assisted in research initiatives focused on sustainable seafood markets and community-based fishery data collection." },
      { id: 'nus', company: "NUS", location: "Kent Ridge, Singapore", role: "Quantitative Reasoning Tutor", desc: "Tutored students in data-driven reasoning and quantitative analysis, simplifying complex statistical concepts." },
    ],
    global: [
      { id: 'asu', company: "Arizona State University", location: "Tempe, USA", role: "Exchange Program (6 Months)", desc: "Engaged in cross-cultural exchange and advanced sustainability coursework in the heart of the Sonoran Desert." },
      { id: 'thailand', company: "BangSaen Oyster Farmers", location: "Chonburi, Thailand", role: "Impact Experience Program (1 Year)", desc: "Created ecotourism initiatives for local farmers to develop new revenue streams and promote coastal conservation." },
      { id: 'vnu', company: "Vietnam National University", location: "Ho Chi Minh, Vietnam", role: "ASEAN Undergraduate Network Program", desc: "Sustainability Summer Camp focusing on regional urban resilience and Southeast Asian environmental challenges." },
      { id: 'bali', company: "Global Experience Program", location: "Bali, Indonesia", role: "Coastal Research (1 Month)", desc: "Immersive study of marine NGOs and coastal livelihoods, serving as the foundation for the award-winning Octopus management project." },
    ]
  };

  const navigation = [
    { name: 'About', icon: User },
    { name: 'Experience', icon: Briefcase },
    { name: 'Projects', icon: Map },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-16 font-sans selection:bg-emerald-400 selection:text-black">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <header className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="relative">
            <motion.div initial={{ rotate: -5, scale: 0.9 }} animate={{ rotate: 0, scale: 1 }} className="w-56 h-56 md:w-72 md:h-72 rounded-[3.5rem] overflow-hidden border-2 border-emerald-400/30 p-2 bg-[#111]">
              <img src={justinImg} alt="Justin Kam" className="w-full h-full object-cover rounded-[2.8rem]" onError={(e) => { e.target.src = "https://via.placeholder.com/400?text=Justin+Kam"; }} />
            </motion.div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-emerald-400 text-black px-6 py-1 rounded-full font-black italic text-sm whitespace-nowrap shadow-lg">
              Yosemite, CA
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-7xl md:text-[9rem] font-black italic uppercase tracking-tighter leading-[0.8] mb-6">
              JUSTIN <span className="text-emerald-400">KAM</span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl leading-tight">
              People, Planet, Prosperity <br/>
              <span className="text-white">ESG | Spatial Modeling | Tech integration </span>
            </p>
          </div>
        </header>

        {/* NAVIGATION */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-4 mb-12 bg-white/5 p-2 rounded-[2rem] w-fit border border-white/10">
          {navigation.map((tab) => (
            <button key={tab.name} onClick={() => setActiveTab(tab.name)} className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all ${activeTab === tab.name ? 'bg-emerald-400 text-black shadow-lg' : 'text-gray-400 hover:bg-white/5'}`}>
              <tab.icon size={14} /> {tab.name}
            </button>
          ))}
        </nav>

        {/* CONTENT AREA */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {activeTab === 'About' && (
              <>
                <div className="md:col-span-7 space-y-8">
                  <Card color="bg-white/5">
                    <h2 className="text-2xl font-black uppercase italic mb-4 text-emerald-400">Professional Summary</h2>
                    <p className="text-gray-300 leading-relaxed font-medium">
                      As a highly motivated and inquisitive professional, I'm passionate about driving tangible change through sustainability strategy and exploring tech integration. My experience in sustainability frameworks, due diligence, and emissions assurance and verification, allows me to thrive on independently tackling complex challenges and continuously deepening my understanding of today's evolving landscape.
                    </p>
                  </Card>
                  <Card color="bg-blue-600/5">
                    <h2 className="text-2xl font-black uppercase italic mb-6 flex items-center gap-3"><GraduationCap/> Education</h2>
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg">National University of Singapore</h3>
                          <p className="text-gray-400 italic">Bachelor of Environmental Studies (Minor in GIS)</p>
                        </div>
                        <span className="text-blue-400 font-bold text-xs uppercase">2023 — 2027</span>
                      </div>
                      <div className="p-4 bg-emerald-400/10 rounded-2xl border border-emerald-400/20">
                        <p className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-1">Academic Honors</p>
                        <p className="text-sm font-bold">Scholarships</p>
                        <p className="text-xs text-gray-400 italic">NASA Exchange Scholarship</p>
                        <p className="text-xs text-gray-400 italic">IFSA Scholarship</p>
                        <p className="text-xs text-gray-400 italic">STEER Grant</p>
                        <p className="text-sm font-bold mt-2">Dean's List</p>
                        <p className="text-xs text-gray-400 italic">3 time award winner</p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="md:col-span-5">
                  <Card color="bg-purple-600/5 h-full">
                    <h2 className="text-2xl font-black uppercase italic mb-6 flex items-center gap-3"><Code/> Technical Skillsets</h2>
                    <div className="space-y-6">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-purple-400 mb-3">Geospatial / GIS</p>
                        <div className="flex flex-wrap gap-2">{['ArcGIS Pro', 'QGIS', 'Earth Engine', 'Spatial Modeling'].map(s => (<span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs">{s}</span>))}</div>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-purple-400 mb-3">Data Science & Stats</p>
                        <div className="flex flex-wrap gap-2">{['Python', 'R Coding', 'SPSS', 'SQL', 'Radiant'].map(s => (<span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs">{s}</span>))}</div>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-purple-400 mb-3">ESG Frameworks</p>
                        <div className="flex flex-wrap gap-2">{['GRI', 'SASB', 'IFRS', 'EUDR', 'GHG Protocol'].map(s => (<span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs">{s}</span>))}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </>
            )}

            {activeTab === 'Experience' && (
              <div className="md:col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Local Track */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-black uppercase italic text-emerald-400 flex items-center gap-3">
                    <MapPin /> Local Footprint
                  </h2>
                  {experienceData.singapore.map((exp) => (
                    <Card key={exp.id} color="bg-emerald-400/5 border-emerald-400/10">
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-2 block">{exp.location}</span>
                      <h3 className="text-xl font-black italic uppercase leading-none">{exp.company}</h3>
                      <p className="text-sm font-bold text-white/60 mb-4">{exp.role}</p>
                      <p className="text-sm text-gray-300 leading-relaxed border-l border-emerald-400/30 pl-4">{exp.desc}</p>
                    </Card>
                  ))}
                </div>
                {/* Global Track */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-black uppercase italic text-blue-400 flex items-center gap-3">
                    <Globe /> Global Exposure
                  </h2>
                  {experienceData.global.map((exp) => (
                    <Card key={exp.id} color="bg-blue-400/5 border-blue-400/10">
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2 block">{exp.location}</span>
                      <h3 className="text-xl font-black italic uppercase leading-none">{exp.company}</h3>
                      <p className="text-sm font-bold text-white/60 mb-4">{exp.role}</p>
                      <p className="text-sm text-gray-400 leading-relaxed border-l border-blue-400/30 pl-4">{exp.desc}</p>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Projects' && (
              <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card color="bg-orange-600/5 h-full">
                  <div className="p-2 bg-orange-400/20 w-fit rounded-lg mb-4 text-orange-400"><Map size={24}/></div>
                  <h3 className="text-xl font-black uppercase mb-2">Octopus population data collection and visualisation</h3>
                  <p className="text-sm text-gray-400 mb-6 italic">Award-winning research on community-based fisheries.</p>
                  <div className="space-y-2 border-l-2 border-orange-400/30 pl-4 text-xs italic text-gray-300">
                    <p>• Created species identification dichotomous keys.</p>
                    <p>• Created low tech solutions for octopus data collection.</p>
                    <p>• Awarded NUS College Best Independent Study Prize 24/25.</p>
                  </div>
                </Card>
                <Card color="bg-blue-600/5 h-full">
                  <div className="p-2 bg-blue-400/20 w-fit rounded-lg mb-4 text-blue-400"><Globe size={24}/></div>
                  <h3 className="text-xl font-black uppercase mb-2">Personal projects on Earth Engine</h3>
                  <p className="text-sm text-gray-400 mb-6">Personal undertakings to explore the capabilities of improving sustainability decision making through geospatial analysis.</p>
                  <a href="https://my-project-1-488708.projects.earthengine.app/" target="_blank" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-tighter text-blue-400 hover:text-white transition-colors">Launch Earth Engine App <ChevronRight size={14}/></a>
                </Card>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <footer className="mt-32 pb-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
           <div className="text-center md:text-left">
             <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-600 mb-2">Justin Kam Portfolio © 2026</p>
             <p className="text-xs text-gray-400">Accurate LinkedIn Record • NUS Environmental Studies</p>
           </div>
           <div className="flex gap-4">
             <a href="https://www.linkedin.com/in/justin-kam-8068b61ab/" target="_blank" className="p-4 bg-white/5 rounded-2xl hover:bg-emerald-400 hover:text-black transition-all"><Linkedin size={20}/></a>
             <a href="mailto:e1122938@u.nus.edu" className="p-4 bg-white/5 rounded-2xl hover:bg-emerald-400 hover:text-black transition-all"><Mail size={20}/></a>
           </div>
        </footer>
      </div>
    </div>
  );
}