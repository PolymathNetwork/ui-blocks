import { SVGProps, memo } from 'react';

const SvgFormatUnderline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 21h14v-2H5v2zm7-4a6 6 0 006-6V3h-2.5v8a3.5 3.5 0 11-7 0V3H6v8a6 6 0 006 6z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgFormatUnderline);
export default Icon;
