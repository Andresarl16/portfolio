import { cn } from '@/lib/cn';
import { Text } from '../Text';
import type { TextProps } from '../Text/Text';
import {
  fontFamilyEnumObject,
  fontSizeEnumObject,
  fontWeightEnumObject,
} from '../Text/text.cva';
import { fieldMessageVariants } from './fieldMessage.cva';
import {
  labelIntentEnumObject,
  type TLabelIntentEnum,
} from './shared/intent.types';

export interface FieldMessageProps extends Omit<TextProps, 'as'> {
  intent?: TLabelIntentEnum;
}

function FieldMessage({
  children,
  className,
  fontFamily = fontFamilyEnumObject.text,
  fontWeight = fontWeightEnumObject.medium,
  fontSize = fontSizeEnumObject.sm,
  intent = labelIntentEnumObject.default,
  ...props
}: FieldMessageProps) {
  return (
    <Text
      as="p"
      className={cn(fieldMessageVariants({ intent }), className)}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...props}
    >
      {children}
    </Text>
  );
}

export default FieldMessage;
