function DotIcon({
  width = 6,
  height = 6,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={width} height={height} viewBox="0 0 6 6" fill="none" {...props}>
      <title>Dot icon</title>
      <circle cx="3" cy="3" r="3" fill="currentColor" />
    </svg>
  );
}

export default DotIcon;
