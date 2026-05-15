import type React from 'react';
import { getEnumObjectFromArray } from '@/lib/arrayToEnum';
import { cn } from '@/lib/cn';
import {
  type ResponsiveCVA,
  responsiveCva,
} from '@/lib/responsive/responsiveCva';
import {
  fontFamilyEnumObject,
  fontSizeEnumObject,
  fontWeightEnumObject,
  type TextVariantsProps,
  textVariants,
} from './text.cva';

const textAllowedTags = [
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'span',
  'li',
  'label',
] as const;
export type TTextAllowedTag = (typeof textAllowedTags)[number];
export const textAllowedTagsEnumObject =
  getEnumObjectFromArray(textAllowedTags);

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    TextVariantsProps {
  as?: TTextAllowedTag;
  children: React.ReactNode;
  responsiveVariants?: ResponsiveCVA<TextVariantsProps>;
}

function Text({
  as: Component = textAllowedTagsEnumObject.p,
  children,
  className,
  fontFamily = fontFamilyEnumObject.text,
  fontWeight = fontWeightEnumObject.regular,
  fontSize = fontSizeEnumObject.md,
  responsiveVariants,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        responsiveCva(
          { fontFamily, fontWeight, fontSize },
          textVariants,
          responsiveVariants
        ),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Text;
