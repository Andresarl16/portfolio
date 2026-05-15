import { cn } from '@/lib/cn';
import { Text } from '../Text';
import type { TextProps } from '../Text/Text';
import {
  fontFamilyEnumObject,
  fontSizeEnumObject,
  fontWeightEnumObject,
} from '../Text/text.cva';
import { labelVariants } from './label.cva';
import {
  labelIntentEnumObject,
  type TLabelIntentEnum,
} from './shared/intent.types';

export interface LabelProps
  extends Omit<TextProps & React.LabelHTMLAttributes<HTMLLabelElement>, 'as'> {
  intent?: TLabelIntentEnum;
  required?: boolean;
}

function Label({
  children,
  className,
  fontFamily = fontFamilyEnumObject.text,
  fontWeight = fontWeightEnumObject.medium,
  fontSize = fontSizeEnumObject.sm,
  intent = labelIntentEnumObject.default,
  required,
  ...props
}: LabelProps) {
  return (
    <Text
      as="label"
      className={cn(labelVariants({ intent }), className)}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...props}
    >
      {children}
      {required ? <span className="txt-error-primary-600">*</span> : null}
    </Text>
  );
}

export default Label;
