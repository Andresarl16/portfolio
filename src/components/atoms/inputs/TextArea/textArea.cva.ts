import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';
import { inputGeneralClasses } from '../shared/general.classes';
import { inputSizeClasses, inputSizeEnumObject } from '../shared/size.types';
import {
  inputStateClasses,
  inputStateEnumObject,
} from '../shared/states.types';

export const textAreaVariants = cva(cn('resize-none', inputGeneralClasses), {
  variants: {
    inputSize: {
      ...inputSizeClasses,
      [inputSizeEnumObject.sm]: cn(
        'py-1.5',
        inputSizeClasses[inputSizeEnumObject.sm]
      ),
      [inputSizeEnumObject.md]: cn(
        'py-2',
        inputSizeClasses[inputSizeEnumObject.md]
      ),
    },
    inputState: inputStateClasses,
  },

  defaultVariants: {
    inputSize: inputSizeEnumObject.md,
    inputState: inputStateEnumObject.default,
  },
});

export type TextAreaVariantProps = VariantProps<typeof textAreaVariants>;
