import { useState, useEffect } from 'react';

export function useViewportOffsets() {
  const [offsets, setOffsets] = useState<{ vh: number; vw: number } | null>(null);

  useEffect(() => {
    setOffsets({ vh: window.innerHeight, vw: window.innerWidth });
  }, []);

  return offsets;
}
