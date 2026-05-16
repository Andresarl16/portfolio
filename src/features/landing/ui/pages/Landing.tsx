import React, { Suspense } from 'react';
import Hero from '../widgets/Hero';
import Navbar from '../widgets/Navbar';
import WhatIBuild from '../widgets/WhatIBuild';

function Landing() {
  return (
    <main className="relative">
      <Suspense>
        <Navbar />

        <Hero />

        <WhatIBuild />
      </Suspense>
    </main>
  );
}

export default Landing;
