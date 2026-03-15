import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, Map, Leaf, Code, GraduationCap, 
  User, Briefcase, Mail, Linkedin, Globe, 
  FileText, BarChart3, ChevronRight 
} from 'lucide-react';

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
        
        {/* HEADER / FRONT COVER SECTION */}
        <header className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="relative">
            <motion.div 
              initial={{ rotate: -5, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              className="w-56 h-56 md:w-72 md:h-72 rounded-[3.5rem] overflow-hidden border-2 border-emerald-400/30 p-2 bg-[#111]"
            >
              <img 
                src="/justin.jpg" 
                alt="Justin Kam" 
                className="w-full h-full object-cover rounded-[2.8rem]"
                onError={(e) => { e.target.src = "https://via.placeholder.com/400?text=Justin+Kam"; }}
              />
            </motion.div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-emerald-400 text-black px-6 py-1 rounded-full font-black italic text-sm whitespace-nowrap shadow-[0_10px_20px_rgba(52,211,153,0.3)]">
              Yosemite, CA
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-7xl md:text-[9rem] font-black italic uppercase tracking-tighter leading-[0.8] mb-6"
            >
              JUSTIN <span className="text-emerald-400">KAM</span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl leading-tight">
              Bachelor of Environmental Studies with a minor in GIS <br/>
              <span className="text-white">ESG | Decarbonization | Spatial Modeling | Human Rights</span>
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              <a href="https://www.linkedin.com/in/justin-kam-8068b61ab/" target="_blank" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 hover:text-white transition-colors">
                <Linkedin size={16}/> LinkedIn Profile
              </a>
              <span className="text-gray-700">|</span>
              <a href="mailto:e1122938@u.nus.edu" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                <Mail size={16}/> Contact
              </a>
            </div>
          </div>
        </header>

        {/* NAVIGATION TABS */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-4 mb-12 bg-white/5 p-2 rounded-[2rem] w-fit border border-white/10">
          {navigation.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all ${
                activeTab === tab.name 
                ? 'bg-emerald-400 text-black shadow-lg' 
                : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              <tab.icon size={14} /> {tab.name}
            </button>
          ))}
        </nav>

        {/* CONTENT AREA */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8"
          >
            {activeTab === 'About' && (
              <>
                <div className="md:col-span-7 space-y-8">
                  <Card color="bg-white/5">
                    <h2 className="text-2xl font-black uppercase italic mb-4 text-emerald-400">Professional Summary</h2>
                    <p className="text-gray-300 leading-relaxed font-medium">
                      As a highly motivated and inquisitive sustainability professional, I'm passionate about driving tangible change through sustainability strategy. With experience spanning sustainability reporting, ESG consulting, and emissions assurance and verification, I thrive on independently tackling complex challenges and continuously deepening my understanding of today's evolving landscape. I'm actively seeking opportunities to contribute to innovative, meaningful solutions and make a real impact.
                    </p>
                  </Card>
                  <Card color="bg-blue-600/5">
                    <h2 className="text-2xl font-black uppercase italic mb-6 flex items-center gap-3"><GraduationCap/> Education</h2>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-lg">National University of Singapore</h3>
                          <span className="text-blue-400 font-bold text-xs uppercase">2023 — 2027</span>
                        </div>
                        <p className="text-gray-400 italic">Bachelor of Environmental Studies (Minor in GIS)</p>
                      </div>
                      <div className="p-4 bg-emerald-400/10 rounded-2xl border border-emerald-400/20">
                        <p className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-1">Academic Honors</p>
                        <p className="text-sm font-bold">Best Independent Study Prize (Top of 200+ students)</p>
                        <p className="text-xs text-gray-400 mt-1 italic">GPA: 4.87 / 5.0 (Dean's List potential)</p>
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
                        <div className="flex flex-wrap gap-2">
                          {['ArcGIS Pro', 'QGIS', 'Earth Engine', 'Spatial Modeling'].map(s => (
                            <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs">{s}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-purple-400 mb-3">Data Science & Stats</p>
                        <div className="flex flex-wrap gap-2">
                          {['Python', 'R Statistical', 'SPSS', 'SQL', 'Radiant'].map(s => (
                            <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs">{s}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-purple-400 mb-3">ESG Frameworks</p>
                        <div className="flex flex-wrap gap-2">
                          {['GRI', 'SASB', 'IFRS', 'EUDR', 'GHG Protocol'].map(s => (
                            <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </>
            )}

            {activeTab === 'Experience' && (
              <div className="md:col-span-12 space-y-6">
                <Card color="bg-emerald-600/5">
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-black italic uppercase text-emerald-400">SystemEarth</h3>
                      <p className="text-lg font-bold">Sustainability Intern</p>
                    </div>
                    <span className="bg-white/5 px-4 py-2 rounded-xl text-xs font-bold border border-white/10">Jan 2026 — Present</span>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex gap-3 items-start"><ChevronRight size={18} className="text-emerald-400 shrink-0 mt-1"/> <span>Pioneering <b>EUDR reporting automation</b> for sustainable supply chains.</span></li>
                    <li className="flex gap-3 items-start"><ChevronRight size={18} className="text-emerald-400 shrink-0 mt-1"/> <span>Developing geospatial workflows to streamline client deforestation-free compliance.</span></li>
                  </ul>
                </Card>

                <Card color="bg-white/5">
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-black italic uppercase text-white">Tembusu Asia Consulting</h3>
                      <p className="text-lg font-bold text-gray-400">Sustainability Intern (Carbon Consulting)</p>
                    </div>
                    <span className="bg-white/5 px-4 py-2 rounded-xl text-xs font-bold border border-white/10">May 2025 — Aug 2025</span>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex gap-3 items-start"><ChevronRight size={18} className="text-gray-500 shrink-0 mt-1"/> <span>Conducted <b>GHG Inventory audits</b> (Scope 1, 2, & 3) for listed companies.</span></li>
                    <li className="flex gap-3 items-start"><ChevronRight size={18} className="text-gray-500 shrink-0 mt-1"/> <span>Prepared Sustainability Reports aligned with <b>GRI and SASB</b> frameworks.</span></li>
                    <li className="flex gap-3 items-start"><ChevronRight size={18} className="text-gray-500 shrink-0 mt-1"/> <span>Performed gap analysis for clients transitioning to IFRS S1/S2 climate disclosures.</span></li>
                  </ul>
                </Card>
              </div>
            )}

            {activeTab === 'Projects' && (
              <>
                <div className="md:col-span-6">
                  <Card color="bg-orange-600/5 h-full">
                    <div className="p-2 bg-orange-400/20 w-fit rounded-lg mb-4 text-orange-400"><Map size={24}/></div>
                    <h3 className="text-xl font-black uppercase mb-2">Lombok Octopus Management</h3>
                    <p className="text-sm text-gray-400 mb-6">Independent research project collaborating with JARI to manage artisanal fisheries for a community of 12,000.</p>
                    <div className="space-y-2 border-l-2 border-orange-400/30 pl-4 text-xs italic text-gray-300">
                      <p>• Created species identification dichotomous keys.</p>
                      <p>• Utilized GIS for population density modeling.</p>
                      <p>• Awarded Best Independent Study Prize 24/25.</p>
                    </div>
                  </Card>
                </div>
                <div className="md:col-span-6">
                  <Card color="bg-blue-600/5 h-full">
                    <div className="p-2 bg-blue-400/20 w-fit rounded-lg mb-4 text-blue-400"><Globe size={24}/></div>
                    <h3 className="text-xl font-black uppercase mb-2">Offshore Windfarm Modeling</h3>
                    <p className="text-sm text-gray-400 mb-6">Multi-criteria decision analysis using ArcGIS to determine suitability for renewable energy sites.</p>
                    <a href="https://my-project-1-488708.projects.earthengine.app/" target="_blank" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-tighter text-blue-400 hover:text-white transition-colors">
                      Launch Earth Engine App <ChevronRight size={14}/>
                    </a>
                  </Card>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <footer className="mt-32 pb-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
           <div className="text-center md:text-left">
             <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-600 mb-2">Portfolio 2026</p>
             <p className="text-xs text-gray-400">Built with React, Framer Motion, and Tailwind CSS</p>
           </div>
           <div className="flex gap-4">
             <a href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-emerald-400 hover:text-black transition-all"><Linkedin size={20}/></a>
             <a href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-emerald-400 hover:text-black transition-all"><Mail size={20}/></a>
           </div>
        </footer>
      </div>
    </div>
  );
}