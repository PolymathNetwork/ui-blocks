import { SVGProps, memo } from 'react';

const SvgLightningBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11 15H6l7-14v8h5l-7 14v-8z" fill="#8C9BA5" />
  </svg>
);

const Icon = memo(SvgLightningBolt);
export default Icon;
