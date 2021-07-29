import { SVGProps, memo } from 'react';

const SvgSortVariant = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3 13h12v-2H3v2zm0-7v2h18V6H3zm0 12h6v-2H3v2z" fill="#8C9BA5" />
  </svg>
);

const Icon = memo(SvgSortVariant);
export default Icon;
