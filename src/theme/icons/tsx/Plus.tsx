import { SVGProps, memo } from 'react';

const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#8C9BA5" />
  </svg>
);

const Icon = memo(SvgPlus);
export default Icon;
