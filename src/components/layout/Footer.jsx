import { siteInfo } from '../../data/portfolioContent';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface py-8 border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold text-white tracking-tight">
            {siteInfo.name}<span className="text-primary">.</span>
          </span>
          <p className="text-textMuted text-sm mt-1">{siteInfo.roleLine}</p>
        </div>
        
        <div className="text-textMuted text-sm text-center md:text-right">
          &copy; {currentYear} {siteInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
