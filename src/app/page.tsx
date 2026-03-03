'use client'

import React, { useState, useMemo, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  GraduationCap, 
  Cpu, 
  Code2, 
  Briefcase,
  Trophy,
  ArrowRight,
  Search,
  Filter,
  X,
  FileText,
  Terminal,
  Server
} from 'lucide-react'
import { personalInfo, news, publications, projects, skills } from '@/data/portfolio'

// --- Constants & Types ---
const STAGGER_CHILDREN = 0.08
const ANIMATION_DURATION = 0.5

// --- Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: ANIMATION_DURATION, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: STAGGER_CHILDREN
    }
  }
}

// --- Components ---

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100] origin-left"
      style={{ scaleX }}
    />
  )
}

const Tag = ({ text, active = false, onClick }: { text: string, active?: boolean, onClick?: () => void }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 border ${
      active 
        ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20' 
        : 'bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-blue-400'
    }`}
  >
    {text}
  </motion.button>
)

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Dynamic filter logic
  const filteredPublications = useMemo(() => {
    return publications.filter(pub => {
      const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            pub.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            pub.authors.toLowerCase().includes(searchQuery.toLowerCase())
      
      const tags = pub.venue.toLowerCase() // Simple tag extraction from venue
      const matchesTag = !selectedTag || tags.includes(selectedTag.toLowerCase())
      
      return matchesSearch && matchesTag
    })
  }, [searchQuery, selectedTag])

  // Extract common venues/tags for filtering
  const allTags = ['ICRA', 'EMNLP', 'CoRL', 'Mathematics', 'Sensors', 'FinCausal', 'Chemistry', 'IEEE']

  if (!isMounted) return null

  return (
    <main className="min-h-screen hero-gradient bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <ScrollProgressBar />
      
      {/* Dynamic Navigation */}
      <nav className="fixed top-0 w-full z-50 py-4 pointer-events-none">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-effect rounded-2xl px-6 py-3 flex justify-between items-center shadow-lg pointer-events-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2"
            >
              <Terminal size={20} className="text-blue-600" />
              {personalInfo.name}
            </motion.div>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              {['about', 'news', 'publications', 'skills'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item}`} 
                  className="hover:text-blue-600 transition-colors capitalize flex items-center gap-1"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero: Higher Reactivity with Dynamic Text */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for immediate hiring
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
              <span className="block opacity-90">Building the</span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Cognitive Future</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              Research Engineer specializing in <span className="text-gray-900 dark:text-white font-bold border-b-2 border-blue-500/30">Computer Vision</span>, <span className="text-gray-900 dark:text-white font-bold border-b-2 border-purple-500/30">NLP</span>, and <span className="text-gray-900 dark:text-white font-bold border-b-2 border-indigo-500/30">Autonomous Systems</span>. 
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-24">
              <motion.a 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={personalInfo.cvs.general} 
                target="_blank" 
                className="bg-gray-900 dark:bg-white text-white dark:text-black px-10 py-5 rounded-2xl font-black shadow-2xl transition-all flex items-center justify-center gap-3 group"
              >
                ACCESS RESUME <FileText size={20} className="group-hover:rotate-12 transition-transform" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${personalInfo.email}`} 
                className="glass-effect px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 group"
              >
                INITIALIZE CONTACT <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* Publications: Highly Reactive Search & Filter */}
      <section id="publications" className="py-24 bg-white dark:bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold uppercase tracking-widest text-xs">
                <Cpu size={18} /> Research Repository
              </div>
              <h2 className="text-5xl font-black mb-6 tracking-tight">Technical Output</h2>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Filtering through {publications.length} peer-reviewed works across major venues like ICRA and EMNLP.
              </p>
            </div>

            {/* Reactive Search Bar */}
            <div className="w-full lg:w-96">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                <input 
                  type="text"
                  placeholder="Query research parameters..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-blue-500 focus:outline-none transition-all font-medium text-sm"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Tag Filter Cloud */}
          <div className="flex flex-wrap gap-2 mb-12">
            <Tag 
              text="ALL_ARCHIVES" 
              active={selectedTag === null} 
              onClick={() => setSelectedTag(null)} 
            />
            {allTags.map(tag => (
              <Tag 
                key={tag} 
                text={tag} 
                active={selectedTag === tag} 
                onClick={() => setSelectedTag(tag)} 
              />
            ))}
          </div>

          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode='popLayout'>
              {filteredPublications.map((pub, index) => (
                <motion.div 
                  key={pub.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="glass-effect rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/10 transition-all border border-gray-100 dark:border-gray-800 flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={pub.image} 
                      alt={pub.title} 
                      fill 
                      className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        className="bg-white text-black px-4 py-2 rounded-xl font-bold text-xs flex items-center justify-center gap-2 w-fit hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        EXPLORE FULL PAPER <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                  <div className="p-8 flex-grow">
                    <div className="text-[10px] font-black text-blue-600 mb-2 uppercase tracking-[0.2em]">{pub.venue}</div>
                    <h3 className="text-lg font-bold mb-4 leading-tight group-hover:text-blue-600 transition-colors">{pub.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed mb-6 font-medium">
                      {pub.description}
                    </p>
                    <div className="text-[10px] text-gray-400 font-mono mt-auto border-t border-gray-100 dark:border-gray-800 pt-4">
                      AUTHORS: {pub.authors}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredPublications.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center text-gray-400 font-mono"
            >
              NO MATCHING ARCHIVES FOUND.
            </motion.div>
          )}
        </div>
      </section>

      {/* Expertise: Senior Engineer Focus */}
      <section id="skills" className="py-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4 text-blue-400 font-bold uppercase tracking-widest text-xs">
                <Server size={18} /> System Capabilities
              </div>
              <h2 className="text-5xl font-black mb-8 tracking-tight">Technical Stack</h2>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed font-medium">
                Proven proficiency in high-performance computing, distributed systems perception, and real-time deep learning pipelines.
              </p>
              
              <div className="space-y-10">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-xs font-black mb-4 uppercase tracking-[0.3em] text-blue-500/70">{category}</h3>
                    <div className="flex flex-wrap gap-3">
                      {items.map(skill => (
                        <motion.span 
                          key={skill}
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                          className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 font-bold text-sm hover:border-blue-500/50 transition-all cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Visual for "Engineer" vibe */}
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full" />
              <div className="relative glass-effect p-1 bg-white/5 rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
                <div className="bg-gray-950 rounded-[36px] p-12 aspect-square flex flex-col justify-between font-mono">
                  <div className="space-y-4">
                    <div className="flex gap-2 text-green-500"><Terminal size={16} /> <span className="text-xs">SYSTEM_INITIALIZED</span></div>
                    <div className="h-1 w-full bg-blue-500/20 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="h-full w-1/3 bg-blue-500"
                      />
                    </div>
                    <div className="text-[10px] text-gray-500 leading-relaxed uppercase">
                      // PERCEPTION_PIPELINE.LOG<br/>
                      [OK] LIDAR_FUSION_SYNC: 23ms<br/>
                      [OK] VISION_INFERENCE_P50: 12ms<br/>
                      [OK] DISTRIBUTED_REPLICATION_FACTOR: 3<br/>
                      [WARN] AMBIENT_OCCLUSION_ESTIMATION_STDEV: 0.12
                    </div>
                  </div>
                  <div className="text-4xl font-black text-blue-500 opacity-20">01011001</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-24 text-center border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center gap-8 mb-12"
        >
          <a href={personalInfo.socials.github} target="_blank" className="text-gray-400 hover:text-blue-600 transition-colors"><Github size={24} /></a>
          <a href={personalInfo.socials.linkedin} target="_blank" className="text-gray-400 hover:text-blue-600 transition-colors"><Linkedin size={24} /></a>
          <a href={personalInfo.socials.twitter} target="_blank" className="text-gray-400 hover:text-blue-600 transition-colors"><Twitter size={24} /></a>
          <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-blue-600 transition-colors"><Mail size={24} /></a>
        </motion.div>
        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">© 2026 {personalInfo.name}</p>
        <div className="text-[10px] text-gray-400 mt-4 font-mono uppercase opacity-50">
          NODE_ENV: PRODUCTION // V_ARCHITECTURE: NEXT_GEN_APP_ROUTER
        </div>
      </footer>
    </main>
  )
}
