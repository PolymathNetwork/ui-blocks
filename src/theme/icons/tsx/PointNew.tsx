import { SVGProps, memo } from 'react';

const SvgPointNew = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={8} fill="#DCEFFE" />
    <circle cx={12} cy={12} r={5} fill="#1348E4" />
  </svg>
);

const Icon = memo(SvgPointNew);
export default Icon;
