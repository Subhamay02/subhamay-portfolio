import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { navLinks, siteInfo } from '../../data/portfolioContent';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 50;
      setScrolled((current) => (current === nextScrolled ? current : nextScrolled));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (name) => {
    setActive(name);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold tracking-tighter text-white">
          {siteInfo.initials}<span className="text-primary">.</span>
        </a>

        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative text-textMuted hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide"
                onClick={() => handleNavClick(link.name)}
              >
                {link.name}
                {active === link.name && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            type="button"
            className="text-textMuted hover:text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden mx-6 mt-4 rounded-xl border border-white/10 bg-background/95 backdrop-blur-md p-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`block py-3 text-sm font-medium transition-colors ${
                  active === link.name ? 'text-primary' : 'text-textMuted hover:text-white'
                }`}
                onClick={() => handleNavClick(link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
