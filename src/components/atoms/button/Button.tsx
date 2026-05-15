import type * as React from 'react';
import { cn } from '@/lib/cn';
import {
  type ResponsiveCVA,
  responsiveCva,
} from '@/lib/responsive/responsiveCva';
import {
  type ButtonVariantProps,
  buttonSizeEnumObject,
  buttonVariants,
  variantEnumObject,
} from './button.cva';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  className?: string;
  responsiveVariants?: ResponsiveCVA<ButtonVariantProps>;
}

function Button({
  className,
  variant = variantEnumObject.default,
  size = buttonSizeEnumObject.default,
  responsiveVariants,
  ...props
}: ButtonProps) {
  return (
    <button
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(
        responsiveCva({ variant, size }, buttonVariants, responsiveVariants),
        className
      )}
      {...props}
    />
  );
}

export default Button;
