import React, { Suspense } from 'react';
import Hero from '../widgets/Hero';
import Navbar from '../widgets/Navbar';

function Landing() {
  return (
    <main className="relative h-[1024px]">
      <Suspense>
        <Navbar />

        <Hero />
      </Suspense>
    </main>
  );
}

export default Landing;
