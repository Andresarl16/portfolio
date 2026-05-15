import { cva, type VariantProps } from 'class-variance-authority';
import { getEnumObjectFromArray } from '@/lib/arrayToEnum';

export const variants = [
  'default',
  'secondary-gray',
  'secondary-color',
  'link-gray',
  'link-color',
  'destructive',
] as const;
export type TVariantEnum = (typeof variants)[number];
export const variantEnumObject = getEnumObjectFromArray(variants);

export const buttonSizes = ['xs', 'sm', 'default', 'lg', 'xl', '2xl'] as const;
export type TButtonSizeEnum = (typeof buttonSizes)[number];
export const buttonSizeEnumObject = getEnumObjectFromArray(buttonSizes);

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        [variantEnumObject.default]:
          'bg-brand-600 text-base-white hover:bg-brand-700 disabled:bg-disabled disabled:txt-disabled',
        [variantEnumObject['secondary-gray']]:
          'bg-base-white dark:bg-gray-dark-mode-900 hover:bg-gray-light-mode-50 hover:dark:bg-gray-dark-mode-800 border-gray-light-mode-300 dark:border-gray-dark-mode-500 text-gray-light-mode-700 hover:text-gray-light-mode-800 dark:hover:text-gray-dark-mode-100 dark:text-gray-dark-mode-300 disabled:opacity-50 disabled:text-fg-disabled',
        [variantEnumObject['secondary-color']]:
          'bg-base-white dark:bg-gray-dark-mode-900 hover:bg-brand-50 hover:dark:bg-gray-dark-mode-800 border-brand-300 dark:border-gray-dark-mode-300 text-brand-700 hover:text-brand-800 dark:hover:text-gray-dark-mode-100 dark:text-gray-dark-mode-300',
        [variantEnumObject['link-gray']]:
          'border-0 shadow-none text-gray-light-mode-600 dark:hover:text-gray-dark-mode-200 hover:text-gray-light-mode-700 dark:text-gray-dark-mode-400',
        [variantEnumObject['link-color']]:
          'border-0 shadow-none txt-brand-tertiary-600 hover:text-brand-300 dark:text-gray-dark-mode-300 disabled:text-disabled disabled:bg-transparent',
        [variantEnumObject.destructive]:
          'bg-error-600 text-base-white hover:bg-error-700 focus:ring-error-400',
      },
      size: {
        [buttonSizeEnumObject.xs]: 'min-h-7 max-h-7 px-2',
        [buttonSizeEnumObject.sm]: 'min-h-9 max-h-9 px-3 py-2',
        [buttonSizeEnumObject.default]: 'min-h-10 max-h-10 px-4 py-2',
        [buttonSizeEnumObject.lg]: 'min-h-11 max-h-11 px-5 py-2',
        [buttonSizeEnumObject.xl]: 'min-h-12 max-h-12 py-3 px-[18px]',
        [buttonSizeEnumObject['2xl']]: 'min-h-16 max-h-16 py-5 px-8',
      },
    },
    defaultVariants: {
      variant: variantEnumObject.default,
      size: buttonSizeEnumObject.default,
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
