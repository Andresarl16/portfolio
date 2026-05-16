import { cva, type VariantProps } from 'class-variance-authority';
import { getEnumObjectFromArray } from '@/lib/arrayToEnum';
import { cn } from '@/lib/cn';

export const badgeSizes = ['sm', 'md', 'lg'] as const;
export type TBadgeSizeEnum = (typeof badgeSizes)[number];
export const badgeSizeEnumObject = getEnumObjectFromArray(badgeSizes);

export const badgeTypes = [
  'badgeColor',
  'badgeModern',
  'pillColor',
  'pillOutline',
] as const;
export type TBadgeTypeEnum = (typeof badgeTypes)[number];
export const badgeTypeEnumObject = getEnumObjectFromArray(badgeTypes);

export const badgeColors = [
  'brand',
  'error',
  'gray',
  'info',
  'success',
  'warning',
] as const;
export type TBadgeColorEnum = (typeof badgeColors)[number];
export const badgeColorEnumObject = getEnumObjectFromArray(badgeColors);

export const badgeVariants = cva(cn('border'), {
  variants: {
    size: {
      [badgeSizeEnumObject.sm]: 'h-5 px-2 py-0.5',
      [badgeSizeEnumObject.md]: 'h-6 px-2.5 py-0.5',
      [badgeSizeEnumObject.lg]: 'h-7 px-3 py-1',
    },

    color: {
      [badgeColorEnumObject.brand]: '',
      [badgeColorEnumObject.error]: '',
      [badgeColorEnumObject.gray]: '',
      [badgeColorEnumObject.info]: '',
      [badgeColorEnumObject.success]: '',
      [badgeColorEnumObject.warning]: '',
    },

    type: {
      [badgeTypeEnumObject.badgeColor]: '',
      [badgeTypeEnumObject.badgeModern]: '',
      [badgeTypeEnumObject.pillColor]: 'rounded-full',
      [badgeTypeEnumObject.pillOutline]: 'rounded-full',
    },
  },

  compoundVariants: [
    // Border Radius Variants
    {
      size: [badgeSizeEnumObject.sm, badgeSizeEnumObject.md],
      type: [badgeTypeEnumObject.badgeColor, badgeTypeEnumObject.badgeModern],
      class: 'rounded-sm',
    },
    {
      size: badgeSizeEnumObject.lg,
      type: [badgeTypeEnumObject.badgeColor, badgeTypeEnumObject.badgeModern],
      class: 'rounded-md',
    },

    // Color Variants by Type
    {
      type: [badgeTypeEnumObject.badgeColor, badgeTypeEnumObject.pillColor],
      color: badgeColorEnumObject.brand,
      class:
        'bg-gray-light-mode-50 dark:bg-gray-dark-mode-900 border-gray-light-mode-200 dark:border-gray-dark-mode-700',
    },
    {
      type: [badgeTypeEnumObject.badgeColor, badgeTypeEnumObject.pillColor],
      color: badgeColorEnumObject.error,
      class:
        'bg-error-50 dark:bg-error-950 border-error-200 dark:border-error-800',
    },
    {
      type: [badgeTypeEnumObject.badgeColor, badgeTypeEnumObject.pillColor],
      color: badgeColorEnumObject.gray,
      class:
        'bg-brand-50 dark:bg-brand-950 border-brand-200 dark:border-brand-800',
    },
    {
      type: [badgeTypeEnumObject.badgeColor, badgeTypeEnumObject.pillColor],
      color: badgeColorEnumObject.info,
      class: '',
    },
    {
      type: [badgeTypeEnumObject.badgeColor, badgeTypeEnumObject.pillColor],
      color: badgeColorEnumObject.success,
      class:
        'bg-success-50 dark:bg-success-950 border-success-200 dark:border-success-800',
    },
    {
      type: [badgeTypeEnumObject.badgeColor, badgeTypeEnumObject.pillColor],
      color: badgeColorEnumObject.warning,
      class:
        'bg-warning-50 dark:bg-warning-950 border-warning-200 dark:border-warning-800',
    },
  ],

  defaultVariants: {
    size: badgeSizeEnumObject.md,
    color: badgeColorEnumObject.gray,
    type: badgeTypeEnumObject.pillColor,
  },
});

export type BadgeVariantProps = VariantProps<typeof badgeVariants>;
