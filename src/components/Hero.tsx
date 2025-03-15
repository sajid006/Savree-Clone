import React from 'react';
import { heroBackground } from '../utils/constants';

const Hero = () => {
  return (
    <section className="relative pt-18">
      {/* Desktop Hero Image */}
      <div className="block">
        <img
          src={heroBackground}
          alt="Engineering Education"
          className="w-full h-[600px] object-cover"
        />
      </div>
      {/* Content Overlay */}
      <div className="absolute inset-0 bg-blue-900/70">
        <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white">
          <p className="text-lg md:text-xl mb-4">saVRee is THE engineering training company</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Making engineering education<br />
            accessible and engaging
          </h1>
          
          <div className="grid grid-cols-3 gap-8 max-w-3xl">
            <div>
              <p className="text-3xl md:text-4xl font-bold mb-2">500+</p>
              <p className="text-sm md:text-base">interactive 3D models</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold mb-2">90+</p>
              <p className="text-sm md:text-base">hours of training videos</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold mb-2">50+</p>
              <p className="text-sm md:text-base">engineering handbooks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;