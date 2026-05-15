import { cva, type VariantProps } from 'class-variance-authority';
import {
  labelIntentClasses,
  labelIntentEnumObject,
} from './shared/intent.types';

export const fieldMessageVariants = cva('flex flex-row gap-0.5 mt-1', {
  variants: {
    intent: labelIntentClasses,
    defaultVariants: {
      intent: labelIntentEnumObject.default,
    },
  },
});

export type FieldMessageVariantsProps = VariantProps<
  typeof fieldMessageVariants
>;
