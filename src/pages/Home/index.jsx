import React from 'react';
import HeroSection from './components/HeroSection';
import TournamentCountdown from './components/TournamentCountdown';
import ThreeNations from './components/ThreeNations';
import WhyWorldCup2030 from './components/WhyWorldCup2030';
import Footer from 'components/Footer';

function Home() {
  return (
    <div>
      <HeroSection name={'FIFA World Cup'} time={'2030'} />
      <TournamentCountdown />
      <ThreeNations />
      <WhyWorldCup2030 />
      <Footer />
    </div>
  );
}

export default Home;


