import { SVGProps, memo } from 'react';

const SvgFormatAlignCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 3h18v2H3V3zm4 4h10v2H7V7zm-4 4h18v2H3v-2zm4 4h10v2H7v-2zm-4 4h18v2H3v-2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgFormatAlignCenter);
export default Icon;
