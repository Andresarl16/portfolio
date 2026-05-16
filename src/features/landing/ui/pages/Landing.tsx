import React, { Suspense } from 'react';
import Hero from '../widgets/Hero';

function Landing() {
  return (
    <main>
      <Suspense>
        <Hero />
      </Suspense>
    </main>
  );
}

export default Landing;
