import { cva, type VariantProps } from 'class-variance-authority';

import { getEnumObjectFromArray } from '@/lib/arrayToEnum';

export const fontFamilies = ['text', 'display'] as const;
export type TFontFamilyEnum = (typeof fontFamilies)[number];
export const fontFamilyEnumObject = getEnumObjectFromArray(fontFamilies);

export const fontWeights = [
  'thin',
  'extraLight',
  'light',
  'regular',
  'medium',
  'semiBold',
  'bold',
  'extraBold',
  'black',
] as const;
export type TFontWeightEnum = (typeof fontWeights)[number];
export const fontWeightEnumObject = getEnumObjectFromArray(fontWeights);

export const fontSize = [
  '4xs',
  '3xs',
  '2xs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
] as const;
export type TFontSizeEnum = (typeof fontSize)[number];
export const fontSizeEnumObject = getEnumObjectFromArray(fontSize);

export const textVariants = cva('', {
  variants: {
    fontFamily: {
      [fontFamilyEnumObject.display]: 'font-display',
      [fontFamilyEnumObject.text]: 'font-text',
    },

    // In the Designs only the following font weights are used (regular, medium, semibold, bold)
    fontWeight: {
      [fontWeightEnumObject.thin]: 'font-thin',
      [fontWeightEnumObject.extraLight]: 'font-extralight',
      [fontWeightEnumObject.light]: 'font-light',
      [fontWeightEnumObject.regular]: 'font-normal',
      [fontWeightEnumObject.medium]: 'font-medium',
      [fontWeightEnumObject.semiBold]: 'font-semibold',
      [fontWeightEnumObject.bold]: 'font-bold',
      [fontWeightEnumObject.extraBold]: 'font-extrabold',
      [fontWeightEnumObject.black]: 'font-black',
    },

    // The fontSize variables are not defined here because they depend on the font family,
    // and the sizes are defined in the compoundVariants.
    fontSize: {
      [fontSizeEnumObject['4xs']]: '',
      [fontSizeEnumObject['3xs']]: '',
      [fontSizeEnumObject['2xs']]: '',
      [fontSizeEnumObject.xs]: '',
      [fontSizeEnumObject.sm]: '',
      [fontSizeEnumObject.md]: '',
      [fontSizeEnumObject.lg]: '',
      [fontSizeEnumObject.xl]: '',
      [fontSizeEnumObject['2xl']]: '',
      [fontSizeEnumObject['3xl']]: '',
    },
  },
  compoundVariants: [
    // Font Sizes if the font family is display
    {
      fontFamily: fontFamilyEnumObject.display,
      fontSize: fontSizeEnumObject['4xs'],
      class: 'text-base',
    },
    {
      fontFamily: fontFamilyEnumObject.display,
      fontSize: fontSizeEnumObject['3xs'],
      class: 'text-lg',
    },
    {
      fontFamily: fontFamilyEnumObject.display,
      fontSize: fontSizeEnumObject['2xs'],
      class: 'text-xl',
    },
    {
      fontFamily: fontFamilyEnumObject.display,
      fontSize: fontSizeEnumObject.xs,
      class: 'text-2xl',
    },
    {
      fontFamily: fontFamilyEnumObject.display,
      fontSize: fontSizeEnumObject.sm,
      class: 'text-3xl',
    },
    {
      fontFamily: fontFamilyEnumObject.display,
      fontSize: fontSizeEnumObject.md,
      class: 'text-4xl',
    },
    {
      fontFamily: fontFamilyEnumObject.display,
      fontSize: fontSizeEnumObject.lg,
      class: 'text-5xl',
    },
    {
      fontFamily: fontFamilyEnumObject.display,
      fontSize: fontSizeEnumObject.xl,
      class: 'text-6xl',
    },
    {
      fontFamily: fontFamilyEnumObject.display,
      fontSize: fontSizeEnumObject['2xl'],
      class: 'text-7xl',
    },
    {
      fontFamily: fontFamilyEnumObject.display,
      fontSize: fontSizeEnumObject['3xl'],
      class: 'text-8xl',
    },

    // Font Sizes if the font family is text
    {
      fontFamily: fontFamilyEnumObject.text,
      fontSize: fontSizeEnumObject['4xs'],
      class: 'text-xs',
    },
    {
      fontFamily: fontFamilyEnumObject.text,
      fontSize: fontSizeEnumObject['3xs'],
      class: 'text-xs',
    },
    {
      fontFamily: fontFamilyEnumObject.text,
      fontSize: fontSizeEnumObject['2xs'],
      class: 'text-xs',
    },
    {
      fontFamily: fontFamilyEnumObject.text,
      fontSize: fontSizeEnumObject.xs,
      class: 'text-xs',
    },
    {
      fontFamily: fontFamilyEnumObject.text,
      fontSize: fontSizeEnumObject.sm,
      class: 'text-sm',
    },
    {
      fontFamily: fontFamilyEnumObject.text,
      fontSize: fontSizeEnumObject.md,
      class: 'text-base',
    },
    {
      fontFamily: fontFamilyEnumObject.text,
      fontSize: fontSizeEnumObject.lg,
      class: 'text-lg',
    },
    {
      fontFamily: fontFamilyEnumObject.text,
      fontSize: fontSizeEnumObject.xl,
      class: 'text-xl',
    },
    {
      fontFamily: fontFamilyEnumObject.text,
      fontSize: fontSizeEnumObject['2xl'],
      class: 'text-2xl',
    },
    {
      fontFamily: fontFamilyEnumObject.text,
      fontSize: fontSizeEnumObject['3xl'],
      class: 'text-3xl',
    },
  ],
  defaultVariants: {
    fontFamily: fontFamilyEnumObject.text,
    fontWeight: fontWeightEnumObject.regular,
    fontSize: fontSizeEnumObject.md,
  },
});

export type TextVariantsProps = VariantProps<typeof textVariants>;
