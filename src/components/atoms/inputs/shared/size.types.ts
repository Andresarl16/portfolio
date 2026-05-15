import { getEnumObjectFromArray } from '@/lib/arrayToEnum';

export const inputSizes = ['sm', 'md'] as const;
export type TInputSizeEnum = (typeof inputSizes)[number];
export const inputSizeEnumObject = getEnumObjectFromArray(inputSizes);

export const inputSizeClasses = {
  [inputSizeEnumObject.sm]: 'min-h-10 h-10',
  [inputSizeEnumObject.md]: 'min-h-11 h-11',
};
