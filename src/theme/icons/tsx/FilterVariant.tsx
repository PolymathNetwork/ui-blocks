import { SVGProps, memo } from 'react';

const SvgFilterVariant = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6 13h12v-2H6v2zM3 6v2h18V6H3zm7 12h4v-2h-4v2z" fill="#8C9BA5" />
  </svg>
);

const Icon = memo(SvgFilterVariant);
export default Icon;
