import Icon from '@/components/atoms/icons/ArrowRightIcon';
import { Text } from '@/components/atoms/text';
import React from 'react';

interface IToolboxGroupProps {
  title: string;
  itemKeys: Array<string>;
}

function ToolboxGroup({ title, itemKeys }: IToolboxGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      <Text
        as="h3"
        className="bg-secondary-500 txt-brand-tertiary-600 text-center rounded-lg py-1.5"
        fontWeight={'medium'}
        fontSize={'xl'}
      >
        {title}
      </Text>
      <ul className="bg-brand-50 flex flex-row justify-center gap-14 rounded-xl p-6">
        {itemKeys.map((key) => (
          <li key={key}>
            {key}
            <Icon />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToolboxGroup;
