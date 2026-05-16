import { useState, useEffect } from 'react';

export function useViewportOffsets() {
  const [offsets, setOffsets] = useState({ vh: 1080, vw: 1920 });

  useEffect(() => {
    setOffsets({ vh: window.innerHeight, vw: window.innerWidth });
  }, []);

  return offsets;
}
