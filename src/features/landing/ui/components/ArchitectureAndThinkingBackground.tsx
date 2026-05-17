import React from 'react';

interface IArchitectureAndThinkingBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {}

function ArchitectureAndThinkingBackground({
  className,
  ...props
}: IArchitectureAndThinkingBackgroundProps) {
  return (
    <div className={`flex flex-col ${className ?? ''}`} {...props}>
      <svg
        viewBox="0 0 1440 126"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full shrink-0"
      >
        <path
          d="M1651 0C1652.66 0 1654 1.34315 1654 3C1654 4.65685 1652.66 6 1651 6H1353C1286.73 6 1233 59.7258 1233 126H207C207 59.7258 153.274 6 87 6H-211C-212.657 6 -214 4.65685 -214 3C-214 1.34315 -212.657 0 -211 0H1651Z"
          fill="currentColor"
        />
      </svg>
      <div className="flex-1 mx-[14.37%] -mt-0.25 bg-current" />
      <svg
        viewBox="0 0 1440 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full shrink-0 -mt-0.25"
      >
        <path
          d="M207 0H1233C1233 132.548 1125.55 240 993 240H447C314.452 240 207 132.548 207 0Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export default ArchitectureAndThinkingBackground;
