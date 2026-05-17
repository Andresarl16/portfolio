import Icon from '@/components/atoms/icons/ArrowRightIcon';
import { Text } from '@/components/atoms/text';
import { cn } from '@/lib/cn';
import React from 'react';
import { ToolboxItemKey } from '../../domain/landing.constants';

import {
  CiCdPipelinesIcon,
  CypressIcon,
  GitHubIcon,
  JestIcon,
  MongoDbIcon,
  NextJsIcon,
  PostgressSqlIcon,
  ReactIcon,
  SupabaseIcon,
  TailwindCssIcon,
  TypeScriptIcon,
} from '@/components/atoms/icons';

const generalIconClassName = 'm-auto';

export const toolboxItemIcons: Record<ToolboxItemKey, React.ReactNode> = {
  jest: <JestIcon className={cn(generalIconClassName)} />,
  cypress: <CypressIcon className={cn(generalIconClassName)} />,
  typescript: <TypeScriptIcon className={cn(generalIconClassName)} />,
  nextjs: <NextJsIcon className={cn(generalIconClassName)} />,
  react: <ReactIcon className={cn(generalIconClassName)} />,
  tailwindcss: <TailwindCssIcon className={cn(generalIconClassName)} />,
  mongodb: <MongoDbIcon className={cn(generalIconClassName)} />,
  postgresql: <PostgressSqlIcon className={cn(generalIconClassName)} />,
  nodejs: null,
  supabase: <SupabaseIcon className={cn(generalIconClassName)} />,
  github: <GitHubIcon className={cn(generalIconClassName)} />,
  'ci-cd-pipelines': <CiCdPipelinesIcon className={cn(generalIconClassName)} />,
};

interface IToolboxGroupProps {
  className?: string;
  title: string;
  itemKeys: Array<{ key: ToolboxItemKey; name: string }>;
}

function ToolboxGroup({ className, title, itemKeys }: IToolboxGroupProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Text
        as="h3"
        className="bg-secondary-500 txt-brand-tertiary-600 text-center rounded-lg py-1.5"
        fontWeight={'medium'}
        fontSize={'xl'}
      >
        {title}
      </Text>
      <ul className="bg-brand-50 flex flex-row justify-center gap-10 rounded-xl p-6">
        {itemKeys.map((item) => (
          <li key={item.key} className="flex flex-col h-full gap-2">
            {toolboxItemIcons[item.key]}
            <Text
              className="txt-quaternary_on-brand text-center"
              fontWeight={'medium'}
              fontSize={'md'}
            >
              {item.name}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToolboxGroup;
