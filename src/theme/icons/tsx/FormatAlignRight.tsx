import { SVGProps, memo } from 'react';

const SvgFormatAlignRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 3h18v2H3V3zm6 4h12v2H9V7zm-6 4h18v2H3v-2zm6 4h12v2H9v-2zm-6 4h18v2H3v-2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgFormatAlignRight);
export default Icon;
