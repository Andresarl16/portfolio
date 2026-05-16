import { getEnumObjectFromArray } from '@/lib/arrayToEnum';

const badgeDecorators = ['dot', 'iconTrailing', 'iconLeading', 'only'] as const;
export type TBadgeDecoratorEnum = (typeof badgeDecorators)[number];
export const badgeDecoratorEnumObject = getEnumObjectFromArray(badgeDecorators);

// Utility Types
const badgeDecoratorsWithIcon = [
  badgeDecoratorEnumObject.iconLeading,
  badgeDecoratorEnumObject.iconTrailing,
] as const;
export type TBadgeDecoratorWithIconEnum =
  (typeof badgeDecoratorsWithIcon)[number];
export const badgeDecoratorWithIconEnumObject = getEnumObjectFromArray(
  badgeDecoratorsWithIcon
);

const badgeDecoratorsWithoutIcon = [
  badgeDecoratorEnumObject.dot,
  badgeDecoratorEnumObject.only,
] as const;
export type TBadgeDecoratorWithoutIconEnum =
  (typeof badgeDecoratorsWithoutIcon)[number];
export const badgeDecoratorWithoutIconEnumObject = getEnumObjectFromArray(
  badgeDecoratorsWithoutIcon
);
