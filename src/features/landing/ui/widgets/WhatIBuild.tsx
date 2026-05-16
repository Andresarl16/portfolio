'use client';

import React from 'react';
import { useWhatIBuildTranslations } from '../../application/useWhatIBuildTranslations';
import WhatIBuildCard from '../components/WhatIBuildCard';

function WhatIBuild() {
  const translate = useWhatIBuildTranslations();
  const cards = translate('cards');

  return (
    <section>
      <div className="flex flex-col gap-4 p-24">
        {cards.map((card) => (
          <WhatIBuildCard
            key={card.title}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}

export default WhatIBuild;
