import { Badge } from '@/components/atoms/Badge';
import { Text } from '@/components/atoms/text';
import React from 'react';

interface ISystemsIHaveBuiltCardProps {
  title: string;
  description: string;
  roleTitle: string;
  roleBadges: Array<string>;
  keyPointsTitle: string;
  keyPoints: Array<string>;
}

function SystemsIHaveBuiltCard({
  title,
  description,
  roleTitle,
  roleBadges,
  keyPointsTitle,
  keyPoints,
}: ISystemsIHaveBuiltCardProps) {
  return (
    <div className="flex flex-col min-w-100 max-w-100 bg-brand-500 rounded-xl gap-4 px-6 py-5">
      <div className="flex flex-col gap-2">
        <Text
          as="h3"
          className="txt-primary_on-brand"
          fontFamily={'display'}
          fontWeight={'bold'}
          fontSize={'xs'}
        >
          {title}
        </Text>
        <Text
          as="p"
          className="txt-secondary_on-brand"
          fontWeight={'regular'}
          fontSize={'md'}
        >
          {description}
        </Text>
      </div>

      <div className="flex flex-col gap-1">
        <Text
          as="p"
          className="txt-quaternary_on-brand"
          fontWeight={'medium'}
          fontSize={'sm'}
        >
          {roleTitle}
        </Text>

        <ul className="flex gap-2">
          {/* TODO: Add As LI */}
          {roleBadges.map((badge) => (
            <Badge key={badge} type={'badgeColor'} color={'brand'}>
              {badge}
            </Badge>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-1">
        <Text
          as="p"
          className="txt-quaternary_on-brand"
          fontWeight={'medium'}
          fontSize={'sm'}
        >
          {keyPointsTitle}
        </Text>

        <ul className="flex flex-col gap-1 list-disc pl-6">
          {/* TODO: Add As LI */}
          {keyPoints.map((point) => (
            <li className="txt-secondary_on-brand" key={point}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SystemsIHaveBuiltCard;
