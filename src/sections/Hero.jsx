import HeroIntro from '../components/hero/HeroIntro';
import HeroVisual from '../components/hero/HeroVisual';
import { heroContent } from '../data/portfolioContent';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen mx-auto flex items-center justify-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-10">
        <HeroIntro content={heroContent} />
        <HeroVisual />
      </div>
    </section>
  );
};

export default Hero;
