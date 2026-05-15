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
import { type TextAreaVariantProps, textAreaVariants } from './textArea.cva';

export interface TInputClasses {
  root?: string;
  label?: string;
  textArea?: string;
  error?: string;
  hint?: string;
}

export interface InputProps extends Omit<TextAreaVariantProps, 'inputState'> {
  label?: string;
  classes?: TInputClasses;
  error?: string;
  hintText?: string;
  textAreaProps?: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
  responsiveVariants?: ResponsiveCVA<Omit<TextAreaVariantProps, 'inputState'>>;
}

function TextArea({
  label,
  classes,
  error,
  textAreaProps,
  inputSize = inputSizeEnumObject.md,
  hintText,
  responsiveVariants,
}: InputProps) {
  const reactId = React.useId();
  const inputId = textAreaProps?.id ?? reactId;

  const inputState = getInputState({
    error,
    disabled: textAreaProps?.disabled,
  });

  return (
    <div className={cn('w-full flex flex-col p-0 m-0', classes?.root)}>
      {label ? (
        <Label
          className={classes?.label}
          intent={'default'}
          required={textAreaProps?.required}
          htmlFor={inputId}
        >
          {label}
        </Label>
      ) : null}

      <textarea
        {...textAreaProps}
        className={cn(
          controlVariants({
            inputState,
          }),
          responsiveCva(
            { inputState, inputSize },
            textAreaVariants,
            responsiveVariants
          ),
          classes?.textArea,
          textAreaProps?.className
        )}
        id={inputId}
      />

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

export default TextArea;
