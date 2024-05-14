"use client"


import GlancePrice from '../../components/crypto/home/GlancePrice';
import LandingHero from '../../components/crypto/home/LandingHero';
import CrossRates from '../../components/crypto/home/CrossRates';
import HeatMap from '../../components/crypto/home/HeatMap';
import News from '../../components/crypto/home/News';

export default function Home() {
  return (
    <div className = "_next">
      <LandingHero />
      <GlancePrice />
      <CrossRates />
      <HeatMap />
      <News />
    </div>
   
  );
}



