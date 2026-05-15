import { breakpoints, type TBreakpointEnum } from './breakpoints.types';

export type ResponsiveCVA<T> = Partial<Record<TBreakpointEnum, T>>;

function prefixClasses(bp: TBreakpointEnum, classes: string) {
  const c = classes.trim();
  if (!c) return '';
  if (bp === 'base') return c;

  // Prefija cada “token” (separado por espacios) con `${bp}:`
  // Ej: "text-sm font-bold" -> "md:text-sm md:font-bold"
  return c.replace(/\S+/g, (token) => `${bp}:${token}`);
}

export function responsiveCva<T>(
  defaultVariants: T,
  cvaFn: (variants: T) => string,
  responsive?: ResponsiveCVA<T>
) {
  if (!responsive) return cvaFn(defaultVariants);

  const out: string[] = [];

  // base efectivo (sin mutar responsive)
  const basePartial = responsive.base ?? {};
  let prev: T = { ...defaultVariants, ...basePartial };

  // orden determinístico (tailwind)
  for (const bp of breakpoints) {
    const partial = responsive[bp];
    if (!partial && bp !== 'base') continue;

    const merged =
      bp === 'base' ? prev : ({ ...defaultVariants, ...(partial ?? {}) } as T); // hereda del default

    prev = merged;

    const classes = cvaFn(merged);
    if (!classes) continue;

    const prefixed = prefixClasses(bp, classes);
    if (prefixed) out.push(prefixed);
  }

  return out.join(' ');
}
