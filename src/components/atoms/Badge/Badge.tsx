import type React from 'react';
import { cn } from '@/lib/cn';
import { type BadgeVariantProps, badgeVariants } from './badge.cva';
import {
  badgeDecoratorEnumObject,
  type TBadgeDecoratorEnum,
  type TBadgeDecoratorWithIconEnum,
  type TBadgeDecoratorWithoutIconEnum,
} from './badge.types';
import { DotIcon } from '../icons';
import { Text } from '../text';

type BadgeIconProps =
  | {
      decorator?: TBadgeDecoratorWithoutIconEnum;
      icon?: never;
    }
  | {
      decorator: TBadgeDecoratorWithIconEnum;
      icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    };

type BadgeProps = BadgeVariantProps &
  BadgeIconProps & {
    children?: React.ReactNode; // TODO: FIX TYPING DECORATOR
    className?: string;
    decorator?: TBadgeDecoratorEnum;
  };

function Badge({
  className,
  color,
  icon: Icon,
  decorator,
  size,
  type,
  children,
  ...props
}: BadgeProps) {
  console.log('color', color);
  return (
    <div
      className={cn(
        'w-fit flex gap-1.5 items-center',
        badgeVariants({ color, size, type }),
        className
      )}
    >
      {decorator === badgeDecoratorEnumObject.dot ? <DotIcon /> : null}
      {decorator === badgeDecoratorEnumObject.iconLeading && Icon ? (
        <Icon />
      ) : null}

      {decorator !== badgeDecoratorEnumObject.only ? (
        <Text
          fontFamily={'text'}
          fontWeight={'medium'}
          fontSize={size === 'sm' ? 'xs' : 'sm'}
        >
          {children}
        </Text>
      ) : null}

      {decorator === badgeDecoratorEnumObject.iconTrailing ? <p>+</p> : null}
    </div>
  );
}

export default Badge;
