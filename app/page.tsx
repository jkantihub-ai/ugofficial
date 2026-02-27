'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Award,
  Briefcase
} from 'lucide-react';

// Real data extracted from source website
const DATA = {
  hero: {
    name: "Utpal Ghosh",
    title: "Serial Entrepreneur",
    subtitle: "Dreamer & Visionary",
    text: "Passionate about Health & Fitness. Mentor for Start-ups. Building brands that make an impact.",
    image: "/images/hero-img.jpg",
    bgImage: "/images/hero-bg.jpg"
  },
  about: {
    title: "Hi There! I'm Utpal Ghosh",
    subtitle: "Dreamer & Entrepreneur",
    image: "/images/about.jpg",
    details: [
      { label: "Founder", value: "Protein Box" },
      { label: "Co-Founder", value: "Ekaar" },
      { label: "Mentorship", value: "For Start-Ups" },
      { label: "Building Brands", value: "Protein Box, Ekaar Wellness, Swagam Hospitality" },
      { label: "Business Domain", value: "Health & Wellness, F&B, Travel & Tourism" },
      { label: "Whatsapp", value: "+91 88509-16053" },
      { label: "Email", value: "utpalghoshofficial@gmail.com" }
    ],
    lifeLesson: "The Story of Utpal & Healthcode Wellness is a testament to the reliance of human spirit. It reminds us that through determination, passion & a genuine desire to uplift others can become extra ordinary entrepreneurs, bringing forth positive change in the world."
  },
  ventures: [
    {
      title: "Healthcode Wellness",
      category: "Fitness & Gym",
      role: "Start-up",
      description: "Startup for Creating Awareness for Health & Fitness."
    },
    {
      title: "Healthcode Protein Box",
      category: "Food & Nutrition",
      role: "Founder",
      description: "The aim is to deliver Healthy Diet to fitness freaks."
    },
    {
      title: "Svagam",
      category: "Hospitality",
      role: "Boutique Hotel",
      description: "A Boutique Hotel centrally Located in Nagpur."
    },
    {
      title: "Ekaar",
      category: "Travel & Tourism",
      role: "Elderly Care",
      description: "Ekaar Wellness is dealing with Tourism for Elderly People."
    }
  ],
  expertise: [
    { title: "Leadership", level: 95 },
    { title: "Starting, Building & Scaling up Businesses", level: 75 },
    { title: "Brand Communication", level: 90 },
    { title: "Strategy - Sales & Marketing", level: 85 },
    { title: "Talent Management", level: 80 },
    { title: "Operation Management", level: 90 }
  ],
  journey: {
    corporate: [
      { title: "Altisource Portfolio Solutions", duration: "2007-2017", role: "Marketing Head", location: "Delhi" },
      { title: "Aegis Collection", duration: "2005-2007", role: "Team Leader", location: "Nagpur" },
      { title: "Global Vantage", duration: "2003-2005", role: "Marketing Manager", location: "Mumbai" }
    ]
  },
  achievements: [
    {
      title: "T-Hub Graduation",
      description: "Receiving Graduation Certificate from T-Hub CEO Srinivas Rao Mahankali (MSR).",
      image: "/images/blog1.jpg"
    },
    {
      title: "Leap to Unicorn",
      description: "Protein Box shortlisted as top 400 start-ups in India amongst 6000+ applications.",
      image: "/images/blog2.jpg"
    },
    {
      title: "With Nitin Gadkari",
      description: "With Shri Nitin Gadkari ji in Traffic Rewards Inauguration Ceremony in Goa.",
      image: "/images/blog3.jpg"
    }
  ],
  social: [
    { name: "LinkedIn", icon: <Linkedin size={20} />, link: "https://in.linkedin.com/in/utpal-ghosh-a93b4a16" },
    { name: "Instagram", icon: <Instagram size={20} />, link: "https://www.instagram.com/utpalghosh30" },
    { name: "Facebook", icon: <Facebook size={20} />, link: "https://www.facebook.com/utpalghosh30" },
    { name: "Whatsapp", icon: <MessageCircle size={20} />, link: "https://wa.me/918850916053" }
  ]
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-stone-500 font-mono uppercase tracking-widest text-sm"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function PortfolioPage() {
  return (
    <div className="bg-[#F5F5F0] min-h-screen text-stone-900 font-sans selection:bg-stone-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#F5F5F0]/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif italic font-bold tracking-tighter">UG.</div>
          <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
            <a href="#about" className="hover:text-stone-500 transition-colors">About</a>
            <a href="#ventures" className="hover:text-stone-500 transition-colors">Ventures</a>
            <a href="#expertise" className="hover:text-stone-500 transition-colors">Expertise</a>
            <a href="#journey" className="hover:text-stone-500 transition-colors">Journey</a>
            <a href="#contact" className="px-5 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-stone-400 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-300 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-stone-500 mb-6 block">
              {DATA.hero.subtitle}
            </span>
            <h1 className="text-7xl md:text-9xl font-serif italic leading-[0.85] mb-8 tracking-tighter">
              {DATA.hero.name.split(' ')[0]}<br />
              <span className="ml-12 md:ml-24">{DATA.hero.name.split(' ')[1]}</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 max-w-md leading-relaxed mb-10 font-light">
              {DATA.hero.text}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="group flex items-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-all hover:scale-105"
              >
                Let&apos;s Connect
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 px-4">
                {DATA.social.map((s, i) => (
                  <a 
                    key={i} 
                    href={s.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-stone-900 transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src={DATA.hero.image} 
              alt={DATA.hero.name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div className="sticky top-32">
              <SectionHeading title="The Visionary" subtitle="About Utpal Ghosh" />
              <div className="space-y-8">
                <p className="text-2xl leading-relaxed text-stone-700 font-light italic">
                  &ldquo;{DATA.about.lifeLesson}&rdquo;
                </p>
                <div className="grid grid-cols-1 gap-6">
                  {DATA.about.details.map((detail, i) => (
                    <div key={i} className="border-b border-stone-100 pb-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400 block mb-1">
                        {detail.label}
                      </span>
                      <span className="text-stone-900 font-medium">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl"
              >
                <img 
                  src={DATA.about.image} 
                  alt="Utpal Ghosh" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="bg-stone-50 p-12 rounded-3xl border border-stone-100">
                <h3 className="text-2xl font-serif italic mb-6">Entrepreneurial Spirit</h3>
                <p className="text-stone-600 leading-relaxed mb-8">
                  Utpal&apos;s journey is defined by a relentless pursuit of excellence and a deep-rooted desire to create value. From health and wellness to hospitality, his ventures are built on the foundation of integrity and innovation.
                </p>
                <div className="flex items-center gap-4 text-stone-900 font-mono text-xs uppercase tracking-widest">
                  <Award size={20} className="text-stone-400" />
                  Serial Entrepreneur & Mentor
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="ventures" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Ventures" subtitle="Building Brands" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DATA.ventures.map((venture, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white p-8 rounded-3xl border border-stone-200 hover:border-stone-900 transition-all hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                  <Briefcase size={20} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400 mb-2 block">
                  {venture.category}
                </span>
                <h3 className="text-xl font-serif italic mb-4 group-hover:text-stone-900">
                  {venture.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {venture.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-32 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading title="Expertise" subtitle="Skills & Mastery" />
              <p className="text-stone-400 text-lg leading-relaxed mb-12 font-light">
                With over 15 years of corporate experience and a successful entrepreneurial track record, Utpal brings a unique blend of strategic thinking and operational excellence.
              </p>
              <div className="space-y-8">
                {DATA.expertise.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-serif italic text-lg">{skill.title}</span>
                      <span className="font-mono text-xs text-stone-500">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-stone-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-stone-800 rounded-3xl rotate-3 scale-105 opacity-20" />
              <div className="relative bg-stone-800/50 backdrop-blur-xl p-12 rounded-3xl border border-white/5">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-serif italic mb-2">15+</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-stone-500">Years Exp</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-serif italic mb-2">4+</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-stone-500">Ventures</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-serif italic mb-2">100+</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-stone-500">Mentored</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-serif italic mb-2">10+</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-stone-500">Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="The Journey" subtitle="Experience & Growth" />
          <div className="space-y-12">
            {DATA.journey.corporate.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-8 md:items-center p-8 bg-white rounded-3xl border border-stone-100 hover:border-stone-300 transition-all"
              >
                <div className="md:w-48 font-mono text-sm text-stone-400">
                  {job.duration}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif italic mb-1">{job.title}</h3>
                  <p className="text-stone-500 font-medium uppercase tracking-widest text-[10px]">
                    {job.role} • {job.location}
                  </p>
                </div>
                <div className="text-stone-300">
                  <ChevronRight size={32} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Gallery" subtitle="Moments & Milestones" />
          <div className="grid md:grid-cols-3 gap-8">
            {DATA.achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h3 className="text-white text-xl font-serif italic mb-2">{item.title}</h3>
                  <p className="text-stone-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <SectionHeading title="Get in Touch" subtitle="Let&apos;s Collaborate" />
              <p className="text-stone-500 text-lg leading-relaxed mb-12 font-light">
                Whether it&apos;s a new venture, mentorship, or just a conversation about health and fitness, I&apos;m always open to connecting with like-minded individuals.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-stone-400 mb-1">Email</div>
                    <a href="mailto:utpalghoshofficial@gmail.com" className="text-lg font-medium hover:text-stone-500 transition-colors">
                      utpalghoshofficial@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-stone-400 mb-1">Phone</div>
                    <a href="tel:+918850916053" className="text-lg font-medium hover:text-stone-500 transition-colors">
                      +91 88509-16053
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-stone-400 mb-1">Location</div>
                    <div className="text-lg font-medium">Goa, India</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 p-12 rounded-[2rem] border border-stone-100">
              <form className="space-y-6" suppressHydrationWarning>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-stone-400 ml-1">Name</label>
                    <input type="text" className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-stone-900 transition-colors" placeholder="Your Name" suppressHydrationWarning />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-stone-400 ml-1">Email</label>
                    <input type="email" className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-stone-900 transition-colors" placeholder="Your Email" suppressHydrationWarning />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-stone-400 ml-1">Subject</label>
                  <input type="text" className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-stone-900 transition-colors" placeholder="Subject" suppressHydrationWarning />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-stone-400 ml-1">Message</label>
                  <textarea rows={5} className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-stone-900 transition-colors resize-none" placeholder="Your Message" suppressHydrationWarning />
                </div>
                <button className="w-full py-5 bg-stone-900 text-white rounded-2xl font-serif italic text-xl hover:bg-stone-800 transition-all hover:scale-[1.02]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-3xl font-serif italic font-bold tracking-tighter">UG.</div>
          <div className="flex gap-8 text-stone-400 font-mono text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Terms of Service</a>
          </div>
          <div className="text-stone-400 font-mono text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Utpal Ghosh. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
