import { cva, type VariantProps } from 'class-variance-authority';
import {
  labelIntentClasses,
  labelIntentEnumObject,
} from './shared/intent.types';

export const labelVariants = cva('flex flex-row gap-0.5 mb-1', {
  variants: {
    intent: labelIntentClasses,
    defaultVariants: {
      intent: labelIntentEnumObject.default,
    },
  },
});

export type LabelVariantsProps = VariantProps<typeof labelVariants>;
