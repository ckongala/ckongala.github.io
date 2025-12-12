'use client';
import { useState, useEffect } from 'react';
import { Linkedin, Github, MoonStarsFill, SunFill } from 'react-bootstrap-icons';
import { useTheme } from 'next-themes';
import logo from '@/images/logo.jpeg';
import Image from 'next/image';

function NavbarOverlay(){
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
      setMounted(true);
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);

        const sections = ['home', 'experience', 'education', 'skills', 'projects', 'certifications', 'about'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) setActiveSection(current);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
      { href: '#experience', label: 'Experience' },
      { href: '#education', label: 'Education' },
      { href: '#skills', label: 'Skills' },
      { href: '#projects', label: 'Projects' },
      { href: '#certifications', label: 'Certifications' },
      { href: '#about', label: 'About' },
    ];

    return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-primary-200/50 dark:border-gray-700/50 shadow-lg shadow-primary-100/20 dark:shadow-gray-900/20'
          : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-accent-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <Image
                  className='relative rounded-full ring-2 ring-primary-400/50 dark:ring-primary-500/50 group-hover:ring-accent-500 transition-all'
                  src={logo}
                  alt="Personal Logo"
                  width={45}
                  height={45}
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
                Chinni Krishna Kongala
              </span>
            </a>

            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.href.substring(1)
                      ? 'text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/30'
                      : 'text-neutral-700 dark:text-neutral-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-primary-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-neutral-300 dark:border-gray-600">
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-primary-50 dark:hover:bg-gray-800 rounded-lg transition-all"
                    aria-label="Toggle theme"
                  >
                    {theme === 'dark' ? <SunFill size={20} /> : <MoonStarsFill size={20} />}
                  </button>
                )}
                <a
                  href="https://www.linkedin.com/in/chinni-krishna-kongala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-primary-50 dark:hover:bg-gray-800 rounded-lg transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/ckongala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-primary-50 dark:hover:bg-gray-800 rounded-lg transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.hackerrank.com/profile/ckongala07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-primary-50 dark:hover:bg-gray-800 rounded-lg transition-all"
                  aria-label="HackerRank"
                  title="HackerRank Profile"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908c0-.141-.116-.258-.258-.258h-1.49c-.141 0-.258.115-.258.258v9.546c0 .141.116.258.258.258h1.49c.141 0 .258-.115.258-.258v-4.513h4.074v4.513c0 .141.116.258.258.258h1.49c.141 0 .258-.115.258-.258V6.908c0-.141-.116-.258-.258-.258h-1.49z"/>
                  </svg>
                </a>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-primary-50 dark:hover:bg-gray-800 transition-all"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-primary-200/50 dark:border-gray-700/50">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === link.href.substring(1)
                      ? 'text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/30'
                      : 'text-neutral-700 dark:text-neutral-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-primary-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-neutral-200 dark:border-gray-700">
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-primary-50 dark:hover:bg-gray-800 rounded-lg transition-all"
                    aria-label="Toggle theme"
                  >
                    {theme === 'dark' ? <SunFill size={20} /> : <MoonStarsFill size={20} />}
                  </button>
                )}
                <a
                  href="https://www.linkedin.com/in/chinni-krishna-kongala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-primary-50 dark:hover:bg-gray-800 rounded-lg transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/ckongala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-primary-50 dark:hover:bg-gray-800 rounded-lg transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.hackerrank.com/profile/ckongala07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-primary-50 dark:hover:bg-gray-800 rounded-lg transition-all"
                  title="HackerRank Profile"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908c0-.141-.116-.258-.258-.258h-1.49c-.141 0-.258.115-.258.258v9.546c0 .141.116.258.258.258h1.49c.141 0 .258-.115.258-.258v-4.513h4.074v4.513c0 .141.116.258.258.258h1.49c.141 0 .258-.115.258-.258V6.908c0-.141-.116-.258-.258-.258h-1.49z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    );
}

export default NavbarOverlay;