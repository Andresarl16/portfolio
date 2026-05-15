import { getEnumObjectFromArray } from '@/lib/arrayToEnum';

export const breakpoints = ['base', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
export type TBreakpointEnum = (typeof breakpoints)[number];
export const breakpointEnumObject = getEnumObjectFromArray(breakpoints);
