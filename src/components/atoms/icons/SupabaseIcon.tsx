import React from 'react';

function SupabaseIcon({
  width = '59',
  height = '60',
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 59 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Supabase icon</title>
      <g clipPath="url(#clip0_8129_2691)">
        <path
          d="M34.1357 59.0032C32.6026 60.933 29.4935 59.877 29.456 57.4111L28.9146 21.3618H53.1547C57.5449 21.3618 59.9947 26.4328 57.2662 29.8689L34.1357 59.0032Z"
          fill="url(#paint0_linear_8129_2691)"
        />
        <path
          d="M34.1357 59.0032C32.6026 60.933 29.4935 59.877 29.456 57.4111L28.9146 21.3618H53.1547C57.5449 21.3618 59.9947 26.4328 57.2662 29.8689L34.1357 59.0032Z"
          fill="url(#paint1_linear_8129_2691)"
          fillOpacity="0.2"
        />
        <path
          d="M24.2778 0.997377C25.8109 -0.9324 28.92 0.123617 28.9575 2.58944L29.1934 38.6388H5.25876C0.868516 38.6388 -1.58123 33.5677 1.14726 30.1317L24.2778 0.997377Z"
          fill="#3ECF8E"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_8129_2691"
          x1="26.9741"
          y1="33.9965"
          x2="48.5179"
          y2="43.0343"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#249361" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_8129_2691"
          x1="28.0033"
          y1="11.6915"
          x2="37.8291"
          y2="30.1852"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_8129_2691">
          <rect width="58.4187" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SupabaseIcon;
