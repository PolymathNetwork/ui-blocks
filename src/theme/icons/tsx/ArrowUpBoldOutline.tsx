import { SVGProps, memo } from 'react';

const SvgArrowUpBoldOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 13v8H8v-8H2L12 3l10 10h-6zm-9-2h3v8h4v-8h3l-5-5-5 5z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgArrowUpBoldOutline);
export default Icon;
