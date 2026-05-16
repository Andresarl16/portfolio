import { Text } from '@/components/atoms/text';
import { cn } from '@/lib/cn';

interface WhatIBuildCardProps {
  className?: string;
  title: string;
  description: string;
}

function WhatIBuildCard({
  className,
  title,
  description,
}: WhatIBuildCardProps) {
  return (
    <div className={cn('bg-brand-500 px-6 py-5 gap-3 rounded-xl', className)}>
      <Text
        className="txt-secondary_on-brand"
        fontFamily={'display'}
        fontWeight={'semiBold'}
        fontSize={'xs'}
      >
        {title}
      </Text>
      <Text
        className="txt-primary_on-brand"
        fontWeight={'regular'}
        fontSize={'md'}
      >
        {description}
      </Text>
    </div>
  );
}

export default WhatIBuildCard;
