import { SVGProps, memo } from 'react';

const SvgArrowUpBoldFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16 13v8H8v-8H2L12 3l10 10h-6z" fill="#8C9BA5" />
  </svg>
);

const Icon = memo(SvgArrowUpBoldFilled);
export default Icon;
