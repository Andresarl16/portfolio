import { Text } from '@/components/atoms/text';

interface WhatIBuildCardProps {
  title: string;
  description: string;
}

function WhatIBuildCard({ title, description }: WhatIBuildCardProps) {
  return (
    <div className="w-112.5 bg-brand-500 px-6 py-5 gap-3 rounded-xl">
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
