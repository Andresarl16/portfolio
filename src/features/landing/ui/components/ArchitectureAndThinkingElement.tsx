import { Text } from '@/components/atoms/text';
import React from 'react';

interface IArchitectureAndThinkingElementProps {
  title: string;
  descriptionLine1: string;
  descriptionLine2: string;
}

function ArchitectureAndThinkingElement({
  title,
  descriptionLine1,
  descriptionLine2,
}: IArchitectureAndThinkingElementProps) {
  return (
    <div className="flex flex-col items-center mx-auto gap-3">
      <hr className="w-8 border border-brand-400" />

      <Text
        as="h3"
        className="w-fit txt-brand-tertiary-600"
        fontFamily={'display'}
        fontWeight={'bold'}
        fontSize={'xs'}
      >
        {title}
      </Text>

      <Text
        as="p"
        className="w-fit flex flex-col text-brand-500 gap-1"
        fontWeight={'regular'}
        fontSize={'md'}
      >
        <span className="text-center">{descriptionLine1}</span>
        <span className="text-center">{descriptionLine2}</span>
      </Text>
    </div>
  );
}

export default ArchitectureAndThinkingElement;
