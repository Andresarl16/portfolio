import { cva } from 'class-variance-authority';
import { inputStateEnumObject } from './states.types';

export const controlVariants = cva(
  'flex flex-row w-full border rounded-lg placeholder:txt-placeholder items-center shadow-sm txt-primary-900 px-3 gap-2',
  {
    variants: {
      inputState: {
        [inputStateEnumObject.default]: '',
        [inputStateEnumObject.disabled]:
          'bg-disabled_subtle border-disabled cursor-not-allowed',
        [inputStateEnumObject.error]:
          'border-error focus-within:ring-2 focus-within:ring-error-600',
      },
    },

    defaultVariants: {
      inputState: inputStateEnumObject.default,
    },
  }
);
