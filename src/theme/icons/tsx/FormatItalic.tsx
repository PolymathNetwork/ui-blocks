import { SVGProps, memo } from 'react';

const SvgFormatItalic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgFormatItalic);
export default Icon;
