'use client';

import React from 'react';
import { cn } from '@/lib/cn';
import {
  type ResponsiveCVA,
  responsiveCva,
} from '@/lib/responsive/responsiveCva';
import { FieldMessage, Label } from '../../Label';
import { controlVariants } from '../shared/control.cva';
import { inputSizeEnumObject } from '../shared/size.types';
import { getInputState } from '../shared/states.types';
import {
  type InputControlVariantProps,
  inputControlVariants,
  inputVariants,
} from './input.cva';

export interface TInputClasses {
  root?: string;
  label?: string;
  control?: string;
  input?: string;
  error?: string;
  hint?: string;
}

export interface InputProps extends InputControlVariantProps {
  label?: string;
  rightChildren?: React.ReactNode;
  leftChildren?: React.ReactNode;
  classes?: TInputClasses;
  error?: string;
  hintText?: string;
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  responsiveVariants?: ResponsiveCVA<InputControlVariantProps>;
}

function Input({
  label,
  rightChildren,
  leftChildren,
  classes,
  error,
  inputProps,
  inputSize = inputSizeEnumObject.md,
  hintText,
  responsiveVariants,
}: InputProps) {
  const reactId = React.useId();
  const inputId = inputProps?.id ?? reactId;

  const inputState = getInputState({
    error,
    disabled: inputProps?.disabled,
  });

  // Function that prevents numeric values from changing on scroll
  const handleWheel = (event: React.WheelEvent<HTMLInputElement>) => {
    if (inputProps?.type === 'number') {
      event.currentTarget.blur();
    }

    inputProps?.onWheel?.(event);
  };

  // Function that removes the first default value 0 when writing
  const handleClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const inputElement = event.currentTarget as HTMLInputElement;
    const currentValue = inputElement.value;
    if (currentValue === '0') {
      inputElement.value = '';
      const _event = new Event('input', { bubbles: true });
      inputElement.dispatchEvent(_event);
    }

    inputProps?.onClick?.(event);
  };

  return (
    <div className={cn('w-full p-0 m-0', classes?.root)}>
      {label ? (
        <Label
          className={classes?.label}
          intent={'default'}
          required={inputProps?.required}
          htmlFor={inputId}
        >
          {label}
        </Label>
      ) : null}

      <div
        className={cn(
          controlVariants({
            inputState,
          }),
          responsiveCva(
            { inputSize },
            inputControlVariants,
            responsiveVariants
          ),
          classes?.control
        )}
      >
        {leftChildren ? leftChildren : null}

        <input
          {...inputProps}
          onClick={handleClick}
          inputMode={
            inputProps?.type === 'number'
              ? inputProps?.step === 'any'
                ? 'decimal'
                : 'numeric'
              : 'text'
          }
          onWheel={handleWheel}
          className={cn(
            inputVariants({ inputState }),
            classes?.input,
            inputProps?.className
          )}
          id={inputId}
        />

        {rightChildren ? rightChildren : null}
      </div>

      {error ? (
        <FieldMessage className={classes?.error} intent="error">
          {error}
        </FieldMessage>
      ) : null}
      {hintText ? (
        <FieldMessage className={classes?.hint} intent="info">
          {hintText}
        </FieldMessage>
      ) : null}
    </div>
  );
}

export default Input;
