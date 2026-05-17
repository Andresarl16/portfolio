import React, { Suspense } from 'react';
import Hero from '../widgets/Hero';
import Navbar from '../widgets/Navbar';
import WhatIBuild from '../widgets/WhatIBuild';
import SystemsIHaveBuilt from '../widgets/SystemsIHaveBuilt';
import ArchitectureAndThinking from '../widgets/ArchitectureAndThinking';
import Toolbox from '../widgets/Toolbox';
import Experience from '../widgets/Experience';
import ContactMe from '../widgets/ContactMe';

function Landing() {
  return (
    <main className="relative overflow-x-hidden">
      <Suspense>
        {/*  <Navbar /> */}

        <Hero />

        <WhatIBuild />

        <SystemsIHaveBuilt />

        <ArchitectureAndThinking />

        <Experience />

        <Toolbox />

        <ContactMe />
      </Suspense>
    </main>
  );
}

export default Landing;
