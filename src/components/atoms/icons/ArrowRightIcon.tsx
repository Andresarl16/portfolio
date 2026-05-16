import type React from 'react';

function Icon({
  width = '9',
  height = '9',
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={width} height={height} viewBox="0 0 9 9" fill="none" {...props}>
      <title>Arrow right icon</title>
      <path
        d="M0.75 4.25H7.75M7.75 4.25L4.25 0.75M7.75 4.25L4.25 7.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Icon;
