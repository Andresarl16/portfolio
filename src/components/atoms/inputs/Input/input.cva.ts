import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';
import { inputGeneralClasses } from '../shared/general.classes';
import { inputSizeClasses, inputSizeEnumObject } from '../shared/size.types';
import {
  inputStateClasses,
  inputStateEnumObject,
} from '../shared/states.types';

export const inputVariants = cva(
  cn('border-0 focus:border-0', inputGeneralClasses),
  {
    variants: {
      inputState: inputStateClasses,
    },

    defaultVariants: {
      inputState: inputStateEnumObject.default,
    },
  }
);

export const inputControlVariants = cva('', {
  variants: {
    inputSize: inputSizeClasses,
  },

  defaultVariants: {
    inputSize: inputSizeEnumObject.md,
  },
});

export type InputVariantProps = VariantProps<typeof inputVariants>;

export type InputControlVariantProps = VariantProps<
  typeof inputControlVariants
>;
