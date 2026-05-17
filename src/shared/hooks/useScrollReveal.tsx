import { AnimationDefinition, Transition, useAnimationControls } from 'motion/react';
import React, { useEffect, useRef } from 'react';

interface UseScrollRevealProps {
  ref: React.RefObject<HTMLElement | null>;
  amount?: number;
  animationStart: {
    definition: AnimationDefinition;
    transitionOverride?: Transition;
  };
}

function getNaturalTop(element: HTMLElement): number {
  let top = 0;
  let el: HTMLElement | null = element;
  while (el) {
    top += el.offsetTop;
    el = el.offsetParent as HTMLElement | null;
  }
  return top;
}

function useScrollReveal({ ref, amount = 0, animationStart }: UseScrollRevealProps) {
  const animationControls = useAnimationControls();
  const animationStartRef = useRef(animationStart);
  animationStartRef.current = animationStart;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    function check() {
      const naturalTop = getNaturalTop(element!);
      const triggerPoint = naturalTop - window.innerHeight * (1 - amount);

      if (window.scrollY >= triggerPoint) {
        const { definition, transitionOverride } = animationStartRef.current;
        animationControls.start(definition, transitionOverride);
        window.removeEventListener('scroll', check);
      }
    }

    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, [ref, animationControls, amount]);

  return { animationControls };
}

export default useScrollReveal;
